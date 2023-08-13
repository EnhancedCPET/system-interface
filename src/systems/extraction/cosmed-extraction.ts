import { Demographics, TimeSeries } from '../../types';
import {
  createDefaultDemographics,
  createDefaultTimeSeries,
} from '../factories/default-values';
import * as XLSX from 'xlsx';

/**
 * Extracts COSMED data from an Excel worksheet.
 *
 * @param {XLSX.WorkSheet} excelSheet - The Excel worksheet to extract data from.
 * @returns An object containing demographics and time series data.
 */
export function extractCosmedData(excelSheet: XLSX.WorkSheet): {
  demographics: Demographics;
  timeSeries: TimeSeries;
} {
  let demographics: Demographics = createDefaultDemographics();
  let timeSeries: TimeSeries = createDefaultTimeSeries();

  const meta_mapping: Record<string, keyof Demographics> = {
    ID: 'id',
    'Last Name': 'lname',
    'First Name': 'fname',
    Gender: 'gender',
    Age: 'age',
    'Height (cm)': 'height',
    'Weight (kg)': 'weight',
    'D.O.B.': 'dob',
  };

  Object.keys(meta_mapping).forEach((key, index) => {
    const cell_ref = `B${index + 1}`;
    if (excelSheet[cell_ref]) {
      const demographicKey = meta_mapping[key];
      (demographics as any)[demographicKey] = excelSheet[cell_ref].v;
    }
  });

  // extracting time series data
  let row = 4;
  while (excelSheet[`J${row}`]) {
    if (excelSheet[`J${row}`]) timeSeries.t.push(excelSheet[`J${row}`].v);
    if (excelSheet[`M${row}`]) timeSeries.ve.push(excelSheet[`M${row}`].v);
    if (excelSheet[`O${row}`]) timeSeries.vo2.push(excelSheet[`O${row}`].v);
    if (excelSheet[`P${row}`]) timeSeries.vco2.push(excelSheet[`P${row}`].v);
    if (excelSheet[`X${row}`]) timeSeries.hr.push(excelSheet[`X${row}`].v);
    if (excelSheet[`AJ${row}`]) timeSeries.power.push(excelSheet[`AJ${row}`].v);
    row++;
  }

  return { demographics, timeSeries };
}
