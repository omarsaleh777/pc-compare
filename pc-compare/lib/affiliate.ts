const AFFILIATE_TAG = process.env.AFFILIATE_TAG ?? "yourstore-20";

export function generateAffiliateLink(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("tag", AFFILIATE_TAG);
    parsed.searchParams.delete("linkCode");
    parsed.searchParams.delete("linkId");
    return parsed.toString();
  } catch {
    return `${url}${url.includes("?") ? "&" : "?"}tag=${AFFILIATE_TAG}`;
  }
}
