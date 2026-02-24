import './navbarCont.css';
import { useState } from 'react';
import { Icons } from 'fara-comp-react';
import { Link, useNavigate } from 'react-router-dom';

const NavbarCont = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleClick = (path) => {
        navigate(`/${path}`);
        setOpen(false);
    };

    return (
        <div className="navbarCont">

            <Link to={'/'} className='navbarContLogo'>
                <img src="/logo.png" width='50px' alt="logo" />
                <h1>Fly<span>Post</span></h1>
            </Link>

            <section className={`navbarContSect ${open ? 'navbarContSectOpen' : 'navbarContSectClosed'}`}>

                <ul>
                    <li onClick={()=> handleClick('features')}>Features</li>
                    <li onClick={()=> handleClick('templates')}>Form Templates</li>
                    <li onClick={()=> handleClick('pricing')}>Pricing</li>
                    <li onClick={()=> handleClick('blog')}>Blog</li>
                    <li onClick={()=> handleClick('documentation')}>Documentation</li>
                </ul>

                <button className='btn btn6' onClick={()=> handleClick('user/login')}>Sign up / Login</button>
            </section>

            <Icons type='menu' color='#ffff' onClick={() => setOpen(!open)} />
        </div>
    );
};

export default NavbarCont;