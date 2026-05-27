import './header.css'
import { useLanguage } from '../context/languageContext'
import { useState, useEffect } from 'react'

export function Header (){
    const [scroll, setScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { language, setLanguage } = useLanguage() 

    useEffect(() => {
        const onScroll = () => {
            setScroll(window.scrollY > 50)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])


    const scrollToSection = (id) => {
        setIsOpen(false)
        
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className={`${scroll ? "header-solid" : "header-transparent"} ${isOpen ? "menu-open" : ""}`}>
            <div className='name'>Gregory Adenor</div>
            
            <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div className={`header-right ${isOpen ? "open" : ""}`}>
                <nav className='nav-container'>
                    <ul>
                        <li onClick={() => scrollToSection('home')}>{language === 'fr' ? 'Accueil' : 'Home'}</li>
                        <li onClick={() => scrollToSection('skills')}>Skills</li>
                        <li onClick={() => scrollToSection('projects')}>{language === 'fr' ? 'Projets' : 'Projects'}</li>
                        <li onClick={() => scrollToSection('contact')}>Contact</li>                       
                    </ul>
                </nav>

                <button 
                    className="lang-switcher" 
                    onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                    title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                >
                    {language === 'fr' ? (
                        <>
                            <span className="flag-icon">🇫🇷</span>
                            <span className="lang-text">FR</span>
                        </>
                    ) : (
                        <>
                            <span className="flag-icon">🇬🇧</span>
                            <span className="lang-text">EN</span>
                        </>
                    )}
                </button>
            </div>
        </header>
    )
}