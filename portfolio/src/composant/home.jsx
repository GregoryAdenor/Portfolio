import "./home.css"
import data from "../data.json"
import { Canvas }    from './canva'
import { Title }     from "./title"
import { useState }  from "react"
import { useEffect } from "react"
import { useLanguage } from "../context/languageContext"

export function Home(){

    const [colorsIndex, setColorIndex] = useState(0)
    const { language } = useLanguage()
    
    const colors      = ["#b18aff", "#9f7cff", "#7e6eff", "#5f5eff", "#3399ff"]
    const description = data.description[language]

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prev) => (prev + 1) % colors.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])


    return(
        <>
        <div id="home" className="home-container">
            <Canvas/>
            <div className="text-container">
                <div className="first">Hey, I'm <span className="name-home" style={{ color: colors[colorsIndex], transition: "color 1.5s ease-in-out"}}>Gregory</span></div>
                <div className="second"><Title/></div>
                <div className="third">{description}</div>
            </div>      
        </div>

        </>
    )
}