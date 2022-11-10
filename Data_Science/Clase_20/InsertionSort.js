const insertionSort = (array) => {
  for (let index = 0; index < array.length; index++) {
    for (
      let index2 = index;
      index2 > 0 && array[index2] < array[index2 - 1];
      index2--
    ) {
      [array[index2], array[index2 - 1]] = [array[index2 - 1], array[index2]];
    }
  }
  return array;
};
let array = [1, 3, 2, 5, 6, 4, 8, 7, 9, 10];
console.log(insertionSort(array));
