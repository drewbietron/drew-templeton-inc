import { GetStaticPaths, GetStaticProps } from "next";

import Page from "../../components/page";
import {
  services,
  serviceKeys,
  ServiceKey,
} from "../../lib/data/pages/services";
import { Page as PageType } from "../../lib/data/pages/types";
interface Props {
  service: PageType;
}

export default function Services(props: Props) {
  return <Page {...props.service} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = serviceKeys.map((service) => ({
    params: { service },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const serviceParam = ctx.params?.service as ServiceKey;
  if (!serviceParam || !serviceKeys.includes(serviceParam)) {
    return {
      notFound: true,
    };
  }

  const service = services[`${serviceParam}`];

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: { service },
    revalidate: 10,
  };
};
