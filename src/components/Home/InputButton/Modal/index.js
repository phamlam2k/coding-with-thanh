import React, { Children } from 'react';
import styles from './Modal.module.css'; 

const Modal = ({isOpen , onClose , Children}) => {
    if(!isOpen) return null;

    console.log()
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
       
          <p>{Children}  <button className={styles.closeButton} onClick={onClose}>X</button></p> 
        </div>
      </div>
    );
}

export default Modal