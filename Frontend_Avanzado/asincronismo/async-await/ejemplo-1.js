// Las funciones async, son funciones preparadas
// para recibir respuestas de promesas y retornar una promesa
const url_base = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const showData = async () => {
  const finalData = await getData(url_base);
  console.log(finalData);
  return finalData;
};

showData();

// const getData = (url) => {
//   return fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => {
//       throw new Error(err);
//     });
// };

// const showData = async (url) => {
//   const finalData = getData(url);
//   return finalData;
// };

// console.log(showData(url_base));
