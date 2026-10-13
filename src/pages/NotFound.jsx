import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="panel">
            <div className="section-title">
                <div>
                    <p>404</p>
                    <h2>Page not found</h2>
                </div>
            </div>

            <p className="empty-text">
                This page does not exist. <Link to="/">Go back to the dashboard</Link>.
            </p>
        </section>
    );
}

export default NotFound;
