import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Subscribe() {
    const form = useRef();
    function sendEmail(e) { e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_7kg7fh9',  'template_cnuikx4', form.current, { publicKey: 'my34oN-lRNAFmLi0l',})
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    return (
        <div className='subscribe contact' id='contact'  data-aos="fade-left" data-aos-duration="700"  data-aos-easing="ease-in-sine">
            <h2 data-aos="fade-left"  data-aos-offset="500" data-aos-easing="ease-in-sine">Ignite Your Child's Potential Take the Leap with an Online Course</h2>
            <form  className="subscribe-form" onSubmit={sendEmail} ref={form}>
                <div className="input">
                    <input type="text" placeholder='Your email addres...' name='from_email' />
                </div>
                <div className="explore">
                    <button className='explore' type="submit" value="Subscribe">Subscribe</button>
                </div>
            </form >
        </div>
    )
}
