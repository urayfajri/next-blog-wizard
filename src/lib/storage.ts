export const storage = {
  get(key, fallback) {
    if (typeof window === 'undefined') return fallback
    try { const raw = window.localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback } catch { return fallback }
  },
  set(key, value) {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}
