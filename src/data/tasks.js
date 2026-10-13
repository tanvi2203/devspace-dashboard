export const tagOptions = [
    { value: "planning", label: "Planning" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "layout", label: "Layout" },
];

export const defaultTasks = [
    {
        id: 1,
        title: "Plan the DevSpace layout",
        details: "Decide which sections should be included in the dashboard.",
        tag: "planning",
        done: false,
    },
    {
        id: 2,
        title: "Create the sidebar",
        details: "Add navigation links for different parts of the dashboard.",
        tag: "html",
        done: false,
    },
    {
        id: 3,
        title: "Build dashboard cards",
        details: "Create cards for statistics and project information.",
        tag: "layout",
        done: false,
    },
    {
        id: 4,
        title: "Convert DevSpace to React",
        details: "Move the dashboard into components and add routing.",
        tag: "react",
        done: false,
    },
];
