import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";
import ProjectCard from "../components/ProjectCard";

function Dashboard({ tasks, projects, toggleTask }) {
    const completed = tasks.filter((task) => task.done).length;
    const pending = tasks.filter((task) => !task.done);
    const activeProjects = projects.filter((project) => project.progress < 100).length;

    // only show the first 3 pending tasks here
    const todaysTasks = pending.slice(0, 3);

    return (
        <>
            <section className="statistics">
                <div className="stat-card">
                    <p>Tasks Completed</p>
                    <h2>{completed}</h2>
                </div>

                <div className="stat-card">
                    <p>Pending Tasks</p>
                    <h2>{pending.length}</h2>
                </div>

                <div className="stat-card">
                    <p>Active Projects</p>
                    <h2>{activeProjects}</h2>
                </div>
            </section>

            <section className="panel">
                <div className="section-title">
                    <div>
                        <p>DAILY WORK</p>
                        <h2>Today's Tasks</h2>
                    </div>

                    <span>{pending.length} pending</span>
                </div>

                {todaysTasks.length === 0 ? (
                    <p className="empty-text">
                        Nothing pending. <Link to="/tasks">Add a task</Link> to get started.
                    </p>
                ) : (
                    todaysTasks.map((task) => (
                        <TaskItem key={task.id} task={task} onToggle={toggleTask} />
                    ))
                )}
            </section>

            <section className="projects">
                <div className="section-title">
                    <div>
                        <p>MY WORK</p>
                        <h2>Current Projects</h2>
                    </div>
                </div>

                <div className="project-container">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Dashboard;
