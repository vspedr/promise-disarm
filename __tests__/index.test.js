import {disarm, disarmAll} from '../src/index';

// test helpers
const error = new Error();
const resolvingPromise = new Promise((resolve) => resolve(null));
const rejectingPromise = new Promise((_, reject) => reject(error));
const notAPromise = 'NOT A PROMISE';

describe('disarm()', () => {
  it('should always return a promise', () => {
    expect(disarm()).toBeInstanceOf(Promise);
    expect(disarm(5)).toBeInstanceOf(Promise);
    expect(disarm('foo')).toBeInstanceOf(Promise);
    expect(disarm(new Promise((resolve) => resolve(null))))
      .toBeInstanceOf(Promise);
  });

  it('returned promises should always resolve', () => {
    expect(disarm(resolvingPromise)).resolves.toBeNull();
    expect(disarm(rejectingPromise)).resolves.toBeInstanceOf(Error);
    expect(disarm(notAPromise)).resolves.toBe(notAPromise);
  });
});

describe('disarmAll()', () => {
  it('should always return a promise', () => {
    expect(disarmAll([])).toBeInstanceOf(Promise);
    expect(disarmAll([5, 'foo', resolvingPromise])).toBeInstanceOf(Promise);
  });

  it('returned promise should resolve to an array', () => {
    expect(disarmAll([])).resolves.toEqual([]);
    expect(disarmAll([resolvingPromise, rejectingPromise]))
    .resolves.toEqual([null, error]);
  });

  it('should throw error if argument is not an array', () => {
    expect(() => disarmAll('NOT AN ARRAY')).toThrow();
  });
});
