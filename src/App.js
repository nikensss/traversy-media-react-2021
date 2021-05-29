import { useState } from 'react';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Tomorrow',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Tomorrow',
      reminder: true
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Tomorrow',
      reminder: false
    }
  ]);

  const addTask = (task) => {
    const id = tasks[tasks.length - 1].id + 1;
    setTasks([...tasks, { id, ...task }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((t) => {
        if (t.id !== id) return t;

        return {
          ...t,
          reminder: !t.reminder
        };
      })
    );
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
