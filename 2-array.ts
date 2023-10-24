/**
 * ? Array Type
 *
 * * NOTE:
 * * Can be declared by adding brackets[] to type names.
 */

//* Example
const cars: string[] = ['Hyundai', 'Honda', 'BMW'];
const luckyNumbers: number[] = [1, 2, 3];
const answers: boolean[] = [true, false];

function printCarModels(models: number[]): number {
  models.forEach((model) => {
    console.log(model);
  });

  let upcomingModel = models[0] + 1;

  return upcomingModel;
}

let upcomingModel = printCarModels([2023, 2022, 2021]);

console.log('The upcoming model is ' + upcomingModel);
