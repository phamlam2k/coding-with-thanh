import React, { useEffect, useState } from 'react';
import styles from './Input.module.css';


const Input = ({onAddTask}) => {
    const [title, setTitle]= useState('')
    const [hours, setHours] = useState('')


    const AddTask = () => {
     
    }
    return (
        <>
            <div className={styles.main}>
                <div className={styles.main1} >
                    <p className={styles.p}> Task Title</p>
                    <input
                        className={styles.input}
                        placeholder="Task title"
                        onChange={(e) =>setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.main1} >
                    <p className={styles.p}> Time Required(In Hrs)</p>
                    <input
                        className={styles.input}
                        placeholder="Time Required"
                        onChange={(e) =>setHours(e.target.value)}
                    />
                </div>
                <div className={styles.main1} >
                    <button 
                    className={styles.button}
                   onClick={AddTask}
                    
                    
                    > Add</button>
                </div>

            </div>
        </>
    );
};

export default Input