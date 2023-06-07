import { Outlet } from "react-router-dom";
import Navbr from "../../../pages/Navebr/Navbr";
import Footer from "../../../pages/Footer/Footer";


const Main = () => {
    return (
        < >
           <Navbr />
            <div className="min-h-[80vh]">
            <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;