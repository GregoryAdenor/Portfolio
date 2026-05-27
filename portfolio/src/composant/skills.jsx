import "./skills.css"
import data from "../data.json"
import { SkillsCard } from "./skills-card"
import { useLanguage } from "../context/languageContext";

export function Skills(){

    const { language } = useLanguage();
    const categories = [
        { title: language === "en" ? "Tools & DevOps" : "Outils & DevOps", list: data.skills.tools, icon: "🛠️" },
        { title: language === "en" ? "Frontend" : "Frontend", list: data.skills.frontend, icon: "💻" },
        { title: language === "en" ? "Backend" : "Backend", list: data.skills.backend, icon: "🗄️" },
        { title: language === "en" ? "Others" : "Autres", list: data.skills.others, icon: "🌐" }
    ];

    return(
        <section id="skills" className="skills-page">
            <div className="skills-container">
                <h2>{language === "en" ? "Skills Showcase" : "Mes Compétences"}</h2>
                
                <div className="dashboard-panel">
                    {categories.map((cat) => (
                        <div key={cat.title} className="tech-column">
                            <div className="column-header">
                                <span className="column-icon">{cat.icon}</span>
                                <h4>{cat.title}</h4>
                            </div>
                            <div className="skills-list">
                                {cat.list.map(element => (
                                    <SkillsCard
                                        key={element.tech}
                                        tech={element.tech}
                                        image={element.image}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}