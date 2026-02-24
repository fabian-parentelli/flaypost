import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/utils/ScrollToTop.jsx";
import Navbar from "../containers/layout/Navbar/Navbar.jsx";
import Body from "../containers/Body/Body.jsx";
import Features from "../containers/pages/Features/Features.jsx";

const WrapRoutes = () => {

    return (
        <BrowserRouter>
            <ScrollToTop>

                <Navbar />

                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/features" element={<Features />} />
                </Routes>

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default WrapRoutes;