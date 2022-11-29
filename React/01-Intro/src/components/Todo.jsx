export default function Todo({ todo }) {
  return (
    <div className="tarea">
      <h3>{todo.text}</h3>
      <p>{todo.date}</p>
    </div>
  );
}
