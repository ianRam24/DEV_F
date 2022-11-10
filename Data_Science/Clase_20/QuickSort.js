// Izq ,Pibote,Der
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let index = 1; index < array.length; index++) {
    if (arr[index] < pivot) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};
let array = [1, 3, 2, 5, 6, 4, 8, 7, 9, 10];
console.log(quickSort(array));
