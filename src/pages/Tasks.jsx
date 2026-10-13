import { useState } from "react";
import TaskItem from "../components/TaskItem";
import { tagOptions } from "../data/tasks";

function Tasks({ tasks, addTask, toggleTask, deleteTask }) {
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("planning");
    const [filter, setFilter] = useState("all");

    function handleSubmit(e) {
        e.preventDefault();

        // don't add empty tasks
        if (title.trim() === "") {
            return;
        }

        addTask(title.trim(), tag);
        setTitle("");
    }

    let visibleTasks = tasks;

    if (filter === "pending") {
        visibleTasks = tasks.filter((task) => !task.done);
    } else if (filter === "done") {
        visibleTasks = tasks.filter((task) => task.done);
    }

    const pendingCount = tasks.filter((task) => !task.done).length;

    return (
        <section className="panel">
            <div className="section-title">
                <div>
                    <p>DAILY WORK</p>
                    <h2>All Tasks</h2>
                </div>

                <span>{pendingCount} pending</span>
            </div>

            <form className="task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="What do you need to do?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    aria-label="Task title"
                />

                <select value={tag} onChange={(e) => setTag(e.target.value)} aria-label="Task tag">
                    {tagOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <button type="submit" className="button">
                    Add task
                </button>
            </form>

            <div className="filters">
                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>
                <button
                    className={filter === "pending" ? "active" : ""}
                    onClick={() => setFilter("pending")}
                >
                    Pending
                </button>
                <button
                    className={filter === "done" ? "active" : ""}
                    onClick={() => setFilter("done")}
                >
                    Done
                </button>
            </div>

            {visibleTasks.length === 0 ? (
                <p className="empty-text">No tasks here yet.</p>
            ) : (
                visibleTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                    />
                ))
            )}
        </section>
    );
}

export default Tasks;
