import {React, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

function ProtectedRoutes() {
  const cookies = new Cookies();
  const Navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = cookies.get("token");
    token ? (
      <Navigate to="/profile" state={{ from: location }} replace/>
    ) : (
      <Navigate to="/login" state={{ from: location }} replace/>
    );
  }, [])
  
  return 
}

export default ProtectedRoutes;
