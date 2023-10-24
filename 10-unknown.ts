/**
 * ? Special Type | "unknown"
 *
 * * NOTES:
 * * It is similar to "any" type
 * * It is a 'little bit' safer than "any" type
 */

let a: unknown = document.getElementById('my-element');

function getLatestCarModelV1(models: any) {
  return models[0];
}

function getLatestCarModelV2(models: unknown) {
  return models[0];
}
