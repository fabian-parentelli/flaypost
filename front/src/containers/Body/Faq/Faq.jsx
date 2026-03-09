import './faq.css';
import { Accordion } from 'fara-comp-react';
import BtnForm from '@/components/utils/BtnForm/BtnForm.jsx';

const Faq = () => {

    return (
        <div className="faq">
            <h2>FAQ</h2>
            <p className='faqSubTitle'>Frequently Asked Questions</p>

            <section className='faqSect'>
                {faqs.map((doc, ind) => (
                    <Accordion title={doc.req} key={ind} 
                        styles={{
                            backColHeader: 'transparent',
                            colorHeader: '#fff',
                            borderAcordion: 'none',
                            backColContent: 'transparent'
                        }}
                    >
                        <p className='faqRes'>{doc.res}</p>
                    </Accordion>
                ))}
            </section>
            
            <br />
            <br />
            
            <BtnForm />
        </div>
    );
};

export default Faq;

const faqs = [
    {
        req: 'This service is free?',
        res: 'FlyPost offers both free and subscription options. The free version allows up to 50 mailings per month and includes essential features. For access to more mailings and advanced tools, you can upgrade to a paid plan.'
    },
    {
        req: 'Is my API key public or private?',
        res: "There's no problem. The access key isn't a secret API, so it can be publicly exposed in the client code without risk. It acts as an identifier linked to your email address. On Pro plans, you can enable the Trusted Domains option for added protection against spam and form misuse."
    },
    {
        req: "What do I do if my contact form isn't working?",
        res: "There are several reasons why your contact form might not be working correctly. Check our troubleshooting guide in the documentation to learn how to resolve common issues, such as messages not being delivered, empty fields, emails going to the spam folder, CORS errors, or HTTP 400 codes. If the problem persists after trying these steps, please contact our support team."
    },
    {
        req: "Is the submission of my forms and my email information protected?",
        res: "Of course, all forms are submitted using HTTPS, ensuring that your information travels securely. Your data is stored on our servers with encryption. On free plans, submissions are kept for 30 days, and on Pro plans for one year, after which they are automatically deleted to guarantee your privacy."
    },
    {
        req: "Is FlyPost GDPR complaint",
        res: "At FlyPost, we take your users' privacy very seriously. We don't collect personal information beyond what's submitted directly through our forms, and we never sell or share that data with third parties. Submissions are securely stored for a limited time: 30 days on free plans and up to one year on Pro plans, after which they are automatically deleted. Our infrastructure uses secure protocols and encryption to protect information while stored and in transit, ensuring that your data and your users' data remain private and under your control."
    }
];