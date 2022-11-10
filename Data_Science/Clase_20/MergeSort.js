const mergeSort = (array) => {
  if (array.lenght <= 1) {
    return array;
  }
  let mid = Math.floor(array.lenght / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  function merge(left, right) {
    let result = [];
    while (left.lenght && right.lenght) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  }
};
let array = [1, 3, 2, 5, 6, 4, 8, 7, 9, 10];
console.log(quickSort(array));
