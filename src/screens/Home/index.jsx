import { createContext, useEffect, useState } from "react";
import InfoDisplay from "../../components/Home/InfoDisplay";
import Input from "../../components/Home/InputButton";
import TodoList from "../../components/Home/TodoList";



const initialTasks = [
  { id: 1, title: "Task-1", hours: 8 },
  { id: 2, title: "Task-2", hours: 24 },
  { id: 3, title: "Task-3", hours: 16 },
  { id: 4, title: "Task-4", hours: 8 },
  { id: 5, title: "Task-5", hours: 16 },
];


const saveLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const HomeContext = createContext({});





const getFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : initialTasks;
 
};



const HomeScreen = () => {
  const [tasks, setTasks] = useState(getFromLocalStorage);

  const handleDelete = (taskId) => {
    const deleteItem = [...tasks].filter((task) => task.id !== taskId);
    setTasks(deleteItem);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  useEffect(() => {
    saveLocalStorage(tasks);
  }, [tasks]);

  
  //handle Display
  const totalTask = tasks.length

  const totalHours = tasks.reduce((total,task) => total + parseInt(task.hours), 0)

  const totalDays =  Math.floor( tasks.reduce((total,task) => total + parseFloat(task.hours), 0) / 24)
 

console.log(totalDays)
  const data = {
    tasks,
    totalTask,
    totalHours,
    totalDays,
    handleDelete,
    handleAddTask,
  };

  return (
    <HomeContext.Provider value={data}>
      <InfoDisplay />
      <Input />
      <TodoList />
    </HomeContext.Provider>
  );
};

export default HomeScreen;
