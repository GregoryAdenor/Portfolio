import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import "./project-tabs.css";

export function ProjectTabs({ project }) {
    const [activeTab, setActiveTab] = useState("overview");
    const { language } = useLanguage();

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                <button 
                    className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                    onClick={() => setActiveTab("overview")}
                >
                    Description
                </button>
                <button 
                    className={`tab-btn ${activeTab === "challenges" ? "active" : ""}`}
                    onClick={() => setActiveTab("challenges")}
                >
                    {language === "fr" ? "Défis Techniques" : "Technical Challenges"}
                </button>
                <button 
                    className={`tab-btn ${activeTab === "features" ? "active" : ""}`}
                    onClick={() => setActiveTab("features")}
                >
                    {language === "fr" ? "Fonctionnalités" : "Features"}
                </button>
            </div>

            <div className="tabs-content">
                {activeTab === "overview" && (
                    <div className="tab-pane">
                        <p className="tab-description">{project.description}</p>
                        <h5>{language === "fr" ? "Technologies utilisées :" : "Technologies Used:"}</h5>
                        <div className="modal-tags">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "challenges" && (
                    <div className="tab-pane">
                        <ul className="challenges-list">
                            {project.technical_challenges.map((challenge, index) => (
                                <li key={index}>
                                    <span className="cyber-bullet">&gt;</span> {challenge}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === "features" && (
                    <div className="tab-pane">
                        <ul className="features-list">
                            {project.features.map((feature, index) => (
                                <li key={index}>
                                    <span className="cyber-bullet">&gt;</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}