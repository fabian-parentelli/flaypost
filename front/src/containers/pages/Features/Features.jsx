import './features.css';
import { Icons } from 'fara-comp-react';
import { features } from '@/utils/features.utils.js';

const Features = () => {

    return (
        <div className="features">
            <h2>Features</h2>
            <p className='featuresP'>Build your ultimate contact form with all these capabilities.</p>

            <section className='featuresSect'>
                {features.map((doc, ind) => (
                    <div className='featuresDiv' key={ind}>
                        <Icons type={doc.icon} color='white' />
                        <h5>{doc.title}</h5>
                        <p>{doc.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Features;