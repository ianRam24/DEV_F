const Button = ({ color, text, onAdd }) => {
  return (
    <button onClick={onAdd} className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
