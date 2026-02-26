import './preForms.css';
import { useState } from 'react';
import PreFormJS from './PreFormJS.jsx';
import PreFormHtml from './PreFormHtml.jsx';
import CodeCont from '@/components/utils/CodeCont/CodeCont.jsx';

const PreForms = () => {

    const [view, setView] = useState('HTML');

    return (
        <div className="preForms">
            <h2>Create Contact Form</h2>

            <section className='btns-row preFormsBtns'>
                <button className='preFormsBtn' style={{ backgroundColor: view == 'HTML' ? '#288EF2' : '#144CAC' }} onClick={() => setView('HTML')}><img src='/html.svg' width='15px' alt="img" /> HTML</button>
                <button className='preFormsBtn' style={{ backgroundColor: view == 'Javascript' ? '#288EF2' : '#144CAC' }} onClick={() => setView('Javascript')}><img src='/javascript.svg' width='15px' alt="img" /> Javascript</button>
                <button className='preFormsBtn' style={{ backgroundColor: view == 'React' ? '#288EF2' : '#144CAC' }} onClick={() => setView('React')}><img src='/react.svg' width='15px' alt="img" /> React</button>
            </section>

            <section className='preFormsSect'>
                <CodeCont lenguage={view} paste={allCode[view]}>
                    {view === 'HTML' && <PreFormHtml />}
                    {view === 'Javascript' && <PreFormJS />}
                </CodeCont>
            </section>

        </div>
    );
};

export default PreForms;

const allCode = {
    HTML: `
<form action="https://api.flypost.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <input type="checkbox" name="botcheck" class="hidden" style="display:none;">
    <button type="submit">Submit Form</button>
</form>
`,
    Javascript: `
<form method="POST" id="form">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
    <button type="submit">Submit Form</button>
    <div id="result"></div>
</form>

<script>
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener('submit',function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait...";
        fetch("https://api.flypost.com/submit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: json
        })
        .then(async (response) {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
            result.style.display = "none";
        }, 3000);
        });
    });

</script>
`
};