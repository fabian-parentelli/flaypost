import './btnForm.css';
import { useState } from 'react';
import { Modal, Icons, SpinnerH } from 'fara-comp-react';

const BtnForm = () => {

    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') return setOpen(false);

        // serrar con setTime aout por 2 segundos cuando confirma la creación del usuario
        // serrar con setTime aout por 2 segundos cuando confirma la creación del usuario
        // serrar con setTime aout por 2 segundos cuando confirma la creación del usuario
        // serrar con setTime aout por 2 segundos cuando confirma la creación del usuario
        // serrar con setTime aout por 2 segundos cuando confirma la creación del usuario
    };

    return (
        <>
            <button className='btnForm' onClick={() => setOpen(true)}>
                Create your Form
            </button>

            <Modal open={open} onClose={() => null} backgroundColor='#17478D'>
                <form className='flex-col-center btnFormSect' onSubmit={handleSubmit}>
                    <h5>Create your form</h5>

                    {!success
                        ? <>
                            <input type="email" placeholder='Email'
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />

                            <button className='btn btn0'>
                                {loading
                                    ? <SpinnerH color='white' />
                                    : email === '' ? 'Closed' : 'Send'
                                }
                            </button>
                        </>
                        : <>
                            <Icons type='success' color='white' size='80px' />
                            <p>We sent the Apy Key to your email</p>
                        </>
                    }
                </form>
            </Modal>
        </>
    );
};

export default BtnForm;