import Button from './Button';

const Header = ({ title, onAdd, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showForm ? 'Hide' : 'Add'}
        color="lightseagreen"
        onAdd={onAdd}
      />
    </header>
  );
};

export default Header;
