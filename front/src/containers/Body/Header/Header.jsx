import './header.css';

const Header = () => {

    return (
        <div className="header">
            <h2 className='headerH2'>Simple contact forms for your website</h2>
            <p className='headerH4'>Integrate your forms with your email using our API, without a backend or complications.<br/> It's simple and free.</p>
            <button className='headerBtn'>Create your Form</button>
            <p className='headerP'>Check your email and let's get started</p>
        </div>
    );
};

export default Header;