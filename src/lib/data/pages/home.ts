import { SERVICES_OFFERED } from "./services";
import { Page } from "./types";

const HOME: Page = {
  meta: {
    title:
      "Drew Templeton | I'm St. Charles based creator who specializes in building custom apps, websites and software for companies of all sizes",
    description:
      "I'm Drew, a full stack developer, designer and entrepreneur. I specialize in building custom apps, websites, and software tailored to your needs.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Let&apos;s</br>Build</br>Something",
        copy: "I'm Drew, a St. Charles based creator 💡, technology lover 🤓 and market enthusiast 📈.  I specialize in building custom apps, websites and software for companies of all sizes.",
        button: { text: "Connect With Me", link: { href: "/contact" } },
      },
    },
    { ...SERVICES_OFFERED },
    {
      type: "row",
      data: {
        title: "Some Past Work",
        cards: [
          {
            type: "photo",
            link: { href: "/work/paintball-vault" },
            image: {
              src: "/work/paintball-vault/DTR50644.jpg",
              alt: "Paintball Vault",
            },
            tags: ["App", "Web", "Founded"],
            title: "Paintball Vault",
            copy: "The first marketplace built for paintball",
          },
          {
            type: "photo",
            link: { href: "/work/pangobooks" },
            image: {
              src: "/work/pangobooks/DTR50658.jpg",
              alt: "Pangobooks",
            },
            tags: ["App", "Web"],
            title: "Pangobooks",
            copy: "Used book marketplace",
          },
          {
            type: "photo",
            link: { href: "/work/studio-three" },
            image: {
              src: "/work/studio-three/DT3_2469.jpg",
              alt: "Studio Three",
            },
            tags: ["Photography"],
            title: "Studio Three",
            copy: "Boutique fitness studio located in Chicago",
          },
        ],
      },
    },
    {
      type: "row",
      data: {
        title: "How I Work",
        description:
          "I make sure that the product and technology solutions I propose are unique to your project and your plan is crafted to your needs. While each project is unique, here's an example of how a project flowed with a past client.",
        cards: [
          {
            type: "text",
            title: "<span>1</span>Get To Know You",
            copy: "I&apos;ll discuss what you&apos;re looking to accomplish so that we have a clear understanding of your expections and goals with the project. I&apos;ll discuss market trends, competitors, and we can riff on how to make your project world class.",
          },
          {
            type: "text",
            title: "<span>2</span>Create A Statement Of Work",
            copy: "I&apos;ll outline the project in detail letting you know how long it will take, what solutions will needed to be executed, and how much it will cost. Leaving you with clarity on the project with no grey areas.",
          },
          {
            type: "text",
            title: "<span>3</span>Design & Prototype",
            copy: "I&apos;ll create a high-fidelity prototype of your project so that you can see and touch what the finished product will look like. I&apos;m visual and I think it helps our clients understand how the end product will look before development begins.",
          },
          {
            type: "text",
            title: "<span>4</span>Development",
            copy: "I&apos;ll get to work on putting the rubber to the road. During development you&apos;ll receive updates on the progress of your project as you will be seeing and feeling the app in a sandbox environment as progress is made.",
          },
          {
            type: "text",
            title: "<span>5</span>Launch",
            copy: "Let&apos;s get your project out into the world. I&apos;ll help you get your project into the app store, or on the web so that you can start seeing your project become a reality.",
          },
          {
            type: "text",
            title: "<span>6</span>Support",
            copy: "Now that your project is out in the world, I&apos;ll be here to help support you. Any questions you may have, or any updates you may need, I&apos;m here for you. I&apos;ll also provide analytics and insights into your project and walk you through how to use them to make your project even better.",
          },
        ],
      },
    },
  ],
};

export default HOME;
