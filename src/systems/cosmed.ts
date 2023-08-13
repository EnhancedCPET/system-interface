import { Demographics, TimeSeries } from '../types';
import { extractCosmedData } from './extraction/cosmed-extraction';
import { excelTimeValuesToSeconds } from './utils/utils';
import * as XLSX from 'xlsx';

export function processCosmed(sheet: XLSX.WorkSheet): {
  demographics: Demographics;
  timeSeries: TimeSeries;
} {
  // Extract Data
  const object = extractCosmedData(sheet);
  let demographics = object.demographics;
  let timeSeries = object.timeSeries;

  // Clean Data
  timeSeries.t = excelTimeValuesToSeconds(timeSeries.t);

  return { demographics, timeSeries };
}
