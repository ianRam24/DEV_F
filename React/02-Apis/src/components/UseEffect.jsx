import { useState, useEffect } from 'react';

function Docs() {
  /* reglas de los hooks */
  /*
   1. deben estar dentro del componente
   2. no deben estar dentro de un scope (condicionales, ciclos y funciones)
  */

  const [number, setNumber] = useState(1_000);
  const [isView, setIsView] = useState(false);

  /* ciclo de vida */
  /*
  
  montaje -> ejecuta jsx, luego ejecuta el cÃ³digo

  actualización -> vuelve a montar el componente

  desmontaje -> 1. desmonte , 2. ejecute un cÃ³digo
  
  */

  const sumar = () => {
    setNumber(9_000 + 1);
  };

  /* 1. esto se ejecuta en cada cambio de estado */
  /* useEffect(() => {
    sumar()
    console.log('useEffect');
  }) */

  /* 2. esto se ejecuta solo la primera vez que carga el componente */
  /* useEffect(() => {
    sumar()
    console.log('useEffect');
  }, []) */

  /* 3. cada de cambia el estado de las dependencias */
  /* useEffect(() => {
    sumar()
    console.log('useEffect');
  }, [isView]) */

  /* 4. cuando se desmonta del componente */
  /* useEffect(() => {

    return () => {
      console.log('Desmontar');
    }
  }, []) */

  return (
    <div className="app text-white">
      <h1 className="text-danger">Consumo de APIS</h1>
      <h2>{number}</h2>
      <button
        className="d-block btn btn-primary"
        onClick={() => setNumber(number + 1)}
      >
        Sumar
      </button>
      <button
        className="d-block btn btn-info"
        onClick={() => setIsView(!isView)}
      >
        Visible
      </button>
      {isView && <p>Visible</p>}
    </div>
  );
}

export default Docs;
