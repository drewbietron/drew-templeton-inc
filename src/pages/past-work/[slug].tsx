import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import Seo from "../../components/seo";
import { rich } from "../../components/ui/rich-text";
import {
  getProject,
  Project,
  PROJECT_SLUGS,
} from "../../lib/content/past-work";
import { articleSchema, breadcrumbSchema } from "../../lib/structured-data";
import styles from "./project.module.scss";

interface Props {
  slug: string;
}

export default function ProjectPage({ slug }: Props) {
  // Content lives in a module (with static image imports) rather than in
  // props so the page JSON stays tiny; the slug is all we need to look it up.
  const project = getProject(slug) as Project;

  return (
    <>
      <Seo
        title={project.metaTitle}
        description={project.description}
        path={`/past-work/${project.slug}`}
        type="article"
        image={`/og/${project.slug}.png`}
        imageAlt={`${project.name}: past work by Drew Templeton`}
        publishedTime={project.datePublished}
        jsonLd={[
          articleSchema({
            headline: project.metaTitle,
            description: project.description,
            path: `/past-work/${project.slug}`,
            image: `/og/${project.slug}.png`,
            datePublished: project.datePublished,
            about: project.name,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Past Work", path: "/past-work" },
            { name: project.name, path: `/past-work/${project.slug}` },
          ]),
        ]}
      />

      <main id="main" className="container">
        <header
          className={classNames(
            styles.header,
            !project.masonry && styles.headerRule
          )}
        >
          <Link href="/past-work" className="link-mono">
            ← cd ../past-work
          </Link>
          <h1 className="h-page">{project.name}</h1>
          <p className={classNames("lede", styles.lede)}>{rich(project.intro)}</p>
          <ul className={styles.chips} aria-label="At a glance">
            {project.chips.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>
        </header>

        <article className={styles.article}>
          {project.lead ? (
            <div className="img-grid img-grid--wide">
              {project.lead.map((p, i) => (
                <Image
                  key={p.src.src}
                  src={p.src}
                  alt={p.alt}
                  sizes="(max-width: 760px) 100vw, 50vw"
                  priority={i === 0}
                  placeholder="blur"
                />
              ))}
            </div>
          ) : null}

          <div className={classNames("prose", styles.prose)}>
            {project.sections.map((s) => (
              <section key={s.heading} className={styles.section}>
                <h2 className="h-sub">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{rich(p)}</p>
                ))}
              </section>
            ))}
          </div>

          {project.gallery ? (
            <div className="img-grid">
              {project.gallery.map((p) => (
                <Image
                  key={p.src.src}
                  src={p.src}
                  alt={p.alt}
                  sizes="(max-width: 760px) 100vw, 33vw"
                  placeholder="blur"
                />
              ))}
            </div>
          ) : null}
        </article>

        {project.masonry ? (
          <section className={styles.masonry} aria-label={`${project.name} photo gallery`}>
            {project.masonry.map((p, i) => (
              <Image
                key={p.src.src}
                src={p.src}
                alt={p.alt}
                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                priority={i < 2}
                placeholder="blur"
              />
            ))}
          </section>
        ) : null}

        <nav className={styles.next} aria-label="Next project">
          <Link href={`/past-work/${project.next.slug}`}>{project.next.label}</Link>
        </nav>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: PROJECT_SLUGS.map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = (ctx) => {
  const slug = String(ctx.params?.slug || "");
  if (!getProject(slug)) return { notFound: true };
  return { props: { slug } };
};
