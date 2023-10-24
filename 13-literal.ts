/**
 * ? Literal types
 *
 * * NOTES:
 * * You can create a very specific type that can take only allowed values.
 * * You can create a mix and match of literal types and Non literal types.
 */

const bike = 'BMW';

type Bike = 'BMW' | 'Honda' | 2021 | boolean;

let bikeV1: Bike = true;

/**
 * ? Literal Interence
 *
 * * NOTES:
 * * In an object type, TS will infer a general type for its properties. Not the literal
 * * You can force this with the "as" keyword for the properties
 */

const car = {
  make: 'Honda' as 'Honda' | 'Hyundai',
  model: 2021 as 2021 | 2022 | 2023,
};

car.make = 'Hyundai';
