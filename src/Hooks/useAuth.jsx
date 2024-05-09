import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";


const useAuth = () => {
    const allAuth = useContext(AuthContext);
    return allAuth;
};

export default useAuth;