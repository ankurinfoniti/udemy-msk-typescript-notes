/**
 * ? Type Assertion (The "as" keyword)
 */

const myCanvas = document.getElementById('my-canvas') as HTMLCanvasElement;

/**
 * ? Non-null Assertion Operator (Postfix !)
 *
 * * NOTES:
 * * When you access null types, TS complains in strict mode.
 * * To prevent it you can use ! operator.
 */

function printCarDetails(model: number | null) {
  //! Error when we compile with strict flag - Object is possibly 'null'.
  console.log(`My car is ${model.toString()}`);

  //* OK
  console.log(`My car is ${model!.toString()}`);
}

/**
 * ? Impossible coercions
 *
 * * NOTES:
 * * TypeScript only allows type assertions which convert to a more specific or less specific version of a type.
 * * This rule prevents “impossible” coercions.
 */

//! Error - Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
const car1 = 'Ford' as number;

//* Possible Fixes
const car2 = 'Ford' as any as number;
const car3 = 'Ford' as unknown as number;
