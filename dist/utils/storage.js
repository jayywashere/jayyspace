export function set(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch (err) {
        console.error(`Storage save failure for key "${key}":`, err);
    }
}
export function get(key) {
    try {
        const item = localStorage.getItem(key);
        if (item == null)
            return null;
        return JSON.parse(item);
    }
    catch (err) {
        console.error(`Storage parsing failed for key "${key}". Error details: `, err);
        return null;
    }
}
export function getOr(key, fallback) {
    const data = get(key);
    return data == null ? fallback : data;
}
export function remove(key) {
    localStorage.removeItem(key);
}
//# sourceMappingURL=storage.js.map