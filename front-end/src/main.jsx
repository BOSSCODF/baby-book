import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import Dashboard from './components/Dashboard'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Book from "./components/Book.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/> ,
  },
  {
    path: "/books",
    element:<Book/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
