import React, { useContext, useState } from "react";
import styles from "./Input.module.css";
import { HomeContext } from "../../../screens/Home";
import Modal from './Modal'; // Import the modal component

const Input = () => {
  const { handleAddTask } = useContext(HomeContext);
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);


  const validateInput = () => {
    if (!title || !hours) {
      setError("Task title and time required should not be empty.");
      setModalOpen(true);
      return false;
    }
    if (title.length > 128) {
      setError("Task title should not exceed 128 characters.");
      setModalOpen(true);
      return false;
    }
    if (!/^\d+$/.test(hours) || Number(hours) < 0 || Number(hours) > 24) {
      setError("Time required should be a numeric value between 0 and 24.");
      setModalOpen(true);
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateInput()) {
      handleAddTask({
        title,
        hours,
      });
      setTitle("");
      setHours("");
      setError(""); 
      setModalOpen(false); 
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

 
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} Children={error}/>
      <div className={styles.main}>
        <div className={styles.main1}>
          <p className={styles.p}>Task Title</p>
          <input
            className={styles.input}
            value={title}
            placeholder="Task title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.main1}>
          <p className={styles.p}>Time Required (In Hrs)</p>
          <input
            className={styles.input}
            value={hours}
            placeholder="Time Required"
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <div className={styles.main1}>
          <button className={styles.button} onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
