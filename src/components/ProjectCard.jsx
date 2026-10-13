function ProjectCard({ project, onProgressChange }) {
    return (
        <div className="project-card">
            <p className="project-type">{project.type}</p>

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <div className="progress-text">
                <span>Progress</span>
                <span>{project.progress}%</span>
            </div>

            <div className="progress-bar">
                <div className="progress" style={{ width: project.progress + "%" }}></div>
            </div>

            {onProgressChange && (
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={project.progress}
                    onChange={(e) => onProgressChange(project.id, e.target.value)}
                    aria-label={"Progress of " + project.name}
                />
            )}
        </div>
    );
}

export default ProjectCard;
