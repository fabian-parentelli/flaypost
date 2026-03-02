import './footerSocial.css';
import {Icons} from 'fara-comp-react';

const FooterSocial = () => {

    return (
        <div className='footerSocial'>
            
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <Icons type={'facebook'} color='#288EF2' hover={true} />
            </a>
            
            <a href="https://www.instagram.com/underpass.ar/" target="_blank" rel="noopener noreferrer">
                <Icons type={'instagram'} color='#288EF2' hover={true} />
            </a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Icons type={'x'} color='#288EF2' hover={true} />
            </a>
            
            <a href="https://www.youtube.com/@underpass-qu6jl" target="_blank" rel="noopener noreferrer">
                <Icons type={'youtube'} color='#288EF2' hover={true} />
            </a>
        </div>
    );
};

export default FooterSocial;