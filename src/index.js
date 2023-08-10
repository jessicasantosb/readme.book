import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home'
import Profile from './routes/profile';
import ErrorPage from './routes/errorPage';
import Books from './routes/books'
import FormSuccess from './routes/formSuccess';
import AppContextProvider  from './components/context/appContext';
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <ErrorPage />, children: [
      {
        path: "/", element: <Home />,
      },
      {
        path: "/profile", element: <Profile />,
      },
      {
        path: "/books", element: <Books />,
      },
      {
        path: "/success", element: <FormSuccess />,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatePresence mode='wait' initial="false">
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </AnimatePresence>
  </React.StrictMode>
);