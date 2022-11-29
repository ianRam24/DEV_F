const Button = ({ color, text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
