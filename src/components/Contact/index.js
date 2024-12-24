import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    // Typing Game States
    const [words] = useState(["react", "developer", "portfolio", "email", "contact", "code","CSS", "javascript", "web", "frontend", "software","engineering","innovation","AI","ML",])
    const [currentWord, setCurrentWord] = useState("")
    const [inputValue, setInputValue] = useState("")
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(10)
    const [gameOver, setGameOver] = useState(false)

    // Randomly set a new word when the page loads
    useEffect(() => {
        setCurrentWord(words[Math.floor(Math.random() * words.length)])
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timerId)
        }
    }, [words])

    // Handle the countdown timer and game over
    useEffect(() => {
        if (timeLeft > 0 && !gameOver) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
            return () => clearTimeout(timer)
        } else if (timeLeft === 0) {
            setGameOver(true)
        }
    }, [timeLeft, gameOver])

    // Handle the form submission
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'REACT_APP_EMAILJS_SERVICE_ID',
                'REACT_APP_EMAILJS_TEMPLATE_ID',
                refForm.current,
                'REACT_APP_EMAILJS_USER_ID'
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

    // Handle the game input changes
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        if (e.target.value.trim().toLowerCase() === currentWord.toLowerCase()) {
            setScore(score + 1)
            setInputValue("")
            setCurrentWord(words[Math.floor(Math.random() * words.length)])
            setTimeLeft(timeLeft + 1) // Reward extra time
        }
    }

    // Reset the game
    const resetGame = () => {
        setScore(0)
        setTimeLeft(10)
        setGameOver(false)
        setCurrentWord(words[Math.floor(Math.random() * words.length)])
        setInputValue("")
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <table>
                        <tr>
                            <td className="left-side">
                                <h1>
                                    <AnimatedLetters letterClass={letterClass} strArray={"Contact me".split("")} idx={15} />
                                </h1>
                                <p>
                                Thank you for your interest in getting in touch!
                                    <br />I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
                                    
                                    <br />
                                    <br />While I have you here, try out the typing game I made! Good luck!
                                    <br />
                                    <br />
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antonio-henrique-souza/">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon" color="#4d4d4e" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="mailto:souza1tony@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} className="icon" color="#4d4d4e"  />
                                    </a>
                                </p>
                            </td>
                            <td className="right-side">
                                <div className="contact-form" onSubmit={sendEmail}>
                                    <form ref={refForm}>
                                        <ul>
                                            <li className="half">
                                                <input type="text" name="name" placeholder="Name" required />
                                            </li>
                                            <li className="half">
                                                <input type="email" name="email" placeholder="Email" required />
                                            </li>
                                            <li>
                                                <input placeholder="Subject" type="text" name="subject" required />
                                            </li>
                                            <li>
                                                <textarea placeholder="Message" name="message" required></textarea>
                                            </li>
                                            <li>
                                                <input type="submit" className="flat-button" value="SEND" />
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="game-container">
                    <h2>Typing Game</h2>
                    {gameOver ? (
                        <>
                            <p>Game Over! Your score: {score}</p>
                            <button onClick={resetGame} className="flat-button">Restart Game</button>
                        </>
                    ) : (
                        <>
                            <p>Type this word: <strong>{currentWord}</strong></p>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                className="game-input"
                                placeholder="Type here..."
                            />
                            <p>Time left: {timeLeft}s</p>
                            <p>Score: {score}</p>
                        </>
                    )}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
