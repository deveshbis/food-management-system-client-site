import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Roots = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;