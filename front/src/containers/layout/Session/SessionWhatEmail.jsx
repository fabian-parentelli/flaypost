import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const SessionWhatEmail = () => {

    const { values, handleChange } = useOutletContext();

    return (
        <>
            <h3>Recover Password</h3>
            <input type="email" name='email' placeholder="Email" className="sessionContainerInput"
                required value={values?.email || ''} onChange={handleChange}
            />
            <button className='btn btn6 btn-center'>Recover</button>
            
            <Link to={'/session/login'} className='decoration-none pwhite txt-center'>Login</Link>
            <Link to={'/session/register'} className='decoration-none pgray txt-center'>Sign up</Link>
        </>
    );
};

export default SessionWhatEmail;