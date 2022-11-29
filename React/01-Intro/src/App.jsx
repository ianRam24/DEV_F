import { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique',
      date: '23-05-22',
      done: true,
    },
    {
      id: 2,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique',
      date: '23-07-22',
      done: false,
    },
    {
      id: 3,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique',
      date: '23-09-25',
      done: true,
    },
  ]);
  return (
    <div className="container">
      <Header title="Tareas" />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
