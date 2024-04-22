import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/Home";


import "./App.css";
import Header from "./components/common/Header";
import InfoDisplay from "./screens/InfoDisplay";
import Input from "./screens/InputButton";
import ToDoList from "./screens/TodoList";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeScreen />,
//   }
// ]);

function App() {
  return (
    <>
      <Header / >
      <InfoDisplay/>
      <Input/>
      <ToDoList/>
    </>
  );
}

export default App;
