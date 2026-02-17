import WrapRoutes from "./Routes/Routes.jsx";
import AlertProvider from "./context/AlertContext.jsx";

const App = () => {

    return (
        <>
            <AlertProvider>
                <WrapRoutes />
            </AlertProvider>
        </>
    );
};

export default App;