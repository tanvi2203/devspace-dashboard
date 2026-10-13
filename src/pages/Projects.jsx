import ProjectCard from "../components/ProjectCard";

function Projects({ projects, changeProgress }) {
    return (
        <section className="projects">
            <div className="section-title">
                <div>
                    <p>MY WORK</p>
                    <h2>Current Projects</h2>
                </div>
            </div>

            <div className="project-container">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onProgressChange={changeProgress}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
