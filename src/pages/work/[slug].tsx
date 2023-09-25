import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Page from "../../components/page";
import { workPages } from "../../lib/data/pages/work";
import type { Page as PageType } from "../../lib/data/pages/types";

interface Props extends PageType {}

export default function WorkShow(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <Page {...props} />;
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = workPages.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = (ctx) => {
  const project = workPages.find((w) => w.slug === ctx.params?.["slug"]);

  if (!ctx.params?.["slug"] || !project) {
    return {
      notFound: true,
    };
  }

  return { props: project };
};
