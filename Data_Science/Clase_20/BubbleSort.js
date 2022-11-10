const bubbleSort = () => {
  let change = true;
  for (let index = 0; change && index < array.length - 1; index++) {
    change = false;
    for (let index2 = 0; index2 < array.length - 1; index2++) {
      if (array[index2] > array[index2 + 1]) {
        [array[index2], array[index2 + 1]] = [array[index2 + 1], array[index2]];
        change = true;
      }
    }
  }
};
