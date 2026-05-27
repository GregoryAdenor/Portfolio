import { useState } from "react";
import data from "../data.json";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { useLanguage } from "../context/languageContext";
import "./projects.css";

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const { language } = useLanguage();
    const projects = data.projects[language];
    return (
        <section id="projects" className="projects-page">
            <div className="projects-container">
                <h2 className="projects-title">{language === "en" ? "Project Archive" : "Mes Projets"}</h2>
                
                <div className="bento-grid">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            onOpen={() => setSelectedProject(project)} 
                        />
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
}