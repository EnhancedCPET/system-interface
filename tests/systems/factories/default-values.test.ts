import {
  createDefaultDemographics,
  createDefaultTimeSeries,
} from '../../../src/systems/factories/default-values';

const DEFAULT_DEMOGRAPHICS = {
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

const DEFAULT_TIMESERIES = {
  t: [],
  power: [],
  vo2: [],
  vco2: [],
  ve: [],
  hr: [],
};

describe('default value factory', () => {
  it('returns the correct default demographic values', () => {
    expect(createDefaultDemographics()).toEqual(DEFAULT_DEMOGRAPHICS);
  });

  it('returns the correct default timeseries values', () => {
    expect(createDefaultTimeSeries()).toEqual(DEFAULT_TIMESERIES);
  });
});
