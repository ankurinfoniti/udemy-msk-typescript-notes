/**
 * ? The "Function" type
 * * NOTES:
 * * The global type is denoted by Function in JavaScript
 * * It describes properties like bind, call, apply and other methods.
 */

function printCarDetail(callback: Function) {
  callback(2009, 'BMW');
}

printCarDetail((model: number, make: string) => {
  console.log('Car model is ' + model);
  console.log('Car company is ' + make);
});
