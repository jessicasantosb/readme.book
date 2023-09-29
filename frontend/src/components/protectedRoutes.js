import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import Profile from "../routes/profile";

function ProtectedRoutes() {
  const cookies = new Cookies();
  const location = useLocation();

  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }, [cookies, location]);
  
  return <Profile />;
}

export default ProtectedRoutes;