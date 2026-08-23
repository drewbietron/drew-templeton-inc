/**
 * Site-wide constants. Anything that shows up in more than one place
 * (meta tags, structured data, footer, llms.txt) lives here.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_WEB_URL || "https://www.drewtempleton.com"
).replace(/\/$/, "");

export const SITE_NAME = "Drew Templeton";
export const SITE_TITLE_SUFFIX = " · Drew Templeton";
export const LEGAL_NAME = "Drew Templeton, Inc.";
export const LOCATION = "St. Charles, IL";
export const EMAIL = "drew@drewtempleton.com";
export const PHONE = "314.494.0869";
export const TWITTER_HANDLE: string | undefined = undefined;

export const DEFAULT_DESCRIPTION =
  "I make companies AI native — including my own. Product leader and full-stack engineer: I embed inside orgs like Filevine and Gusto, ship the agents myself, and run my own businesses on Randal, the agent platform I built.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.png`;

export const LINKS = {
  randal: "https://randal.bot",
  hassion: "https://hassion.studio",
  pbvault: "https://www.pbvault.com/",
  gusto: "https://gusto.com/",
  filevine: "https://www.filevine.com/",
  pangobooks: "https://pangobooks.com/",
  reverb: "https://reverb.com/",
  studiothree: "https://studiothree.com/",
  blitzlake: "https://blitzlake.com/",
};

/** Absolute URL helper for canonical/og tags. */
export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
