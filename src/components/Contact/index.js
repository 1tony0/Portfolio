import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault() 

        emailjs
            .sendForm(
                'gmail',
                'template_4i7khtk',
                refForm.current,
                'service_77okgvgsaovuohoa'
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
                    window.location.reload(false)
                }, 
                () => { 
                    alert("Thank you for sending me a message! I will get back to you as soon as possible! If I do not reply within 24h, please email me directly at souza1tony@gmail.com")
                }
            )
      }


    return (
    <>
        <div className='container contact-page'> 
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e','!']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities as well as creating projects with new, or experienced developers. If you have any questions, or other requests, do not hesitate to contact me using the form below!
                </p>
                <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
    </>)
}

export default Contact