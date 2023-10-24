/**
 * ? Interface
 *
 * * NOTES:
 * * Interfaces are yet another way to name Object types
 */

interface Car {
  make: string;
  model: string | number;
  sedan: boolean;

  accelerate: () => void;
  decelerate(): void;
}

function printCarDetails(carObj: Car) {
  console.log(`My car is ${carObj.make}`);
  console.log(`My car was launched in ${carObj.model}`);
}

printCarDetails({
  make: 'Hyundai',
  model: 2009,
  sedan: false,
  accelerate: () => {
    console.log('accelerated the car');
  },
  decelerate() {
    console.log('decelerate the car');
  },
});
