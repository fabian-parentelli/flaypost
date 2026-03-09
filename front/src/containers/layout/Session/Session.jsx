import './session.css';
import { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

const Session = () => {

    const { pathname } = useLocation();
    const [values, setValues] = useState({ type: 'login' });

    useEffect(() => { setValues({ type: pathname.split('/')[2] }) }, [pathname]);

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(values);
    };

    return (
        <div className="session">

            <form className='sessionInputs' onSubmit={handleSubmit}>
                <Outlet context={{ values, handleChange }} />
            </form>

            <section className='sessionSect'>
                <img src="/logo.png" alt="img" />
                <h2>Fly<span>Post</span></h2>
                <p>ntegrate your forms with your email using our API, without a backend or complications. It's simple and free.</p>
            </section>

        </div>
    );
};

export default Session;