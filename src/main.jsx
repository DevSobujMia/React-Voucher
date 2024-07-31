import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/pages/Home.jsx';
import Projects from './components/Projects.jsx';
import Tractor from './components/Tractor/Tractor.jsx';
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "tractor",
        element: <Tractor />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
