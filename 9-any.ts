/**
 * ? Special Type | "any"
 *
 * * NOTES:
 * * TypeScript also has a special type, any, that you can use whenever you don't want a
 * * particular value to cause typechecking errors.
 * * "any" is bit unsafe to use.
 */

let car: any = {
  make: 'Honda',
  model: 2009,
};

car.sedan = true;

car = 'BMW';

//! This is valid because we take any as type
const myCar: number = car;
