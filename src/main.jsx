import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Login from './Login'
import Registr from './registr'
import Passw from './passw'
import Next from './next'
import App from './App'
import About from './about/about';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/reg",
    element: <Registr />,
  },
  {
    path: "/passw",
    element: <Passw />,
  },
  {
    path: "/next",
    element: <Next />,
  },
  {
    path: "/log",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/about/:id",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
