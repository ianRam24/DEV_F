function search(array, founded) {
  for (let index = 0; index < array.length; index++) {
    if (index === founded) {
      console.log(founded);
    }
    console.log(index);
  }
}
search(
  [
    1, 2, 2, 3, 5, 6, 7, 9, 12, 12, 13, 14, 16, 30, 33, 35, 40, 42, 65, 66, 66,
    88, 89,
  ],
  8
);

