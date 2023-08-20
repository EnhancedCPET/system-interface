import { excelTimeValuesToSeconds } from "../../../src/systems/utils/utils";

describe('excelTimeValuesToSeconds', () => {
    it('converts Excel time values to seconds', () => {
      const inputTimeValues = [0.000694444, 0.5, 0.75];
      const expectedOutput = [60, 43200, 64800];
  
      const result = excelTimeValuesToSeconds(inputTimeValues);
  
      expect(result).toEqual(expectedOutput);
    });
  
    it('handles an empty array input', () => {
      const inputTimeValues: number[] = [];
      const expectedOutput: number[] = [];
  
      const result = excelTimeValuesToSeconds(inputTimeValues);
  
      expect(result).toEqual(expectedOutput);
    });
  
    it('handles a single time value', () => {
      const inputTimeValues = [0.25];
      const expectedOutput = [21600];
  
      const result = excelTimeValuesToSeconds(inputTimeValues);
  
      expect(result).toEqual(expectedOutput);
    });
  
    it('handles negative time values', () => {
      const inputTimeValues = [-0.5, -0.25];
      const expectedOutput = [-43200, -21600];
  
      const result = excelTimeValuesToSeconds(inputTimeValues);
  
      expect(result).toEqual(expectedOutput);
    });
    
    it('handles floating point precision', () => {
      const inputTimeValues = [0.000694444];
      const expectedOutput = [60];
  
      const result = excelTimeValuesToSeconds(inputTimeValues);
  
      expect(result).toEqual(expectedOutput);
    });
  });