import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home'
import Register from './routes/register';
import Login from './routes/login';
import Profile from './routes/profile';
import ErrorPage from './routes/errorPage';
import Books from './routes/books'
import FormSuccess from './routes/formSuccess';
import FavoritesContext  from './components/contexts/favoritesContext';
import {AuthProvider} from './components/contexts/authProvider';
import RequireAuth from './components/requireAuth';
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <ErrorPage />, children: [
      // public routes
      {
        path: "/", element: <Home />,
      },
      {
        path: "/register", element: <Register />,
      },
       {
        path: "/login", element: <Login />,
      },
      {
        path: "/books", element: <Books />,
      },
      {
        path: "/success", element: <FormSuccess />,
      },
      // private route
      {
        path: "/profile", element: <RequireAuth><Profile /></RequireAuth>,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AnimatePresence mode='wait' initial={false}>
        <FavoritesContext>
          <RouterProvider router={router} />
        </FavoritesContext>
      </AnimatePresence>
    </AuthProvider>
  </React.StrictMode>
);