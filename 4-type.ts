/**
 * ? Type Aliases
 *
 * * NOTES:
 * * Aliases are names given to common types.
 * * Used for resuing common types
 */

//* Primitive type alias
type ModelNumber = number;

function printCarModel(model: ModelNumber) {
  console.log(model);
}

printCarModel(2009);

//* Union type alias
type Model = number | string;

//* Object type alias
type Car = {
  model: number;
  make: string;
  sedan: boolean;
};

function printCarDetails(myCar: Car) {
  console.log(`My car is ${myCar.make}`);
  console.log(`My car was launched in ${myCar.model}`);

  if (myCar.sedan) {
    console.log('My car is sedan');
  } else {
    console.log('My car is not sedan');
  }
}

printCarDetails({ model: 2009, make: 'Honda', sedan: false });
