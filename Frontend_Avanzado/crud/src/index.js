"use strict";

const { v4: uuidv4 } = require("uuid");

const d = document;

// capturando los nodos de html con javascript
const app = d.querySelector(".app");

const input_todo = d.getElementById("input-todo");
const btn_add = d.getElementById("btn-add");
const content_w = d.getElementById("content-wrapper");

const btn_background = d.querySelector(".btn-background");

// url base para consumir api
const url = "http://localhost:3000/data";

// background con localStorage
if (localStorage.getItem("bg-color")) {
  app.classList.add("bg-secondary");
}

btn_background.addEventListener("click", () => {
  if (!localStorage.getItem("bg-color")) {
    localStorage.setItem("bg-color", "bg-secondary");
    app.classList.add("bg-secondary");
  } else {
    localStorage.removeItem("bg-color");
    app.classList.remove("bg-secondary");
  }
});

// funcion para limpiar el input de texto
const cleanInput = () => {
  input_todo.value = "";
  return null;
};

// funcion que imprime elementos li y button en el dom
const printTask = (task, id) => {
  let li = d.createElement("li");
  let p = d.createElement("p");
  let taskText = d.createTextNode(task);
  let div = d.createElement("div");

  const btn_1 = d.createElement("button");
  const btn_2 = d.createElement("button");
  let btn1Text = d.createTextNode("Editar");
  let btn2Text = d.createTextNode("Eliminar");

  btn_1.classList.add("btn-edit");
  btn_2.classList.add("btn-delete");

  btn_1.addEventListener("click", () => {
    putData(id, input_todo.value);
  });

  btn_2.addEventListener("click", () => {
    deleteData(id);
  });

  p.appendChild(taskText);
  btn_1.appendChild(btn1Text);
  btn_2.appendChild(btn2Text);

  div.append(btn_1, btn_2);

  li.append(p, div);

  content_w.appendChild(li);

  return {
    id,
    task,
  };
};

// funcion que obtiene datos de la api
const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach((element) => {
      printTask(element.task, element.id);
    });
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// funcion que envia datos a la api
const postData = async (task) => {
  if (input_todo.value != "") {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: uuidv4(),
          task: task,
        }),
      });
      const data = await response.json();
      console.log(data);
      cleanInput();
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};

// funcion que edita datos de la api
const putData = async (id, task) => {
  if (input_todo.value !== "") {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: task,
        }),
      });

      const data = await response.json();
      console.log(data);
      cleanInput();
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};

// funcion que elimina datos a la api
const deleteData = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// cargo los datos, al momento de cargar el documento
d.addEventListener("DOMContentLoaded", getData);

// logica del boton de añadir una tarea
btn_add.addEventListener("click", () => {
  return postData(input_todo.value);
});
