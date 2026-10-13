import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";

function Dashboard({ tasks, toggleTask }) {
    const completed = tasks.filter((task) => task.done).length;
    const pending = tasks.filter((task) => !task.done);

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
                    <p>Total Tasks</p>
                    <h2>{tasks.length}</h2>
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

                {pending.length > 3 && (
                    <p className="empty-text">
                        Showing 3 of {pending.length} pending tasks. <Link to="/tasks">View all tasks</Link>
                    </p>
                )}
            </section>
        </>
    );
}

export default Dashboard;