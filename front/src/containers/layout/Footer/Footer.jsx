import './footer.css';
import { Link } from 'react-router-dom';
import FooterColumn from './FooterColumn/FooterColumn.jsx';
import FooterSocial from './FooterSocial/FooterSocial.jsx';

const Footer = () => {

    return (
        <div className='footer'>

            <Link to={'/'} className='footerA'>
                <img src="/logo.png" width={'30px'} alt="carrot" />
                <p>FlyPost</p>
            </Link>

            <section className='footerTop'>
                <FooterColumn data={columnA} />
                <FooterColumn data={columnB} />
                <FooterColumn data={columnC} />
                <FooterColumn data={columnD} />
            </section>

            <section className='footerBottom'>

                <div className='footerBottomL'>
                    <Link to={'/'}>
                        <img src='/logo.png' width={'50px'} alt="logo" />
                    </Link>
                    <p className='footerBottomCata'>FlyPost</p>
                    <FooterSocial />
                </div>

                <div className='footerBottomL'>
                    <p className='pcol6'>© {new Date().getFullYear()} Faraday's House</p>

                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img className='footerBottomImg' src='/fara.png' width='30px' alt="img" />
                    </a>
                    <p className='pcol6'>Todos los derechos reservados.</p>

                    <Link to={'/condition'} style={{ textDecoration: 'none' }}>
                        <p className='pcol6'>Términos y condicones</p>
                    </Link>
                    <p className='pcol6'>|</p>

                    <Link to={'/securitypolicies'} style={{ textDecoration: 'none' }}>
                        <p className='pcol6'>Política de Privacidad</p>
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default Footer;

const columnA = {
    title: 'Product',
    content: [
        { text: 'Features', link: '/features' },
        { text: 'Pricing', link: '/pricing' },
        { text: 'Blog', link: '/blog' },
        { text: 'Plataforms', link: '/plataform' },
        { text: 'Documentation', link: '/docuentation' },
    ]
};

const columnB = {
    title: 'Resources',
    content: [
        { text: 'Form to Html', link: '/forms/form-html' },
        { text: 'Form to Js', link: '/forms/form-js' },
        { text: 'Form to react', link: '/forms/form-react' },
        { text: 'Form Templates', link: '/templates' },
        { text: 'Developer tools', link: '/tools' },
    ]
};

const columnC = {
    title: 'Company',
    content: [
        { text: 'Help & Support', link: '/support' },
        { text: 'Submit Feedback', link: '/feedback' },
        { text: 'Contact us', link: '/contact' },
        { text: 'Follow us on Twitter', link: '/twitter' },
    ]
};

const columnD = {
    title: 'Legal',
    content: [
        { text: 'Terms of Service', link: '/security' },
        { text: 'Privacy Policy', link: '/privacy' },
        { text: 'Acceptable Use', link: '/acceptable' },
        { text: 'Report Abuse', link: '/report' },
        { text: 'Uptime Status', link: '/status' },
    ]
};