import "server-only";

function requiredSiteUrl(value: string | undefined): string {
  try {
    if (!value) throw new Error("missing");
    const parsed = new URL(value);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new Error("protocol");
    return parsed.toString().replace(/\/$/, "");
  } catch {
    throw new Error("[framecoded] SITE_URL is required and must be an absolute http(s) URL.");
  }
}

export const SITE_URL = requiredSiteUrl(process.env.SITE_URL);

export function siteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) path = new URL(path).pathname;
  return new URL(path.replace(/^\/+/, ""), SITE_URL + "/").toString();
}

export function siteAssetUrl(value: string): string {
  if (!value || /^(?:data:|blob:)/i.test(value)) return value;
  try {
    return new URL(value).toString();
  } catch {
    return siteUrl(value);
  }
}
