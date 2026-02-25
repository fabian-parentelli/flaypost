import { Link } from 'react-router-dom';
import { Icons } from 'fara-comp-react';
import { features } from '@/utils/features.utils.js';

const Features = () => {

    return (
        <div className='features'>
            <h2>Features</h2>

            <section className='featuresSect'>
                {features.slice(0, 6).map((doc, ind) => (
                    <div className='featuresDiv' key={ind}>
                        <Icons type={doc.icon} color='white' />
                        <h5>{doc.title}</h5>
                        <p>{doc.description}</p>
                    </div>
                ))}
            </section>

            <Link to={'/features'} className='btn btn6 flex-center decoration-none pwhite'>View all features</Link>
        </div>
    );
};

export default Features;