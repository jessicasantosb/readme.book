import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/home";
import Register from "./routes/register";
import Login from "./routes/login";
import Profile from "./routes/profile";
import ErrorPage from "./routes/errorPage";
import Catalog from "./routes/catalog";
import FormSuccess from "./routes/formSuccess";
import BooksInteraction from "./components/catalog/booksInteraction";
import FavoritesContext from "./components/contexts/favoritesContext";
import { AuthProvider } from "./components/contexts/authProvider";
import RequireAuth from "./components/protectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // public routes
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/catalog/books/:id",
        element: <BooksInteraction />,
      },
      {
        path: "/success",
        element: <FormSuccess />,
      },
      // private route
      {
        path: "/profile",
        element: (
          <RequireAuth/>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AnimatePresence mode="wait" initial={false}>
        <FavoritesContext>
          <RouterProvider router={router} />
        </FavoritesContext>
      </AnimatePresence>
    </AuthProvider>
  </React.StrictMode>
);