import { skills } from "../data/skills";

function Skills() {
    return (
        <section className="skills">
            <div className="section-title">
                <div>
                    <p>TECH STACK</p>
                    <h2>My Skills</h2>
                </div>
            </div>

            <div className="skills-container">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <div className="skill-name">
                            <h3>{skill.name}</h3>
                        </div>

                        <p className="used-label">Used in</p>

                        <div className="used-in">
                            {skill.usedIn.map((project) => (
                                <span key={project}>{project}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
