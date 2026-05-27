import { useEffect } from "react";
import { ProjectTabs } from "./project-tabs";
import { useLanguage } from "../context/languageContext";
import "./project-modal.css";

console.log("PROJECT TABS LOADED");

export function ProjectModal({ project, onClose }) {

    const { language } = useLanguage();
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
                
                <button className="close-button" onClick={onClose}>&times;</button>

                <div className="modal-grid">
                    <div className="modal-left">
                        <img src={project.image} alt={project.title} className="modal-image" />
                        <div className="modal-meta">
                            <span className="modal-project-type">{project.type}</span>
                            <h2>{project.title}</h2>
                            <p className="modal-context"><strong>{language === "fr" ? "Contexte:" : "Context:"}</strong> {project.context}</p>
                            <div className="modal-role-box">
                                <h5>{language === "fr" ? "Mon Rôle" : "My Role"}</h5>
                                <p>{project.role}</p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-right">
                        <ProjectTabs project={project} />
                    </div>
                </div>

            </div>
        </div>
    );
}