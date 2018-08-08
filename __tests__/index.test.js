import {disarm} from '../src/index';

describe('disarm()', () => {
  it('should always return a promise', () => {
    expect(disarm()).toBeInstanceOf(Promise);
    expect(disarm(5)).toBeInstanceOf(Promise);
    expect(disarm('foo')).toBeInstanceOf(Promise);
    expect(disarm(new Promise((resolve) => resolve(null))))
      .toBeInstanceOf(Promise);
  });

  it('returned promises should always resolve', () => {
    const resolvingPromise = new Promise((resolve) => resolve(null));
    const rejectingPromise = new Promise((_, reject) => reject(new Error()));
    const notAPromise = 'NOT A PROMISE';

    expect(disarm(resolvingPromise)).resolves.toBeNull();
    expect(disarm(rejectingPromise)).resolves.toBeInstanceOf(Error);
    expect(disarm(notAPromise)).resolves.toBe(notAPromise);
  });
});
