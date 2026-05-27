import "./project-card.css";

export function ProjectCard({ project, onOpen }) {
    return (
        <div className="bento-card" onClick={onOpen}>
            <div 
                className="card-bg" 
                style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="card-overlay" />

            <div className="card-content">
                <span className="project-type">{project.type}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                
                <div className="project-tags">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && <span className="tech-tag-more">+</span>}
                </div>
            </div>
        </div>
    );
}