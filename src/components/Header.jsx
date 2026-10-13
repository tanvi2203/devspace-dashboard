function Header({ title, text, onMenuClick }) {
    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    return (
        <section className="header">
            <div className="mobile-header">
                <button className="menu-button" onClick={onMenuClick} aria-label="Open menu">
                    ☰
                </button>

                <div>
                    <p className="welcome">Welcome back!</p>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>

            <div className="date-badge">{today}</div>
        </section>
    );
}

export default Header;
