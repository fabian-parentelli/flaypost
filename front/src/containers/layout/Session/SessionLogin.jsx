import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import PassInput from "@/components/tools/PassInput/PassInput.jsx";

const SessionLogin = () => {

    const { values, handleChange } = useOutletContext();

    return (
        <>
            <h3>Login</h3>
            <input type="email" name='email' placeholder="Email" className="sessionContainerInput"
                required value={values?.email || ''} onChange={handleChange}
            />
            <PassInput password={values?.password || ''} handleChange={handleChange} />
            <button className='btn btn6 btn-center'>Login</button>
            
            <Link to={'/session/register'} className='decoration-none pwhite txt-center'>Sign up</Link>
            <Link to={'/session/whatemail'} className='decoration-none pgray txt-center'>Recover Password</Link>
        </>
    );
};

export default SessionLogin;