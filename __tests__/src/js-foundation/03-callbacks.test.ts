import { getUserById } from '../../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks.ts', () => {
  it('getUserById should return an Error if user does not exist', () => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
    });
  });

  it('getUserById should return John Doe with id 1', (done) => {
    const id = 1;

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ id, name: 'John Doe' });

      done();
    });
  });
});
