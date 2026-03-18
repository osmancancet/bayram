const MAX_NAME_LENGTH = 50;
const MAX_MSG_LENGTH = 200;

/**
 * Strip HTML tags and limit length for user-provided name parameter.
 * Returns "Misafir" if the result is empty after sanitization.
 */
export function sanitizeName(raw: string): string {
  const stripped = raw
    .replace(/<[^>]*>/g, "") // remove HTML tags
    .replace(/[^\p{L}\p{N}\s.\-']/gu, "") // keep letters, numbers, spaces, dots, hyphens, apostrophes
    .trim()
    .slice(0, MAX_NAME_LENGTH);

  return stripped || "Misafir";
}

/**
 * Strip HTML tags and limit length for user-provided message parameter.
 */
export function sanitizeMessage(raw: string): string {
  return raw
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, MAX_MSG_LENGTH);
}
