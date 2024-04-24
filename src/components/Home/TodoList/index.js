import React, { useContext, useState } from "react";
import styles from "./TodoList.module.css"; // This is assuming you have CSS Modules set up
import { HomeContext } from "../../../screens/Home";

const TodoList = () => {
  const { tasks, handleDelete, handleStatus } = useContext(HomeContext);
  const [filter, setFilter] = useState('total');


  const filterTask = (tasks, handleDelete, handleStatus) => {
    
  if(filter ==='total') {
  return tasks.map((task) => (
    <tr key={task.id}>
      <td>{task.title}</td>
      <td>{task.hours}</td>
      <td style={{ color: task.status === 'Unfinished' ? 'red' : 'green' }}>{task.status}</td>
      <td>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </td>
      <td>
        <button onClick={() => handleStatus(task.id)}>{task.status === 'Unfinished' ? 'Done' : 'Undo'}</button>
      </td>
    </tr>
  ));
}
if (filter==="finished") { 
  const array = tasks.filter((task) => task.status== 'Finished')
  return array.map((task) => ( 
    <tr key={task.id}>
      <td>{task.title}</td>
      <td>{task.hours}</td>
      <td style={{ color: task.status === 'Unfinished' ? 'red' : 'green' }}>{task.status}</td>
      <td>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </td>
      <td>
        <button onClick={() => handleStatus(task.id)}>{task.status === 'Unfinished' ? 'Done' : 'Undo'}</button>
      </td>
    </tr>
  ));
} 
if (filter==="unfinished") {
  const array = tasks.filter((task) => task.status== 'Unfinished')
  return array.map((task) => ( 
    <tr key={task.id}>
      <td>{task.title}</td>
      <td>{task.hours}</td>
      <td style={{ color: task.status === 'Unfinished' ? 'red' : 'green' }}>{task.status}</td>
      <td>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </td>
      <td>
        <button onClick={() =>handleStatus(task.id)}>{task.status === 'Unfinished' ? 'Done' : 'Undo'}</button>
      </td>
    </tr>
  ));
  
}
};


return (
  <div>
    <h2 className={styles.h2}>Todo List</h2>

    <div className={styles.filterButtons}>
      <button className={filter==='total'?styles.color:null} onClick={() => setFilter('total')}>Total</button>
      <button className={filter==='finished'?styles.color:null} onClick={() => setFilter('finished')}>Finished</button>
      <button className={filter==='unfinished'?styles.color:null} onClick={() => setFilter('unfinished')}>Unfinished</button>
    </div> 

    <table className={styles.todoTable}>
      <thead>
        <tr>
          <th>Task Title</th>
          <th>Time Required (in Hrs)</th>
          <th>Status</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        {filterTask(tasks,handleDelete,handleStatus)}
      </tbody>
    </table>
  </div>
);
};

export default TodoList;
