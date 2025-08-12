import { getAge } from '../../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {
  it('getAge() should return the age of a person', () => {
    const birthDate = '1995-09-24';
    const age = getAge(birthDate);

    expect(typeof age).toBe('number');
  });

  it('getAge() should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getUTCDate').mockReturnValue(24);

    const birthDate = '1995-08-24';
    const age = getAge(birthDate);
    expect(spy).toHaveBeenCalled();
  });
});
