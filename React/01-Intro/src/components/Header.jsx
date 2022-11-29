import Button from './Button';

const Header = ({ tareas }) => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <header className="header">
      <h1>{tareas}</h1>
      <Button text="Agregar" color="green" handleClick={handleClick} />
      <Button text="Borrar" color="red" handleClick={handleClick} />
    </header>
  );
};

export default Header;
