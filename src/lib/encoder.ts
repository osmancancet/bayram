export interface TebrikData {
  name: string;
  message?: string;
}

function toUrlSafe(b64: string): string {
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromUrlSafe(urlSafe: string): string {
  let b64 = urlSafe.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) b64 += "=";
  return b64;
}

export function encode(data: TebrikData): string {
  const json = JSON.stringify(data);
  if (typeof window !== "undefined") {
    return toUrlSafe(btoa(unescape(encodeURIComponent(json))));
  }
  return toUrlSafe(Buffer.from(json, "utf-8").toString("base64"));
}

export function decode(hash: string): TebrikData {
  try {
    const b64 = fromUrlSafe(hash);
    let json: string;
    if (typeof window !== "undefined") {
      json = decodeURIComponent(escape(atob(b64)));
    } else {
      json = Buffer.from(b64, "base64").toString("utf-8");
    }
    const parsed = JSON.parse(json) as TebrikData;
    if (!parsed.name || typeof parsed.name !== "string") {
      return { name: "" };
    }
    return parsed;
  } catch {
    return { name: "" };
  }
}
