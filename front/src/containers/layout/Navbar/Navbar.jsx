import './navbar.css';
import { useEffect, useState, useRef } from 'react';
import NavBarCont from './NavbarCont/NavbarCont.jsx';

const Navbar = () => {

    const lastScroll = useRef(0);
    const [scrollY, setScrollY] = useState(0);
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setShowNav(currentScroll < lastScroll.current);
            lastScroll.current = currentScroll;
            setScrollY(currentScroll);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        transition: '0.3s',
        top: showNav ? '0' : '-100px',
        boxShadow: showNav && scrollY > 0 ? '1px 1px 3px rgba(0,0,0,0.1)' : 'none',
        backgroundColor: scrollY > 0 ? '#13244B' : 'transparent'
    };

    return (
        <div className='navbar' style={navStyle}>
            <NavBarCont />
        </div>
    );
};

export default Navbar;