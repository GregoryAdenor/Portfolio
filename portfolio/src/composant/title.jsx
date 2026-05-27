import { useState, useEffect } from "react";
import data from "../data.json" 

export function Title(){
    const title = data.title

    const [index, setIndex]     = useState(0)
    const [display, setDisplay] = useState("")

    useEffect(() => {
        let char = 0
        let actuTittle = title[index]
        let timeout = []

        const affiche = () => {
            if (char <= actuTittle.length){
                setDisplay(actuTittle.slice(0, char))
                char++
                timeout.push(setTimeout(affiche, 125))
            }else{
                timeout.push(
                setTimeout(() => {
                    let char2 = actuTittle.length
                    const efface = () => {
                        if (char2 >= 0) {
                            setDisplay(actuTittle.slice(0, char2))
                            char2--
                            timeout.push(setTimeout(efface, 100))
                        }else{
                            setIndex((prev) => (prev + 1) % title.length)
                        }
                    }
                    efface()
                }, 1500))
            }
        }
        affiche()
        return () => timeout.forEach((element) => clearTimeout(element))
    }, [index])

    return <>{display}</>
}