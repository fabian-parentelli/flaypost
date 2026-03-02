const PreFormReact = () => {
    
    return (
        <>
            <p><span className="cod-pink">export default</span> <span className="cod-blue">function</span> <span className="cod-skyyellow">Contact{'()'}</span> <span className="cod-blue">{'{'}</span></p>
            <p>     <span className="cod-blue">const</span> <span className="cod-pink">{'['}</span><span className="cod-blue">result</span>, <span className="cod-skyyellow">setResult</span><span className="cod-pink">{']'}</span> = <span className="cod-green">React</span>.<span className="cod-skyyellow">useState</span><span className="cod-pink">{'('}</span><span className="cod-red">""</span><span className="cod-pink">{')'}</span>;</p>
            <br />
            <p><span className="cod-blue">const</span> <span className="cod-skyyellow">onSubmit</span> = <span className="cod-pink">async</span> <span className="cod-pink">{'('}</span><span className="cod-blue">event</span><span className="cod-pink">{')'}</span> =&gt; <span className="cod-pink">{'{'}</span></p>
            <p>     <span className="cod-blue">event</span>.<span className="cod-skyyellow">preventDefault</span><span className="cod-pink">{'('}</span><span className="cod-pink">{')'}</span>;</p>
            <p>     <span className="cod-skyyellow">setResult</span><span className="cod-pink">{'('}</span><span className="cod-red">"Sending...."</span><span className="cod-pink">{')'}</span>;</p>
            <p>     <span className="cod-blue">const</span> <span className="cod-blue">formData</span> = <span className="cod-blue">new</span> <span className="cod-skyyellow">FormData</span><span className="cod-pink">{'('}</span><span className="cod-blue">event</span>.<span className="cod-blue">target</span><span className="cod-pink">{')'}</span>;</p>
            <p>     <span className="cod-blue">formData</span>.<span className="cod-skyyellow">append</span><span className="cod-pink">{'('}</span><span className="cod-red">"access_key"</span>, <span className="cod-red">"YOUR_ACCESS_KEY_HERE"</span><span className="cod-pink">{')'}</span>;</p>
            <br />
            <p>     <span className="cod-blue">const</span> <span className="cod-blue">response</span> = <span className="cod-pink">await</span> <span className="cod-skyyellow">fetch</span><span className="cod-pink">{'('}</span><span className="cod-red">"https://api.flypost.com/submit"</span>, <span className="cod-pink">{'{'}</span></p>
            <p>         <span className="cod-blue">method</span>: <span className="cod-red">"POST"</span>,</p>
            <p>         <span className="cod-blue">body</span>: <span className="cod-blue">formData</span></p>
            <p>     <span className="cod-pink">{'}'}</span><span className="cod-pink">{')'}</span>;</p>
            <p>     <span className="cod-blue">const</span> <span className="cod-blue">data</span> = <span className="cod-pink">await</span> <span className="cod-blue">response</span>.<span className="cod-skyyellow">json</span><span className="cod-pink">{'('}</span><span className="cod-pink">{')'}</span>;</p>
            <br />
            <p>     <span className="cod-pink">if</span> <span className="cod-pink">{'('}</span><span className="cod-blue">data</span>.<span className="cod-blue">success</span><span className="cod-pink">{')'}</span> <span className="cod-pink">{'{'}</span></p>
            <p>         <span className="cod-skyyellow">setResult</span><span className="cod-pink">{'('}</span><span className="cod-red">"Form Submitted Successfully"</span><span className="cod-pink">{')'}</span>;</p>
            <p>         <span className="cod-blue">event</span>.<span className="cod-blue">target</span>.<span className="cod-skyyellow">reset</span><span className="cod-pink">{'('}</span><span className="cod-pink">{')'}</span>;</p>
            <p>     <span className="cod-pink">{'}'}</span> <span className="cod-pink">else</span> <span className="cod-pink">{'{'}</span></p>
            <p>         <span className="cod-blue">console</span>.<span className="cod-skyyellow">log</span><span className="cod-pink">{'('}</span><span className="cod-red">"Error"</span>, <span className="cod-blue">data</span><span className="cod-pink">{')'}</span>;</p>
            <p>         <span className="cod-skyyellow">setResult</span><span className="cod-pink">{'('}</span><span className="cod-blue">data</span>.<span className="cod-blue">message</span><span className="cod-pink">{')'}</span>;</p>
            <p>     <span className="cod-pink">{'}'}</span></p>
            <p><span className="cod-pink">{'}'}</span>;</p>
            <br />
            <p>     <span className="cod-pink">return</span> <span className="cod-pink">{'('}</span></p>
            <p>          <span className="cod-pink">{'<'}</span><span className="cod-blue">div</span><span className="cod-pink">{'>'}</span></p>
            <p>              <span className="cod-pink">{'<'}</span><span className="cod-blue">form</span> <span className="cod-blue">onSubmit</span>=<span className="cod-pink">{'{'}</span><span className="cod-blue">onSubmit</span><span className="cod-pink">{'}'}</span><span className="cod-pink">{'>'}</span></p>
            <p>                  <span className="cod-pink">{'<'}</span><span className="cod-blue">input</span> <span className="cod-blue">type</span>=<span className="cod-red">"email"</span> <span className="cod-blue">name</span>=<span className="cod-red">"email"</span> <span className="cod-blue">required</span><span className="cod-pink">{'/>'}</span></p>
            <p>                  <span className="cod-pink">{'<'}</span><span className="cod-blue">input</span> <span className="cod-blue">type</span>=<span className="cod-red">"text"</span> <span className="cod-blue">name</span>=<span className="cod-red">"name"</span> <span className="cod-blue">required</span><span className="cod-pink">{'/>'}</span></p>
            <p>                  <span className="cod-pink">{'<'}</span><span className="cod-blue">textarea</span> <span className="cod-blue">name</span>=<span className="cod-red">"message"</span> <span className="cod-blue">required</span><span className="cod-pink">{'>'}</span><span className="cod-pink">{'</'}</span><span className="cod-blue">textarea</span><span className="cod-pink">{'>'}</span></p>
            <br/>
            <p>                  <span className="cod-pink">{'<'}</span><span className="cod-blue">button</span> <span className="cod-blue">type</span>=<span className="cod-red">"submit"</span><span className="cod-pink">{'>'}</span>Submit Form<span className="cod-pink">{'</'}</span><span className="cod-blue">button</span><span className="cod-pink">{'>'}</span></p>
            <p>              <span className="cod-pink">{'</'}</span><span className="cod-blue">form</span><span className="cod-pink">{'>'}</span></p>
            <p>              <span className="cod-pink">{'<'}</span><span className="cod-blue">span</span><span className="cod-pink">{'>'}</span><span className="cod-blue">{"{result}"}</span><span className="cod-pink">{'</'}</span><span className="cod-blue">span</span><span className="cod-pink">{'>'}</span></p>
            <p>          <span className="cod-pink">{'</'}</span><span className="cod-blue">div</span><span className="cod-pink">{'>'}</span></p>
            <p>     <span className="cod-pink">{')'}</span>;</p>
            <p><span className="cod-pink">{'}'}</span>;</p>
        </>
    );
};

export default PreFormReact;