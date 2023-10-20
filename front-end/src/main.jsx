import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import Dashboard from './components/Dashboard'
import Documentries from './components/Documentries'
import ShortFilm from "./components/ShortFilm";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Book from "./components/Book.jsx";
import ResearchPaper from "./components/ResearchPaper";
import Library from "./components/Library";
import Settings from './components/Settings'
import Upload from "./components/Upload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/> ,
  },
  {
    path: "/books",
    element:<Book/>,
  },
  {
    path: "/documentaries",
    element:<Documentries/>,
  },
  {
    path: "/shortfilm",
    element:<ShortFilm/>,
  },
  {
    path: "/researchpaper",
    element:<ResearchPaper/>,
  },
  {
    path: "/library",
    element:<Library/>,
  },
  {
    path: "/settings",
    element:<Settings/>,
  },
  {
    path: "/uploadebook",
    element:<Upload/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
