import React from "react";
import {useNavigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

function ProtectedRoutes() {

  const cookies = new Cookies();
  const Navigate = useNavigate();
  const location = useLocation()
  const token = cookies.get("token");

  return (
    token ? <Outlet />
    : <Navigate to='/login' state={{from: location}} replace></Navigate>
  );
}

export default ProtectedRoutes