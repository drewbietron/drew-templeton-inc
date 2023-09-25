import Head from "next/head";

export interface MetaProps {
  title: string;
  description: string;
}

export default function Meta(props: MetaProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link
        href="favicon-light.png"
        rel="icon"
        media="(prefers-color-scheme: light)"
      />
      <link
        href="favicon-dark.png"
        rel="icon"
        media="(prefers-color-scheme: dark)"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
