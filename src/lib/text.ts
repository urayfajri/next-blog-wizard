export function truncateByWords(text: string, maxWords: number): string {
  if (!text) return text;
  const words = text.trim().split(/\s+/); // split by any whitespace, avoids empty items
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

/**
 * Truncate based on character count (includes spaces).
 * Tries to avoid cutting mid-word by trimming back to the last space before the limit.
 * If the first word itself is longer than maxChars, it will cut mid-word.
 */
export function truncateByChars(text: string, maxChars: number): string {
  if (!text) return text;
  if (text.length <= maxChars) return text;

  // cut to maxChars first
  const slice = text.slice(0, maxChars);

  // find last space to avoid breaking a word (preferable)
  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace > 0) {
    return slice.slice(0, lastSpace) + "...";
  }
  // if no space found (single long word), fallback to hard cut
  return slice + "...";
}
