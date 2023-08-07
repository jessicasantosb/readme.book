import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home'
import Profile from './routes/profile';
import ErrorPage from './routes/errorPage';
import AppContextProvider  from './components/context/appContext';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <ErrorPage />, children: [
      {
        path: "/", element: <Home />,
      },
      {
        path: "/profile", element: <Profile />,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);