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

const getFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : initialTasks;
};

export const HomeContext = createContext({});

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

  const data = {
    tasks,

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
