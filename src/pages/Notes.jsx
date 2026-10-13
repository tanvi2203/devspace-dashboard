import { useState, useEffect } from "react";
import { loadFromStorage, saveToStorage } from "../storage";

function Notes() {
    const [notes, setNotes] = useState(() => loadFromStorage("devspace-notes", []));
    const [text, setText] = useState("");

    useEffect(() => {
        saveToStorage("devspace-notes", notes);
    }, [notes]);

    function addNote(e) {
        e.preventDefault();

        if (text.trim() === "") {
            return;
        }

        const newNote = {
            id: Date.now(),
            text: text.trim(),
            date: new Date().toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
            }),
        };

        setNotes([newNote, ...notes]);
        setText("");
    }

    function deleteNote(id) {
        setNotes(notes.filter((note) => note.id !== id));
    }

    return (
        <section className="panel">
            <div className="section-title">
                <div>
                    <p>QUICK NOTE</p>
                    <h2>Development Notes</h2>
                </div>

                <span>{notes.length} notes</span>
            </div>

            <form className="note-form" onSubmit={addNote}>
                <textarea
                    placeholder="Write what you learned or what to fix next"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    aria-label="Note text"
                />

                <button type="submit" className="button">
                    Add note
                </button>
            </form>

            {notes.length === 0 ? (
                <p className="empty-text">No notes yet.</p>
            ) : (
                notes.map((note) => (
                    <div className="note" key={note.id}>
                        <p>{note.text}</p>

                        <div className="note-footer">
                            <span>{note.date}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteNote(note.id)}
                                aria-label="Delete note"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </section>
    );
}

export default Notes;
