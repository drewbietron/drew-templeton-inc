import { HeaderProps } from "../../../components/page-components/header";
import { RowProps } from "../../../components/page-components/row";
import { MetaProps } from "../../../components/meta";
import { ContentProps } from "../../../components/page-components/content";
import { GalleryPageComponentProps } from "../../../components/page-components/gallery";

export interface BasePageComponent {
  type: "row" | "header" | "content" | "custom" | "gallery";
}

interface RowPageComponent extends BasePageComponent {
  type: "row";
  data: RowProps;
}

interface HeaderPageComponent extends BasePageComponent {
  type: "header";
  data: HeaderProps;
}

interface ContentPageComponent extends BasePageComponent {
  type: "content";
  data: ContentProps;
}

interface GalleryPageComponent extends BasePageComponent {
  type: "gallery";
  data: GalleryPageComponentProps;
}

interface CustomPageComponent extends BasePageComponent {
  type: "custom";
  data: JSX.Element | JSX.Element[];
}

export type PageComponent =
  | ContentPageComponent
  | CustomPageComponent
  | GalleryPageComponent
  | HeaderPageComponent
  | RowPageComponent;

export interface Page {
  slug?: string;
  meta: MetaProps;
  components?: PageComponent[];
}
