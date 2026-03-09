import { Route } from 'react-router-dom';
import Session from '../containers/layout/Session/Session.jsx';
import SessionLogin from '../containers/layout/Session/SessionLogin.jsx';
import SessionRegister from '../containers/layout/Session/SessionRegister.jsx';
import SessionWhatEmail from '../containers/layout/Session/SessionWhatEmail.jsx';

const RoutesSession = () => {
    return (
        <>
            <Route path='session' element={<Session />}>
                <Route path='login' element={<SessionLogin />} />
                <Route path='register' element={<SessionRegister />} />
                <Route path='whatemail' element={<SessionWhatEmail />} />
            </Route>
        </>
    )
};

export default RoutesSession;