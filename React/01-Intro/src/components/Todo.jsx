import { FaTimes } from 'react-icons/fa';
export default function Todo({ todo, deleteTodo, markTodo }) {
  return (
    <div
      className={`tarea ${todo.done ? 'terminada' : ''}`}
      onDoubleClick={() => markTodo(todo.id)}
    >
      <h3>
        {todo.text}
        <FaTimes
          onClick={() => deleteTodo(todo.id)}
          style={{ cursor: 'pointer', color: 'red' }}
        />
      </h3>
      <p>{todo.date}</p>
    </div>
  );
}
