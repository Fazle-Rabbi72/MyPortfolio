import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter , RouterProvider} from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

import App from "./App";
import Skills from "./Pages/Skills/Skills";
import Services from "./Pages/Services/Services";
import ProjectDetails from "./Pages/Projects/ProjectDetails";
import Project from "./Pages/Projects/Project";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/projects",
        element:<Project/>
      },
      {
        path: "/skills",
        element:<Skills/>
      },
      {
        path: "/services",
        element:<Services/>
      },
      {
        path: "/projects/:id",
        element:<ProjectDetails/>
      }
    ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);