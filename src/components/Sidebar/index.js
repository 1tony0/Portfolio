import './index.scss'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faFolderOpen, } from '@fortawesome/free-solid-svg-icons'
import LogoAS from '../../assets/images/logo-as.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    return(
        <div className = 'nav-bar'> 
            <Link className = "logo" to="/"> 
                <img src = {LogoAS} alt="logo" />
                <img className="sub-logo" src = {LogoSubtitle} alt="" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ""}>
                <NavLink exact="true" activeclassname = "active" to="/">
                    <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "about-link" to="/about">
                    <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" onClick={() => setShowNav(false)}/>
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "experiences-link" to="/experiences">
                    <FontAwesomeIcon icon = {faSuitcase} color = "#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon = {faFolderOpen} color = "#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "contact-link" to="/contact">
                    <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e" onClick={() => setShowNav(false)}/>
                </NavLink>
                
            </nav>
            <ul>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/antonio-henrique-souza/">
                        <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = "https://github.com/1tony0">
                        <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = "https://www.youtube.com/@SWE1tony0">
                        <FontAwesomeIcon icon={faYoutube} color = "#4d4d4e" />
                    </a>
                </li>
                <li>
                <a
                  target ="_blank"
                  rel="noreferrer"
                  href="https://x.com/tonioosouza">
                  <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>

                </a>
                </li>
            </ul>
           
        </div>
    )
}

export default Sidebar 