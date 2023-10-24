/**
 * ? Union Types
 *
 * * NOTES:
 * * A union type is a type formed from two or more other types, representing values that may be
 * * any one of those types. We refer to each of these types as union's members.
 *
 * * Use the pipe | operator to combine types.
 */

function printCarModel(model: number | string) {
  console.log(`My car model is ${model}`);
}

printCarModel(2009);

printCarModel('2009');

/**
 * ? Working example with Union Types
 *
 * * Make sure both the members support a certain operation when you use them.
 */

//* Example 1
function printCarModelV2(model: string | number) {
  //! Error - property 'toUpperCase' does not exists on type 'string | number'
  //console.log(`My car model is ${model.toUpperCase()}`);

  //* Fix - We should narrow the Union with code
  if (typeof model === 'string') {
    console.log(`My car model is ${model.toUpperCase()}`);
  } else {
    console.log(`My next car model is ${++model}`);
  }
}

printCarModel(2009);

printCarModel('2009');

//* Example 2
function sliceTheInput(x: string[] | string) {
  //* No error because both string and array has slice method
  return x.slice(0, 3);
}

console.log(sliceTheInput('My name is ankur mishra'));
console.log(sliceTheInput(['Ankur', 'Anshu', 'Amar']));
