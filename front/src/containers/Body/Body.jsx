import './body.css';
import Header from './Header/Header.jsx';
import Features from './Features/Features.jsx';
import Technology from './Technology/Technology.jsx';

const Body = () => {

    return (
        <div className="body">
            <Header />
            <Features />
            <Technology />
        </div>
    );
};

export default Body;