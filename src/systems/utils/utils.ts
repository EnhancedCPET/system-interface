const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

/**
 * Convert Excel time values to seconds.
 * In Excel, time is represented as a fraction of a 24-hour day.
 * For example, "00:01" (1 minute) is stored as (1/24*60) = 0.000694444.
 * This function transforms such Excel values to their equivalent in seconds.
 *
 * @param {number[]} timeValues - Array of Excel time values.
 * @returns {number[]} - Array of time values in seconds.
 */
export function excelTimeValuesToSeconds(timeValues: number[]): number[] {
  return timeValues.map(timeValue => {
    const normalizedTimeValue =
      timeValue * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE;
    return parseFloat(normalizedTimeValue.toFixed(0));
  });
}
