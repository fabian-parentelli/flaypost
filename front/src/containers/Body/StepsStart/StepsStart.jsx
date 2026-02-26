import './stepsStart.css';
import { Icons } from 'fara-comp-react';

const steps = [
    { number: 'pencil', title: 'Sign Up', desc: 'Create your account in seconds' },
    { number: 'email', title: 'Confirm Your Email', desc: 'Verify your email address' },
    { number: 'lock', title: 'Generate Your API Key', desc: 'Get your secure API key' }
];

const StepsStart = () => {
    return (
        <section className="stepsStart">
            <h2>To get started you only need 3 steps</h2>

            <div className="stepsGrid">
                {steps.map((step, i) => (
                    <div className="stepCard" key={i}>
                        <div className="stepNumber"><Icons type={step.number} color='#13244B' /></div>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>

            <button className='stepsStartBtn'>Create your Form</button>
        </section>
    );
};

export default StepsStart;