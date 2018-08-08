export const disarm = (p) => {
  if (p instanceof Promise) {
    return p.catch((error) => error);
  } else {
    return new Promise((resolve) => resolve(p));
  }
};
