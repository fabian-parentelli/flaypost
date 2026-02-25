import './technology.css';
import { useNavigate } from 'react-router-dom';

const Technology = () => {

    const navigate = useNavigate();

    return (
        <div className="technology">
            <h3>You can use it with any technology</h3>

            <section className='technologySect'>
                <img onClick={()=> navigate('forms/form-html')} src="/html.svg" alt="svg" />
                <img onClick={()=> navigate('forms/form-js')} src="/javascript.svg" alt="svg" />
                <img onClick={()=> navigate('forms/form-react')} src="/react.svg" alt="svg" />
            </section>

        </div>
    );
};

export default Technology;