import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([]);
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const markTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <Header
        title="Todo List"
        onAdd={() => setShowForm(!showForm)}
        showForm={showForm}
      />
      {showForm && <AddTodo onAdd={addTodo} />}
      {todos.length > 0 ? (
        <TodoList todos={todos} deleteTodo={deleteTodo} onToggle={markTodo} />
      ) : (
        <p
          style={{
            fontSize: '2.5rem',
            color: 'rebeccapurple',
            display: 'grid',
            placeContent: 'center',
            fontStyle: 'italic',
          }}
        >
          You dont have tasks to do
        </p>
      )}
    </div>
  );
}

export default App;
