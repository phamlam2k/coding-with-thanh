import React, { useContext } from "react";
import styles from "./TodoList.module.css"; // This is assuming you have CSS Modules set up
import { HomeContext } from "../../../screens/Home";

const TodoList = () => {
  const { tasks, handleDelete } = useContext(HomeContext);

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
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.hours}</td>
              <td>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
