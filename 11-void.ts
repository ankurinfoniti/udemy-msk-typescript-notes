/**
 * ? Special Type | "void"
 *
 * * NOTES:
 * * In JavaScript, a function that doesn't return any value will implicitly return the value undefined
 * * "void" and "undefined" are not the same thing in TypeScript
 */

//* void type
function printCarNameV1(): void {
  console.log('BMW');
}

let result = function printCarNameV1() {
  console.log('BMW');
};
