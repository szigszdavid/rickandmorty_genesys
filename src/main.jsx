import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomePage from './pages/home/HomePage.jsx';
import ProfilePage, { loader as profileLoader } from './pages/profile/ProfilePage';
import ErrorPage from './pages/error/ErrorPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/profile/:profileId",
            element: <ProfilePage />,
            loader: profileLoader,
            errorElement: <ErrorPage />
          },
        ]
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
