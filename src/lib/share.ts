export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  if (typeof navigator === "undefined") {
    return `https://api.whatsapp.com/send?text=${encoded}`;
  }
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return isMobile
    ? `whatsapp://send?text=${encoded}`
    : `https://api.whatsapp.com/send?text=${encoded}`;
}

export function openWhatsApp(message: string): void {
  const url = getWhatsAppUrl(message);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = url;
  } else {
    window.open(url, "_blank");
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  }
}
