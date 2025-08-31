export const storage = {
  get<T>(key: string, fallback: T) {
    if (typeof window === "undefined") return fallback;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },
  set<T>(key: string, value: T) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};
