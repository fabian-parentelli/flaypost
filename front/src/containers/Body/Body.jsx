import './body.css';
import Faq from './Faq/Faq.jsx';
import Header from './Header/Header.jsx';
import Features from './Features/Features.jsx';
import PreForms from './PreForms/PreForms.jsx';
import Technology from './Technology/Technology.jsx';
import StepsStart from './StepsStart/StepsStart.jsx';

const Body = () => {

    return (
        <div className="body">
            <Header />
            <Features />
            <Technology />
            <StepsStart />
            <PreForms />
            <Faq />
        </div>
    );
};

export default Body;