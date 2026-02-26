import './body.css';
import Header from './Header/Header.jsx';
import Features from './Features/Features.jsx';
import Technology from './Technology/Technology.jsx';
import StepsStart from './StepsStart/StepsStart.jsx';
import PreForms from './PreForms/PreForms.jsx';

const Body = () => {

    return (
        <div className="body">
            <Header />
            <Features />
            <Technology />
            <StepsStart />
            <PreForms />
        </div>
    );
};

export default Body;