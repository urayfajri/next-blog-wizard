export const CATEGORIES = [
  { value: "Tech", label: "Tech" },
  { value: "Lifestyle", label: "Lifestyle" },
  { value: "Business", label: "Business" },
];

export function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function formatDate(date: string | number | Date): string {
  const d = new Date(date);
  // Pastikan locale fix (misalnya 'en-US') biar SSR & client sama
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

export function validateStep(step: number, data: any) {
  const errors: Record<string, string> = {};
  if (step === 0) {
    if (!data.title?.trim()) errors.title = "Title required";
    if (!data.author?.trim()) errors.author = "Author required";
  }
  if (step === 1) {
    if (!data.summary?.trim()) errors.summary = "Summary required";
    if (!data.category?.trim()) errors.category = "Category required";
  }
  if (step === 2) {
    if (!data.content?.trim()) errors.content = "Content required";
  }
  return errors;
}
