export function set<T>(key: string, value: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error(`Storage save failure for key "${key}":`, err);
    }
}

export function get<T>(key: string): T | null {
    try {
        const item = localStorage.getItem(key);
        if (item == null) return null;

        return JSON.parse(item) as T;
    } catch (err) {
        console.error(
            `Storage parsing failed for key "${key}". Error details: `,
            err,
        );
        return null;
    }
}

export function getOr<T>(key: string, fallback: T): T {
    const data = get<T>(key);
    return data == null ? fallback : data;
}

export function remove(key: string): void {
    localStorage.removeItem(key);
}
