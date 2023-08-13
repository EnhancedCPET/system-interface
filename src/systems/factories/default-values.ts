import { Demographics, TimeSeries } from '../../types';

export function createDefaultDemographics(): Demographics {
  return {
    id: 'N/A',
    fname: 'N/A',
    lname: 'N/A',
    age: 0,
    dob: '',
    height: 0,
    weight: 0,
    gender: '',
    race: 'default',
  };
}

export function createDefaultTimeSeries(): TimeSeries {
  return {
    t: [],
    power: [],
    vo2: [],
    vco2: [],
    ve: [],
    hr: [],
  };
}
