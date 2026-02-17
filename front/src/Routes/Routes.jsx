import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/utils/ScrollToTop.jsx";
import Navbar from "../containers/layout/Navbar/Navbar.jsx";

const WrapRoutes = () => {

    return (
        <BrowserRouter>
            <ScrollToTop>
                
                <Navbar />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default WrapRoutes;