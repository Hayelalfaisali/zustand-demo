import React from 'react';
import useStore from './store/useStore';
import './App.css';

function App() {
  const { 
    tasks, 
    filter,
    addTask, 
    toggleTask, 
    deleteTask, 
    setFilter, 
    clearCompleted 
  } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.task.value.trim();
    if (title) {
      addTask(title);
      e.target.task.value = '';
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Task Manager with Zustand</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add a new task..."
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="filters">
        <button 
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Active
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
