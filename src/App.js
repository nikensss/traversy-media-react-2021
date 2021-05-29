import { useEffect, useState } from 'react';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:6060/tasks');
    return await response.json();
  };

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:6060/tasks/${id}`);
    return await response.json();
  };

  const fetchAndSetTasks = () => fetchTasks().then(setTasks);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const addTask = async (task) => {
    await fetch(`http://localhost:6060/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
    fetchAndSetTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:6060/tasks/${id}`, { method: 'DELETE' });
    fetchAndSetTasks();
  };

  const toggleReminder = async (id) => {
    const taskToUpdate = await fetchTask(id);
    const update = { ...taskToUpdate, reminder: !taskToUpdate.reminder };

    await fetch(`http://localhost:6060/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    });
    fetchAndSetTasks();
  };

  return (
    <div className='container'>
      <Header
        showAddTask={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show!'
      )}
    </div>
  );
};

export default App;
