/**
 * ? Interfaces vs Type aliases | "Renaming primitives"
 *
 * * NOTES:
 * * Type aliases can be used to rename primitives but Interfaces can't
 */

type StringPrimivies = string;
type NumberPrimitives = number;

/**
 * ? Interfaces vs Type aliases | "Field addition"
 *
 * * NOTES:
 * * New field can be added to the interface.
 * * A type cannot be changed after creation
 */

type BikeType = {
  make: string;
};

// ! This is an error
/* type BikeType = {
  model: string;
}; */

interface BikeInterface {
  make: string;
}

interface BikeInterface {
  model: number;
}

function printBikeDetail(myBike: BikeInterface) {
  console.log(`My bike is ${myBike.make}`);
  console.log(`My bike model is ${myBike.model}`);
}

printBikeDetail({ make: 'Honda', model: 2009 });

/**
 * ? Interfaces vs Type aliases | "Extensibility"
 *
 * * NOTES:
 * * You can extend an interface but you cannot extend a type.
 * * Instead you can use intersections to achieve the same.
 */

interface CarInterface {
  make: string;
  model: number;
}

interface MustangInterface extends CarInterface {
  drift: boolean;
}

const myCar1: MustangInterface = {
  make: 'Ford',
  model: 2009,
  drift: true,
};

//* Type alisas

type CarType = {
  make: string;
  model: number;
};

type MustangType = CarType & {
  drift: boolean;
};

const myCar2: MustangType = {
  make: 'Ford',
  model: 2009,
  drift: false,
};
