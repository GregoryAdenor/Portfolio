import "./skills-card.css"
import { useState }  from "react"
import { useEffect } from "react"

export function SkillsCard({tech, image}){
    console.log(image)

    return(
        <>
        <div className="scard-container">
            <img src={image} alt={tech} />
            <span>{tech}</span>
        </div>
        </>
    )
}