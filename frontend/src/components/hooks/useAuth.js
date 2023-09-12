import { useContext } from "react";
import AuthProvider from "../contexts/authProvider";

function useAuth() {
    return useContext(AuthProvider)
}

export default useAuth