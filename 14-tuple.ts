/**
 * ? Tuple types
 *
 * * NOTES:
 * * Just like array type but,
 * * Tuples know exactly how many items it contains.
 * * Tuples know which types are at which positions
 * * Tuples don't have a representation in runtime
 */

type CarDetailsTuple = [number, string, boolean];
const myCar: CarDetailsTuple = [2021, 'BMW', true];

function printCarDetails(myCar: CarDetailsTuple) {
  let [model, make, sedan] = myCar;

  //! This is an error due to tuple
  let cost = myCar[4];
}

printCarDetails([2021, 'BMW', true]);

/**
 * ? Tuples with Interface
 *
 * * NOTES:
 * * Another way to declare a Tuple type is with interface
 */

interface CarDetailsTupleV2 {
  length: 4;

  0: number;
  1: string;
  2: boolean;
  3: 'IN' | 'USA';
}

const myCarV2: CarDetailsTupleV2 = [2021, 'BMW', true, 'IN'];

/**
 * ? Tuples with Optional properties
 *
 * * NOTES:
 * * Tuple with optional property. (only allowed at the end)
 */

type PlaneDetailsTuple = [number, string, boolean?];
const myPlane: PlaneDetailsTuple = [2009, 'Air India', true];
const myPlaneV2: PlaneDetailsTuple = [2009, 'Air India'];

/**
 * ? A Readonly Tuple
 */

type RaceCarTuple = readonly [number, string];
const raceCar: RaceCarTuple = [2023, 'BMW'];

//! This is an error because it is a read only property
raceCar[1] = 'Lambo';

/**
 * ? Array assertion inference
 */

//* Array literals with const assertions will be inferred with "readonly" tuple types.
let carDetails = [2021, 'BMW'] as const;

// To prove that carDetails is "readonly"
function printCarDetailsV3([model, make]: [number, string]) {
  console.log(model);
  console.log(make);
}

//! Error - The type 'readonly [2021, "BMW"]' is 'readonly' and cannot be assigned to the mutable type '[number, string]'
//* The function printCarDetails can't guarentee that it won't mutate the params. So TypeScript refuses to take it.
printCarDetailsV3(carDetails);

/**
 * ? Specifying rest parameter
 *
 * * NOTES:
 * * Tuple with rest parameter elements (Must be Array / Tuple)
 */

function printCarDetailsV4(myCar: [number, string, ...number[]]) {
  console.log(myCar[0]);
}

printCarDetailsV4([2021, 'BMW', 234, 235, 456]);

type;
