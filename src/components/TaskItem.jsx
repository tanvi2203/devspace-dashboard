import { tagOptions } from "../data/tasks";

function TaskItem({ task, onToggle, onDelete }) {
    const tag = tagOptions.find((t) => t.value === task.tag);

    return (
        <div className={task.done ? "task done" : "task"}>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => onToggle(task.id)}
                aria-label={"Mark " + task.title + " as done"}
            />

            <div>
                <h3>{task.title}</h3>
                {task.details && <p>{task.details}</p>}
            </div>

            {tag && <span className={"tag tag-" + tag.value}>{tag.label}</span>}

            {onDelete && (
                <button
                    className="delete-button"
                    onClick={() => onDelete(task.id)}
                    aria-label={"Delete " + task.title}
                >
                    Delete
                </button>
            )}
        </div>
    );
}

export default TaskItem;
