class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.rigth = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    // Creamos un nodo y lo inicializamo con el dato que recibimos
    let newNode = new Node(data);

    if (this.root === null) {
      // Si la raiz es nula entonces le agregaremos el nodo y sera la raiz
      this.root = newNode;
    } else {
      // Si no tendremos que encontrar la posicion correcta y agregar el nodo
      this.insertNode(this.root, newNode);
    }
  }

  // Metodo que inserta un nodo en el arbol, se mueve recursivamente sobre el arbol para buscar la ubicación correcta para meter el nodo
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      // Si la informacion que pasamos es menor que la que esta en el nodo, entonces nos movemos a la izquierda
      if (node.left === null) {
        // Si el lado izquierdo es nulo, insertamos ahi el nodo
        node.left = newNode;
      } else {
        // Si no es nulo llamamos recursicamente hasta que encuentre el espacio nulo, pero cambiamos el nodo sobre el que buscamos
        this.insertNode(node.left, newNode);
      }
    } else {
      // Si la información que pasamos es mayor a la que esta en el nodo, entonces nos movemos a la derecha
      if (node.rigth === null) {
        // Si el lado derecho es nulo, insertamos ahi el nodo
        node.rigth = newNode;
      } else {
        // Si no es nulo llamamos recursicamente hasta que encuentre el espacio nulo, pero cambiamos el nodo sobre el que buscamos
        this.insertNode(node.rigth, newNode);
      }
    }
  }

  // Metodo que nos va a permitir eliminar un nodo con una información dada
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // Metodo que remueve un nodo con la información dada y lo llama recursicamente hasta que encuentra el dato y lo remueve
  removeNode(node, data) {
    // Si la raiz es nula, entonces el arbol esta vacio
    if (node === null) {
      return null;
    } else if (data < node.data) {
      // Si el dato a borrar es menor al dato en el nodo, se mueve al subarbol de la izquierda
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      // Si el dato a borrar es mayor al dato en el nodo, se mueve al subarbol de la derecha
      node.rigth = this.removeNode(node.rigth, data);
      return node;
    } else {
      // Primer escenario: Eliminar un nodo sin hijos
      if (node.left === null && node.rigth === null) {
        node = null;
        return node;
      }

      // Borrar un nodo con un hijo
      if (node.left === null) {
        node = node.rigth;
        return node;
      } else if (node.rigth === null) {
        node = node.left;
        return node;
      }

      // Borrar un nodo con 2 hijos
      // Busqueda del nodo minimo del subarbol de la derecha
      let aux = this.findMinNode(node.rigth);
      node.data = aux.data;

      // Con esto comenzaremos la eliminación en el subarbol derecho
      node.rigth = this.removeNode(node.rigth, aux.data);
      return node;
    }
  }

  // Buscar el nodo minimo de un arbol dado un nodo de inicio
  findMinNode(node) {
    // Si el apuntador del lado izquiero es nulo, ese debe ser el nodo minimo
    if (node.left === null) {
      return node;
    } else {
      this.findMinNode(node.left);
    }
  }

  // Funcion que devuelve el nodo raiz
  getRootNode() {
    return this.root;
  }

  // Buscar un nodo con un valor dado
  search(node, data) {
    if (node === null) {
      // Si el arbol esta vacio entonces devolvemos nulo
      return null;
    } else if (data < node.data) {
      // Si el dato es menor al del nodo nos movemos a la izquierda
      return this.search(node.left, data);
    } else if (data > node.data) {
      // Si el dato es mayor al del nodo nos movemos a la derecha
      return this.search(node.rigth, data);
    } else {
      // Si el dato es igual al del nodo, devolvemos el nodo
      return node;
    }
  }

  inorder(node) {
    // En el orden inorden se recorre de la siguiente manera: subárbol izquierdo, raíz, subárbol derecho.
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.rigth);
    }
  }
}
