import { getServerSideSitemapLegacy, ISitemapField } from "next-sitemap";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serviceKeys } from "../lib/data/pages/services";
import { workSlugs } from "../lib/data/pages/work";

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  function url(path: string) {
    if (
      !process.env.NEXT_PUBLIC_WEB_URL &&
      process.env.NODE_ENV === "production"
    ) {
      throw new Error("NEXT_PUBLIC_WEB_URL is not set");
    }
    return `${process.env.NEXT_PUBLIC_WEB_URL || ""}/${path}`;
  }

  function serviceUrls(): ISitemapField[] {
    return serviceKeys.map((service) => {
      return {
        loc: `${url(`services/${service}`)}`,
        lastmod: new Date().toISOString(),
        changefreq: "always",
      };
    });
  }

  function workUrls(): ISitemapField[] {
    return workSlugs.map((workSlug) => {
      return {
        loc: `${url(`work/${workSlug}`)}`,
        lastmod: new Date().toISOString(),
        changefreq: "always",
      };
    });
  }

  const fields: ISitemapField[] = [
    {
      loc: process.env.NEXT_PUBLIC_WEB_URL || "",
      lastmod: new Date().toISOString(),
      changefreq: "always",
    },
    {
      loc: url("about"),
      lastmod: new Date().toISOString(),
      changefreq: "always",
    },
    {
      loc: url("contact"),
      lastmod: new Date().toISOString(),
      changefreq: "always",
    },
    {
      loc: url("services"),
      lastmod: new Date().toISOString(),
      changefreq: "always",
    },
    ...serviceUrls(),
    {
      loc: url("work"),
      lastmod: new Date().toISOString(),
      changefreq: "always",
    },
    ...workUrls(),
  ];

  return getServerSideSitemapLegacy(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
