/**
 * ? The object type
 */

type Car = { make: string; model: number };
interface MyCar {
  make: string;
  model: number;
}

function printCarDetails(carObj: { make: string; model: number }) {
  console.log(`My car was launched in ${carObj.model}`);
  console.log(`My car manufacturer is ${carObj.make.toUpperCase()}`);
}

printCarDetails({
  make: 'Hyundai',
  model: 2009,
});
