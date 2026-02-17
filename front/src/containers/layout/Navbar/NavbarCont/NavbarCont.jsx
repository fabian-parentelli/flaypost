import './navbarCont.css';
import { Link } from 'react-router-dom';

const NavbarCont = () => {

    return (
        <div className="navbarCont">

            <Link to={'/'} className='navbarContLogo'>
                <img src="/logo.png" width='50px' alt="logo" />
                <h1>FlyPost</h1>
            </Link>

        </div>
    );
};

export default NavbarCont;