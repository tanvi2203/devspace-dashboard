import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Dashboard" },
    { to: "/tasks", label: "My Tasks" },
    { to: "/skills", label: "Skills" },
    { to: "/github", label: "GitHub" },
    { to: "/notes", label: "Notes" },
];

function Sidebar({ open, closeMenu }) {
    return (
        <aside className={open ? "sidebar show-sidebar" : "sidebar"}>
            <div className="logo">
                <h2>DevSpace</h2>
                <p>Developer Dashboard</p>
            </div>

            <nav>
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.to === "/"}
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={closeMenu}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>

            <div className="user">
                <div className="user-icon">T</div>

                <div>
                    <h4>Tanvi</h4>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
