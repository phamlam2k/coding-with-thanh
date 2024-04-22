import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/Home";

import "./App.css";
import Header from "./components/common/Header";
import AboutUs from "./screens/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
