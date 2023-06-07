import { Outlet } from "react-router-dom";
import Navbr from "../Navebr/Navbr";


const Main = () => {
    return (
        <div className="custom-container">
           <Navbr />
            <Outlet />
            This is footer
        </div>
    );
};

export default Main;