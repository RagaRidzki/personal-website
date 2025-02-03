import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx"
import Certificate from "./pages/Certificate.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/project",
    element: <Project />
  },
  {
    path: "/certificate",
    element: <Certificate />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
