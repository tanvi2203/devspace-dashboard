import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import GitHub from "./pages/GitHub";
import Notes from "./pages/Notes";
import NotFound from "./pages/NotFound";
import { defaultTasks } from "./data/tasks";
import { defaultProjects } from "./data/projects";
import { loadFromStorage, saveToStorage } from "./storage";

const pageText = {
    "/": {
        title: "Your Developer Workspace",
        text: "Keep track of your projects, tasks and learning progress.",
    },
    "/tasks": {
        title: "My Tasks",
        text: "Add what you need to do and tick it off when it is done.",
    },
    "/projects": {
        title: "Projects",
        text: "Move the slider to update how far each project has come.",
    },
    "/skills": {
        title: "My Skills",
        text: "The skills I use and the projects I used them in.",
    },
    "/github": {
        title: "GitHub Repos",
        text: "Latest repositories, loaded live from the GitHub API.",
    },
    "/notes": {
        title: "Development Notes",
        text: "Quick notes about what I am learning.",
    },
};

function App() {
    const [tasks, setTasks] = useState(() => loadFromStorage("devspace-tasks", defaultTasks));
    const [projects, setProjects] = useState(() => loadFromStorage("devspace-projects", defaultProjects));
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
    const page = pageText[location.pathname] || { title: "Page not found", text: "" };

    // save to localStorage every time the data changes
    useEffect(() => {
        saveToStorage("devspace-tasks", tasks);
    }, [tasks]);

    useEffect(() => {
        saveToStorage("devspace-projects", projects);
    }, [projects]);

    useEffect(() => {
        document.title = "DevSpace | " + page.title;
    }, [page.title]);

    function addTask(title, tag) {
        const newTask = {
            id: Date.now(),
            title: title,
            details: "",
            tag: tag,
            done: false,
        };
        setTasks([newTask, ...tasks]);
    }

    function toggleTask(id) {
        const updated = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        setTasks(updated);
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function changeProgress(id, value) {
        const updated = projects.map((project) => {
            if (project.id === id) {
                return { ...project, progress: Number(value) };
            }
            return project;
        });
        setProjects(updated);
    }

    return (
        <>
            <Sidebar open={menuOpen} closeMenu={() => setMenuOpen(false)} />

            <main className="main-content">
                <Header
                    title={page.title}
                    text={page.text}
                    onMenuClick={() => setMenuOpen(!menuOpen)}
                />

                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard tasks={tasks} projects={projects} toggleTask={toggleTask} />}
                    />
                    <Route
                        path="/tasks"
                        element={
                            <Tasks
                                tasks={tasks}
                                addTask={addTask}
                                toggleTask={toggleTask}
                                deleteTask={deleteTask}
                            />
                        }
                    />
                    <Route
                        path="/projects"
                        element={<Projects projects={projects} changeProgress={changeProgress} />}
                    />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/github" element={<GitHub />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer>
                    <p>DevSpace | Frontend Development Project</p>
                </footer>
            </main>
        </>
    );
}

export default App;
