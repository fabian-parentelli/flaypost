const PreFormHtml = () => {

    return (
        <>
            <p><span className='cod-gray'>{'<'}</span><span className='cod-blue'>form</span> <span className='cod-skyyellow'>action</span>=<span className='cod-red'>"https://api.flypost.com/submit"</span> <span className='cod-skyyellow'>method</span>=<span className='cod-red'>"POST"</span><span className='cod-gray'>{'>'}</span></p>
            <p className='cod-green'>       {"<!-- Replace with your Access Key -->"}</p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>input</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"hidden"</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"access_key"</span> <span className='cod-skyyellow'>value</span>=<span className='cod-red'>"YOUR_ACCESS_KEY_HERE"</span><span className='cod-gray'>{'>'}</span></p>
            <p className='cod-green'>       {"<!-- Form Inputs. Each input must have a name=\"\" attribute -->"}</p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>input</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"text"</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"name"</span> <span className='cod-skyyellow'>required</span><span className='cod-gray'>{'>'}</span></p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>input</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"email"</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"email"</span> <span className='cod-skyyellow'>required</span><span className='cod-gray'>{'>'}</span></p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>textarea</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"message"</span> <span className='cod-skyyellow'>required</span><span className='cod-gray'>{'>'}</span><span className='cod-gray'>{'</'}</span><span className='cod-blue'>textarea</span><span className='cod-gray'>{'>'}</span></p>
            <p className='cod-green'>       {"<!-- Honeypot Spam Protection -->"}</p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>input</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"checkbox"</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"botcheck"</span> <span className='cod-skyyellow'>class</span>=<span className='cod-red'>"hidden"</span> <span className='cod-skyyellow'>style</span>=<span className='cod-red'>"display: none;"</span><span className='cod-gray'>{'>'}</span></p>
            <p className='cod-green'>       {"<!-- Custom Confirmation / Success Page -->"}</p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>button</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"submit"</span><span className='cod-gray'>{'>'}</span>Submit Form<span className='cod-gray'>{'</'}</span><span className='cod-blue'>button</span><span className='cod-gray'>{'>'}</span></p>
            <p><span className='cod-gray'>{'</'}</span><span className='cod-blue'>form</span><span className='cod-gray'>{'>'}</span></p>
        </>
    );
};

export default PreFormHtml;