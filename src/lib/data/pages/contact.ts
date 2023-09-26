import { Page } from "./types";

const CONTACT: (custom: any) => Page = (custom) => ({
  meta: {
    title: "Drew Templeton | Contact Me",
    description: "Drop me a line and I'll get back to you as soon as possible.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Connect</br>With Me",
      },
    },
    custom,
  ],
});

export default CONTACT;
