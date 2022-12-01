import Todo from './Todo';

export default function TodoList({ todos, deleteTodo, markTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          onToggle={markTodo}
        />
      ))}
    </>
  );
}
