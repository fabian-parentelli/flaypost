import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/utils/ScrollToTop.jsx";
import Navbar from "../containers/layout/Navbar/Navbar.jsx";
import Body from "../containers/Body/Body.jsx";
import Features from "../containers/pages/Features/Features.jsx";
import Footer from "../containers/layout/Footer/Footer.jsx";
import RoutesSession from "./RoutesSession.jsx";

const WrapRoutes = () => {

    return (
        <BrowserRouter>
            <ScrollToTop>

                <Navbar />

                <Routes>
                    {RoutesSession()}

                    <Route path="/" element={<Body />} />
                    <Route path="/features" element={<Features />} />
                </Routes>

                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default WrapRoutes;