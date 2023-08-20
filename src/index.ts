import { processCosmed } from './systems/cosmed';
import * as XLSX from 'xlsx';

function extractDataFromSheet(sheet: XLSX.WorkSheet, system: string) {
  switch (system.toLowerCase()) {
    case 'cosmed':
      return processCosmed(sheet);
    default:
      throw new Error('Unsupported system');
  }
}

const SystemInterface = {
  extractFileData(filePath: string, system: string) {
    const workbook = XLSX.readFile(filePath);
    const sheet_name_list = workbook.SheetNames;
    const sheet = workbook.Sheets[sheet_name_list[0]];

    return extractDataFromSheet(sheet, system);
  },

  extractBufferData(bufferArray: ArrayBuffer, system: string) {
    const workbook = XLSX.read(bufferArray, { type: 'buffer' });
    const sheet_name_list = workbook.SheetNames;
    const sheet = workbook.Sheets[sheet_name_list[0]];

    return extractDataFromSheet(sheet, system);
  },
};

export { SystemInterface };
