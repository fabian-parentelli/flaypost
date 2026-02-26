const PreFormJS = () => {

    return (
        <>
            <p><span className='cod-gray'>{'<'}</span><span className='cod-blue'>form</span> <span className='cod-skyyellow'>method</span>=<span className='cod-red'>"POST"</span> <span className='cod-skyyellow'>id</span>=<span className='cod-red'>"form"</span><span className='cod-gray'>{'>'}</span></p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>input</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"hidden"</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"access_key"</span> <span className='cod-skyyellow'>value</span>=<span className='cod-red'>"YOUR_ACCESS_KEY_HERE"</span><span className='cod-gray'>{'>'}</span></p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>input</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"text"</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"name"</span> <span className='cod-skyyellow'>required</span><span className='cod-gray'>{'>'}</span></p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>input</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"email"</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"email"</span> <span className='cod-skyyellow'>required</span><span className='cod-gray'>{'>'}</span></p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>textarea</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"message"</span> <span className='cod-skyyellow'>required</span><span className='cod-gray'>{'>'}</span><span className='cod-gray'>{'</'}</span><span className='cod-blue'>textarea</span><span className='cod-gray'>{'>'}</span></p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>input</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"checkbox"</span> <span className='cod-skyyellow'>name</span>=<span className='cod-red'>"botcheck"</span> <span className='cod-skyyellow'>class</span>=<span className='cod-red'>"hidden"</span> <span className='cod-skyyellow'>style</span>=<span className='cod-red'>"display: none;"</span><span className='cod-gray'>{'>'}</span></p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>button</span> <span className='cod-skyyellow'>type</span>=<span className='cod-red'>"submit"</span><span className='cod-gray'>{'>'}</span>Submit Form<span className='cod-gray'>{'</'}</span><span className='cod-blue'>button</span><span className='cod-gray'>{'>'}</span></p>
            <p>     <span className='cod-gray'>{'<'}</span><span className='cod-blue'>div</span> <span className='cod-skyyellow'>id</span>=<span className='cod-red'>"result"</span><span className='cod-gray'>{'>'}</span><span className='cod-gray'>{'</'}</span><span className='cod-blue'>div</span><span className='cod-gray'>{'>'}</span></p>
            <p><span className='cod-gray'>{'</'}</span><span className='cod-blue'>form</span><span className='cod-gray'>{'>'}</span></p>
            <br />
            
            <p><span className="cod-gray">{'<'}</span><span className="cod-pink">script</span><span className="cod-gray">{'>'}</span></p>

            <p><span className='cod-blue'>const</span> <span className='cod-skyblue'>form</span> = <span className='cod-skyblue'>document.</span><span className='cod-skyyellow'>getElementById</span><span className='cod-pink'>(</span><span className='cod-red'>"form"</span><span className='cod-pink'>)</span>;</p>
            <p><span className='cod-blue'>const</span> <span className='cod-skyblue'>result</span> = <span className='cod-skyblue'>document.</span><span className='cod-skyyellow'>getElementById</span><span className='cod-pink'>(</span><span className='cod-red'>"result"</span><span className='cod-pink'>)</span>;</p>
            <br />
            <p><span className='cod-skyblue'>form</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>addEventListener</span><span className='cod-pink'>{'('}</span><span className='cod-red'>'submit'</span><span className='cod-pink'>,</span><span className='cod-skyyellow'>function</span><span className='cod-pink'>(</span><span className='cod-skyblue'>e</span><span className='cod-pink'>)</span><span className='cod-blue'> {'{'}</span></p>
            <p>     <span className='cod-skyblue'>e</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>preventDefault</span><span className='cod-pink'>()</span><span className='cod-gray'>;</span></p>
            <p>     <span className='cod-blue'>const</span> <span className='cod-skyblue'>formData</span> <span className='cod-skyyellow'>=</span> <span className='cod-skyyellow'>new</span> <span className='cod-skyblue'>FormData</span><span className='cod-pink'>(</span><span className='cod-skyblue'>form</span><span className='cod-pink'>)</span><span className='cod-gray'>;</span></p>
            <p>     <span className='cod-blue'>const</span> <span className='cod-skyblue'>object</span> <span className='cod-skyyellow'>=</span> <span className='cod-skyblue'>Object</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>fromEntries</span><span className='cod-pink'>(</span><span className='cod-skyblue'>formData</span><span className='cod-pink'>)</span><span className='cod-gray'>;</span></p>
            <p>     <span className='cod-blue'>const</span> <span className='cod-skyblue'>json</span> <span className='cod-skyyellow'>=</span> <span className='cod-skyblue'>JSON</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>stringify</span><span className='cod-pink'>(</span><span className='cod-skyblue'>object</span><span className='cod-pink'>)</span><span className='cod-gray'>;</span></p>
            <p>     <span className='cod-skyblue'>result</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>innerHTML</span> <span className='cod-skyyellow'>=</span> <span className='cod-red'>"Please wait..."</span><span className='cod-gray'>;</span></p>

            <p>     <span className='cod-skyyellow'>fetch</span><span className='cod-pink'>{"("}</span><span className='cod-red'>"https://api.flypost.com/submit"</span>, <span className='cod-yellow'>{'{'}</span></p>
            <p>             <span className='cod-skyyellow'>method</span><span className='cod-skyyellow'>:</span> <span className='cod-red'>'POST'</span><span className='cod-gray'>,</span></p>
            <p>             <span className='cod-skyyellow'>headers</span><span className='cod-skyyellow'>:</span> <span className='cod-blue'>{'{'}</span></p>
            <p>                 <span className='cod-red'>'Content-Type'</span><span className='cod-skyyellow'>:</span> <span className='cod-red'>'application/json'</span>,</p>
            <p>                 <span className='cod-red'>'Accept'</span><span className='cod-skyyellow'>:</span> <span className='cod-red'>'application/json'</span>,</p>
            <p>             <span className='cod-blue'>{'}'}</span>,</p>
            <p>             <span className='cod-skyyellow'>body</span><span className='cod-skyyellow'>:</span> <span className='cod-skyblue'>json</span></p>
            <p>         <span className='cod-yellow'>{'}'}</span><span className='cod-pink'>{')'}</span></p>

            <p>         .<span className='cod-skyyellow'>then</span><span className='cod-pink'>{'('}</span><span className='cod-skyyellow'>async</span> <span className='cod-pink'>(</span><span className='cod-skyblue'>response</span><span className='cod-pink'>)</span> <span className='cod-blue'>{'{'}</span></p>
            <p>             <span className='cod-blue'>let</span> <span className='cod-skyblue'>json</span> <span className='cod-skyyellow'>=</span> <span className='cod-skyblue'>await</span> <span className='cod-skyblue'>response</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>json</span><span className='cod-pink'>()</span>;</p>
            <p>             <span className='cod-blue'>if</span> <span className='cod-pink'>(</span><span className='cod-skyblue'>response</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>status</span> <span className='cod-skyyellow'>==</span> <span className='cod-red'>200</span><span className='cod-pink'>)</span> <span className='cod-blue'>{'{'}</span></p>
            <p>                 <span className='cod-skyblue'>result</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>innerHTML</span> <span className='cod-skyyellow'>=</span> <span className='cod-red'>"Form submitted successfully"</span>;</p>
            <p>             <span className='cod-blue'>{'}'} </span><span className='cod-blue'>else</span> <span className='cod-blue'>{'{'}</span></p>
            <p>                 <span className='cod-skyblue'>console</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>log</span><span className='cod-pink'>(</span><span className='cod-skyblue'>response</span><span className='cod-pink'>)</span>;</p>
            <p>                 <span className='cod-skyblue'>result</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>innerHTML</span> <span className='cod-skyyellow'>=</span> <span className='cod-skyblue'>json</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>message</span>;</p>
            <p>             <span className='cod-blue'>{'}'}</span></p>
            <p>         <span className='cod-blue'>{'}'}</span><span className='cod-pink'>{')'}</span></p>

            <p>         .<span className='cod-skyyellow'>catch</span><span className='cod-pink'>{"("}</span><span className='cod-skyblue'>error</span> <span className='cod-pink'>=&gt;</span> <span className='cod-blue'>{'{'}</span></p>
            <p>             <span className='cod-skyblue'>console</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>log</span><span className='cod-pink'>(</span><span className='cod-skyblue'>error</span><span className='cod-pink'>)</span>;</p>
            <p>             <span className='cod-skyblue'>result</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>innerHTML</span> <span className='cod-skyyellow'>=</span> <span className='cod-red'>"Something went wrong!"</span>;</p>
            <p>         <span className='cod-blue'>{'}'}</span><span className='cod-pink'>{')'}</span></p>

            <p>         .<span className='cod-skyyellow'>then</span><span className='cod-pink'>{"("}</span><span className='cod-skyyellow'>function</span><span className='cod-pink'>(</span><span className='cod-pink'>)</span> <span className='cod-blue'>{'{'}</span></p>
            <p>             <span className='cod-skyblue'>form</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>reset</span><span className='cod-pink'>(</span><span className='cod-pink'>)</span><span className='cod-gray'>;</span></p>
            <p>             <span className='cod-skyyellow'>setTimeout</span><span className='cod-pink'>(</span><span className='cod-pink'>()</span> <span className='cod-gray'>=&gt;</span> <span className='cod-gray'>{'{'}</span></p>
            <p>             <span className='cod-skyblue'>result</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>style</span><span className='cod-gray'>.</span><span className='cod-skyyellow'>display</span> <span className='cod-skyyellow'>=</span> <span className='cod-red'>"none"</span><span className='cod-gray'>;</span></p>
            <p>         <span className='cod-blue'>{'}'}</span>, <span className='cod-skyyellow'>3000</span><span className='cod-pink'>{')'}</span>;</p>
            <p>     <span className='cod-blue'>{'}'});</span></p>
            <p><span className='cod-blue'>{'}'}</span><span className='cod-pink'>{')'}</span>;</p>
            <p><span className="cod-gray">{'</'}</span><span className="cod-pink">script</span><span className="cod-gray">{'>'}</span></p>
        </>
    );
};

export default PreFormJS;