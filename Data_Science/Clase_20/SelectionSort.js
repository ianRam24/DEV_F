const selectionSort = (array) => {
  for (let index = 0; index < array.length; index++) {
    let min = index;
    for (let index2 = index + 1; index2 < array.length; index2++) {
      if (array[index2] < array[min]) {
        min = index2;
      }
      if (min !== index) {
        [array[index], array[min]] = [array[min], array[index]];
      }
    }
  }
  return array;
};
const array = [3, 5, 8, 9, 7, 10, 1, 4, 2, 6];
console.log(selectionSort(array))
