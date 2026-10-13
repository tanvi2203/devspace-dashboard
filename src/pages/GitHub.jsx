import { useState, useEffect } from "react";

function GitHub() {
    const [username, setUsername] = useState("tanvi2203");
    const [input, setInput] = useState("tanvi2203");
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;

        setLoading(true);
        setError("");

        fetch("https://api.github.com/users/" + encodeURIComponent(username) + "/repos?sort=updated&per_page=12")
            .then((res) => {
                if (res.status === 404) {
                    throw new Error("User not found. Check the username and try again.");
                }
                if (res.status === 403) {
                    throw new Error("GitHub rate limit reached. Please try again after some time.");
                }
                if (!res.ok) {
                    throw new Error("Something went wrong while loading the repos.");
                }
                return res.json();
            })
            .then((data) => {
                if (!cancelled) {
                    setRepos(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (!cancelled) {
                    setRepos([]);
                    setLoading(false);
                    if (err.message === "Failed to fetch") {
                        setError("Could not reach GitHub. Check your internet connection.");
                    } else {
                        setError(err.message);
                    }
                }
            });

        // ignore the result if the username changed before the request finished
        return () => {
            cancelled = true;
        };
    }, [username]);

    function handleSubmit(e) {
        e.preventDefault();

        if (input.trim() === "") {
            return;
        }

        setUsername(input.trim());
    }

    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    }

    return (
        <section className="panel">
            <div className="section-title">
                <div>
                    <p>LIVE DATA</p>
                    <h2>GitHub Repos</h2>
                </div>

                {!loading && !error && <span>{repos.length} repos</span>}
            </div>

            <form className="repo-search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    aria-label="GitHub username"
                />

                <button type="submit" className="button">
                    Load repos
                </button>
            </form>

            {loading && <p className="empty-text">Loading repos...</p>}

            {error && <p className="error-box">{error}</p>}

            {!loading && !error && repos.length === 0 && (
                <p className="empty-text">This user has no public repos yet.</p>
            )}

            <div className="repo-grid">
                {repos.map((repo) => (
                    <div className="repo-card" key={repo.id}>
                        <h3>
                            <a href={repo.html_url} target="_blank" rel="noreferrer">
                                {repo.name}
                            </a>
                        </h3>

                        <p>{repo.description || "No description added."}</p>

                        <div className="repo-meta">
                            <span>{repo.language || "No language"}</span>
                            <span>{repo.stargazers_count} stars</span>
                            <span>Updated {formatDate(repo.updated_at)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GitHub;
