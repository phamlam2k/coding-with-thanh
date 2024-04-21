import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/Home";
import AboutUs from "./screens/AboutUs";

import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

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
      <Footer />
    </>
  );
}

export default App;
