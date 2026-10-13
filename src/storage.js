// small helpers so the data stays after refreshing the page

export function loadFromStorage(key, fallback) {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch (error) {
        return fallback;
    }
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
