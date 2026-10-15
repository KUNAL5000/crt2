import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('todos')) ?? [];
    } catch {
      return [];
    }
  });
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('All');
  const [editId, setEditId] = useState(null);
  const [editTask, setEditTask] = useState('');

  // todos change hone pe save karo
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // add new task
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = task.trim();
    if (!title) return;

    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTask('');
  };

  // mark task completed / pending
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // delete task
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    if (editId === id) {
      cancelEdit();
    }
  };

  // start editing
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditTask(todo.title);
  };

  // cancel editing
  const cancelEdit = () => {
    setEditId(null);
    setEditTask('');
  };

  // save edited task
  const saveEdit = (e) => {
    e.preventDefault();

    const title = editTask.trim();
    if (!title) return;

    setTodos((prev) =>
      prev.map((todo) => (todo.id === editId ? { ...todo, title } : todo))
    );
    cancelEdit();
  };

  // filter tasks
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Pending') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  const pending = todos.filter((todo) => !todo.completed).length;
  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <main>
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      <label>
        Show{' '}
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </label>

      <p>
        {pending} pending · {completed} completed
      </p>

      {filteredTodos.length === 0 ? (
        <p>No {filter === 'All' ? '' : filter.toLowerCase() + ' '}tasks here.</p>
      ) : (
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              {editId === todo.id ? (
                <form onSubmit={saveEdit}>
                  <input
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    autoFocus
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={cancelEdit}>
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.title}</span>
                  <button type="button" onClick={() => startEdit(todo)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;