# DevSpace - Developer Productivity Dashboard

DevSpace is a personal dashboard to keep track of tasks, projects, skills and notes. It also shows your latest GitHub repositories, loaded live from the GitHub API.

## Features

- Add, tick off, filter and delete tasks
- Dashboard numbers (completed tasks, pending tasks, active projects) are worked out from the real data
- Move a slider to update the progress of each project
- Skills page that shows which project each skill was used in
- GitHub page that loads repositories live from the GitHub API, with loading, error and empty states
- Notes page to write and delete quick notes
- Tasks, projects and notes are saved in the browser, so they are still there after a refresh
- Separate pages with React Router
- Responsive layout with a mobile menu

## Technologies Used

- React 18
- React Router
- Vite
- CSS
- GitHub REST API

## Run it on your computer

You need Node.js 20.19 or newer (or 22.12 or newer).

```
npm install
npm run dev
```

Then open the link that Vite shows in the terminal.

To make a production build:

```
npm run build
```

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel. It detects Vite on its own (build command `npm run build`, output folder `dist`).
3. `vercel.json` makes sure pages like `/tasks` still open after a refresh.

## Project structure

```
src/
  components/   Sidebar, Header, TaskItem, ProjectCard
  pages/        Dashboard, Tasks, Projects, Skills, GitHub, Notes, NotFound
  data/         starting data for tasks, projects and skills
  storage.js    small helpers for localStorage
  App.jsx       main state (tasks, projects) and routes
  style.css     all the styling
```

## Notes

- Data is stored in the browser's localStorage, so it is separate on each device and browser.
- The GitHub page calls the API without a token, and GitHub limits how many requests that allows. If the limit is reached, the page shows a message.
- The default GitHub username is set in `src/pages/GitHub.jsx`.

## Author

Tanvi
