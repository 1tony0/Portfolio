import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPython, faReact, faAws, faJava, faHtml5, faGithub } from '@fortawesome/free-brands-svg-icons';
import Loader from "react-loaders";



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // No return statement (React expects no cleanup)
    }, []);

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e',]}
                        idx={15}
                    
                    />
                </h1>
                 <p>My name is Antonio, but in computer relm, I go by NEO.  </p>
                 <p>I am a curious and driven software developer with a passion for innovation, Artificial Intelligence (AI), and Machine Learning (ML). I thrive in collaborative environments, combining strong communication with a focus on impactful, innovative solutions. My ambition drives continuous growth and a commitment to tackling challenges head-on.</p>
                <p>Outside of tech, I’m passionate about connecting with others, exploring new cultures, and embracing continuous growth through travel, community, and learning. These experiences inspire creativity, empathy, and a human-centered approach to challenges and relationships.</p>

            </div>

            <div className = "stage-cube-cont">
                    <div className = "cubespinner"> 
                        <div className = "face1">
                            <FontAwesomeIcon icon={faAws} color="#252f3e"/>
                        </div>
                        <div className = "face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className = "face3">
                            <FontAwesomeIcon icon={faGithub} color="#0d1117"/>
                        </div>
                        <div className = "face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className = "face5">
                            <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                        </div>
                        <div className = "face6">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                        </div>
                    </div>
                </div>
                <Loader type="pacman" />

            </div>
            <Loader type='pacman' />

            </>

            
            
            
            
    


    )
}

export default About