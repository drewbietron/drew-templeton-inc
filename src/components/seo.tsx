import Head from "next/head";
import {
  absoluteUrl,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_TITLE_SUFFIX,
  TWITTER_HANDLE,
} from "../lib/site";

export interface SeoProps {
  /** Page title without the site suffix. Pass `bare` to skip the suffix. */
  title: string;
  bare?: boolean;
  description?: string;
  /** Path of this page, e.g. "/about". Used for canonical + og:url. */
  path: string;
  /** Absolute or root-relative OG image. Defaults to the site card. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  /** One or more JSON-LD objects. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  publishedTime?: string;
  modifiedTime?: string;
}

export default function Seo({
  title,
  bare,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${SITE_NAME}: I make companies AI native`,
  type = "website",
  noindex,
  jsonLd,
  publishedTime,
  modifiedTime,
}: SeoProps) {
  const fullTitle = bare ? title : `${title}${SITE_TITLE_SUFFIX}`;
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      {type === "article" && publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}
      {type === "article" && modifiedTime ? (
        <meta property="article:modified_time" content={modifiedTime} />
      ) : null}
      {type === "profile" ? (
        <>
          <meta property="profile:first_name" content="Drew" />
          <meta property="profile:last_name" content="Templeton" />
        </>
      ) : null}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      {TWITTER_HANDLE ? (
        <meta name="twitter:site" content={TWITTER_HANDLE} />
      ) : null}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {ld.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON-LD is inert data for crawlers; escape "<" to be safe inside HTML.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(obj).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </Head>
  );
}
