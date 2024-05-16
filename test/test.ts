import { merge } from '../src/merge';

const collection1 = [1, 3, 5, 7, 9];
const collection2 = [10, 8, 6, 4, 2];
const collection3 = [0, 2, 4, 6, 8];

const mergedArray = merge(collection1, collection2, collection3);

console.log('Merged Array:', mergedArray);

/*Merged Array: [
    0, 1,  2, 2, 3, 4,
    4, 5,  6, 6, 7, 8,
    8, 9, 10
  ]*/

