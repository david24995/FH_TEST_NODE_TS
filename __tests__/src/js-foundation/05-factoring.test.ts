import { buildMakePerson } from '../../../src/js-foundation/05-factoring';

describe('js-foundation/05-factoring.ts', () => {
  const getUUID = () => '123';
  const getAge = () => 35;

  it('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ getAge, getUUID });

    expect(typeof makePerson).toBe('function');
  });

  it('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ getAge, getUUID });
    const johnDoe = makePerson({ name: 'John Doe', birthday: '1995-09-24' });

    expect(johnDoe).toEqual({
      id: '123',
      name: 'John Doe',
      birthday: '1995-09-24',
      age: 35,
    });
  });
});
