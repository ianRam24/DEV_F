import { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [done, setDone] = useState(false);

  const hamdleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('You must write something to add the todo');
      return;
    }

    if (!date) {
      alert('You must write something to add the todo');
      return;
    }
    onAdd({ text, date, done });
    setText('');
    setDate('');
    setDone(false);
  };
  return (
    <form className="add-form" onSubmit={hamdleSubmit}>
      <div className="form-control">
        <label>Tarea</label>
        <input
          type="text"
          placeholder="Grab Lunch"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date:</label>
        <input
          type="text"
          placeholder="20-08-21"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Done:</label>
        <input
          type="checkbox"
          checked={done}
          value={done}
          onChange={(e) => setDone(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Guardar" />
    </form>
  );
};

export default AddTodo;
