import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css'; // This is assuming you have CSS Modules set up



const initialTasks = [
  { id: 1, title: 'Task-1', hours: 8 },
  { id: 2, title: 'Task-2', hours: 24 },
  { id: 3, title: 'Task-3', hours: 16 },
  { id: 4, title: 'Task-4', hours: 8 },
  { id: 5, title: 'Task-5', hours: 16 },
];
// const handleAddTask = (newTask) => {
//   // You can implement additional logic here if needed
//   setTasks([...tasks, { ...newTask, id: Date.now() }]); // Append the new task with a unique id
// };

const saveLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getFromLocalStorage = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : initialTasks;
};

const TodoList = () => {
  const [tasks, setTasks] = useState(getFromLocalStorage);

  const handleDelete = (taskId) => {
    const deleteItem = [...tasks].filter(task => task.id !== taskId)
    setTasks(deleteItem);
  };

  useEffect(() => {
    saveLocalStorage(tasks);
  }, [tasks]);






  return (
    <div>
      <h2 className={styles.h2}>Todo List</h2>
      <table className={styles.todoTable}>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Time Required (in Hrs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.hours}</td>
              <td>
                <button

                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
