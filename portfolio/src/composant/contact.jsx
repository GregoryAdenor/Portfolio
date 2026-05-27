import './contact.css'
import { useLanguage } from '../context/languageContext'

export function Contact() {
    const { language } = useLanguage()

    return (
        <footer id="contact" className="contact-footer">
            <div className="contact-container">
                <div className="contact-text">
                    <h2>{language === 'fr' ? 'Discutons Ensemble' : "Let's Connect"}</h2>
                    <p>
                        {language === 'fr' 
                            ? "Je suis actuellement ouvert aux opportunités. N'hésitez pas à me contacter !" 
                            : "I'm currently open to new opportunities. Feel free to reach out!"}
                    </p>
                    <a href="mailto:gregory-luco.adenor@epitech.eu" className="email-btn">
                        gregory-luco.adenor@epitech.eu
                    </a>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} Gregory Adenor
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com/GregoryAdenor" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/gregory-adenor-413893398" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="/Cv.pdf" target="_blank" rel="noreferrer" className="cv-link">CV</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}