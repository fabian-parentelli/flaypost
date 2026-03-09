import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import PassInput from "@/components/tools/PassInput/PassInput.jsx";

const SessionRegister = () => {

    const { values, handleChange } = useOutletContext();

    return (
        <>
            <h3>Sign up</h3>
            <input type="text" name='name' placeholder="Name" className="sessionContainerInput"
                required value={values?.name || ''} onChange={handleChange}
            />
            <input type="email" name='email' placeholder="Email" className="sessionContainerInput"
                required value={values?.email || ''} onChange={handleChange}
            />
            <PassInput password={values?.password || ''} handleChange={handleChange} />
            <button className='btn btn6 btn-center'>Sign up</button>
            
            <Link to={'/session/login'} className='decoration-none pwhite txt-center'>Login</Link>
            <Link to={'/session/whatemail'} className='decoration-none pgray txt-center'>Recover Password</Link>
        </>
    );
};

export default SessionRegister;