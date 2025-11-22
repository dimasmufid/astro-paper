export function getReadingTime(text: string, wordsPerMinute = 225): number {
  const words = text ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
