# promise-disarm :bomb:

[![Greenkeeper badge](https://badges.greenkeeper.io/vspedr/promise-disarm.svg)](https://greenkeeper.io/)

Utilities for making promises return errors instead of throwing them... and just like disarming actual bombs THIS IS POTENTIALLY UNSAFE, BE WARNED. Make sure you actually handle the errors somehow.

If the provided promise does not reject, it will just resolve as usual.
If anything other than a promise is provided, it will return a promise that resolve to whatever was provided.

### Usage example

```js
import { disarm } from 'promise-disarm';

// ...
const promise = new Promise(_, reject) => reject(new Error())
const result = disarm(promise).then(result => {
  // a "cold" error, not thrown. Make sure you handle it.
  console.log(result instanceof Error); // true
});

```

### Development scripts
- `build`: transpiles and minifies all code in `./src` into `./lib` using babel;
- `lint`: lints code in `./src` using `eslint`;
- `precommit`: (automatic) runs linter before every commit;
- `prepublish`: (automatic) runs tests before attempting to publish the package;
- `test`: runs tests in `__tests__` using `jest`.

**Note**: scripts assume you use `yarn`, because you should ;)


Forked from [vspedr/jables](https://github.com/vspedr/jables)

> Prueba de bomba, prueba de bala - Kontrust
