import { Page } from "./types";
const img = require("../../../../public/favicon-dark.png");

export type ServiceKey =
  | "apps"
  | "websites"
  | "software"
  | "photography"
  | "design"
  | "tech-partner"
  | "artificial-intelligence";
export const serviceKeys: ServiceKey[] = [
  "apps",
  "websites",
  "software",
  "photography",
  "design",
  "tech-partner",
  "artificial-intelligence",
];

export const SERVICES_OFFERED = {
  type: "row" as any,
  data: {
    title: "What I Do",
    cards: [
      {
        type: "text",
        title: "Apps",
        link: { href: "/services/apps" },
        copy: "Have an idea for an app and want to make it a reality?  I've built dozens of apps (and ❤️ doing it). Whether its a single page app for recognizing beer labels, an AI driven golf caddy or a fully fledged marketplace, chances are I&apos;ve prototyped, developed or launched it.",
      },
      {
        type: "text",
        title: "Websites",
        link: { href: "/services/websites" },
        copy: "I craft each build to the client&apos;s needs, not just re-purpose a WordPress or Shopify template. I&apos;m comfortable adding e-commerce, content management systems and much more to make your website unique to your business.",
      },
      {
        type: "text",
        title: "Software",
        link: { href: "/services/software" },
        copy: "I love building tools to help businesses be more efficient.  I am an entrepreneur that can help vet your ideas, or take a look at your current processes and give suggestions on where things can be improved.",
      },
      {
        type: "text",
        title: "Artificial Intelligence & LLM's",
        link: { href: "/services/artificial-intelligence" },
        copy: "Whether you're looking to train your own LLM using your own business logic, or you want to build an image recognition service, I can help you build and deploy your AI service.",
      },

      {
        type: "text",
        title: "Branding, Design & Photography",
        link: { href: "/services/design" },
        copy: "At the heart of every world class product, is world class design and user experience. By understanding your company and your project, I can create a brand for you that sets yourself apart.",
      },

      {
        type: "text",
        title: "MVP's & Technology Partner",
        link: { href: "/services/tech-partner" },
        copy: "I&apos;m business owners too! I&apos;ve built dozens of products and MVP&apos;s for companies since 2010. I thrive in environments where I can help you incorporate technology into your business and set you up for success.",
      },
    ],
  },
};

const SERVICES: Page = {
  meta: {
    title: "Drew Templeton | What I Do",
    description:
      "Explore our diverse range of tech services tailored for modern businesses. From custom app and software development to branding and consultancy, we deliver excellence at every turn.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "What<br />I Do",
        copy: "Here is a rundown of the services that I can offer you.  Reach out if you have a special project that you don't think fits this list and I'd love to figure it out with you.",
        button: { text: "Connect With Me", link: { href: "/contact" } },
      },
    },
    {
      ...SERVICES_OFFERED,
    },
  ],
};

export const services: { [key in ServiceKey]?: Page } = {
  apps: {
    meta: {
      title: "Drew Templeton | App Development",
      description:
        "Transform your app idea into reality with our custom development. From single-page apps to AI-driven platforms, we craft unique solutions tailored to your vision.",
    },
    components: [
      {
        type: "header",
        data: {
          title: "Let's<br />Build<br />An App",
          button: {
            text: "Connect With Me",
            link: { href: "/contact" },
          },
        },
      },
      {
        type: "row",
        data: {
          description:
            "Have a unique app idea brewing in your mind? Let's bring it to life. With a deep-seated passion for app development and a portfolio that boasts a diverse range of projects, I'm poised to transform your concept into a standout application. From the simplicity of single-page apps like beer label recognizers to the sophistication of AI-driven tools such as a digital golf caddy, or expansive marketplaces, I've been at the helm of it all.<br /><br />What truly sets my approach apart? It's not just about leveraging world-class tech like Expo and TypeScript. While these tools ensure a seamless development process and robust code, I prioritize understanding the unique business requirements of each client. This holistic approach ensures that the final product isn't just technically sound but also aligns perfectly with your business goals and vision. It's about crafting solutions that resonate on both a technological and business level.<br /><br />So, whether you're envisioning a niche tool or a game-changing platform, together we can craft an app that resonates, engages, and delivers.",
        },
      },
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
              tags: ["App"],
              title: "Paintball Vault",
              copy: "The first marketplace built for paintball",
            },

            {
              type: "photo",
              link: { href: "/work/crowler" },
              image: {
                src: "/work/crowler/DTR50666.jpg",
                alt: "Crowler",
              },
              tags: ["App"],
              title: "Crowler",
              copy: "Beer label recognition",
            },
            {
              type: "photo",
              link: { href: "/work/pangobooks" },
              image: {
                src: "/work/pangobooks/DTR50658.jpg",
                alt: "Pangobooks",
              },
              tags: ["App"],
              title: "Pangobooks",
              copy: "Used book marketplace",
            },
          ],
        },
      },
    ],
  },
  websites: {
    meta: {
      title: "Drew Templeton | Website Development",
      description:
        "Crafting bespoke websites that resonate. From informational hubs to dynamic platforms, our sites are responsive, SEO-optimized, and designed for an unparalleled user experience.",
    },
    components: [
      {
        type: "header",
        data: {
          title: "Let's<br />Build<br />A Website",
          button: {
            text: "Connect With Me",
            link: { href: "/contact" },
          },
        },
      },
      {
        type: "row",
        data: {
          description:
            "In the vast digital landscape, having a unique website is paramount. That's why I don't just re-purpose a WordPress or Shopify template. Instead, I craft each build meticulously to align with your specific needs, ensuring that your online presence truly resonates with your brand's essence.<br /><br />Whether you're envisioning a simple informational hub or a robust web platform, I've got you covered. From integrating e-commerce solutions to implementing content management systems, I infuse each project with the functionalities that matter most to your business. Every website I design is built from the ground up, emphasizing responsiveness, SEO optimization, speed, and an unparalleled user experience.<br /><br />With a commitment to customization and a passion for excellence, together we can create a website that not only stands out but also serves as a true reflection of your business in the digital realm.",
        },
      },
      {
        type: "row",
        data: {
          title: "Some Past Work",
          cards: [
            {
              type: "photo",
              link: { href: "/work/paintball-vault" },
              image: {
                src: "/work/paintball-vault/DTR50649.jpg",
                alt: "Paintball Vault",
              },
              tags: ["Website"],
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
              tags: ["Website"],
              title: "Pangobooks",
              copy: "Used book marketplace",
            },
            {
              type: "photo",
              link: { href: "/work/adage-financial-consultants" },
              image: {
                src: "/work/adage-financial/DTR50636.jpg",
                alt: "Adage Financial Consultants",
              },
              tags: ["Website"],
              title: "Adage Financial Consultants",
              copy: "Financial consultant firm located in Arkansas",
            },
          ],
        },
      },
    ],
  },
  software: {
    meta: {
      title: "Drew Templeton | Software Development",
      description:
        "Crafting bespoke software solutions to elevate business efficiency. From idea vetting to process optimization, we blend world-class tech with your unique business needs.",
    },
    components: [
      {
        type: "header",
        data: {
          title: "Let's<br />Build<br />Some<br />Software",
          button: {
            text: "Connect With Me",
            link: { href: "/contact" },
          },
        },
      },
      {
        type: "row",
        data: {
          description:
            "In the modern business landscape, efficiency is the key to success. With a passion for innovation and a keen entrepreneurial spirit, I specialize in crafting tools that elevate business operations to new heights. I don't just build software; I build solutions tailored to address specific challenges and bottlenecks.<br /><br />Whether you're brimming with fresh ideas or seeking enhancements to your existing processes, I'm here to guide and collaborate. Beyond just development, I offer a unique perspective, helping vet your concepts and providing insights into potential areas of improvement. My approach is holistic, ensuring that every software solution not only meets technical standards but also aligns seamlessly with your business goals and vision.<br /><br />Together, let's harness the power of custom software to drive efficiency, innovation, and growth for your business.",
        },
      },
    ],
  },
  "artificial-intelligence": {
    meta: {
      title: "Drew Templeton | Custom Trained LLM's & A.I.",
      description:
        "Navigate the transformative world of A.I. with our tailored solutions. From custom LLMs to image recognition, we harness advanced intelligence to drive your business forward.",
    },
    components: [
      {
        type: "header",
        data: {
          title: "Let's<br />Build<br />A.I. Powered Things",
          button: {
            text: "Connect With Me",
            link: { href: "/contact" },
          },
        },
      },
      {
        type: "row",
        data: {
          description:
            "In the ever-evolving realm of technology, Artificial Intelligence stands at the forefront, offering unparalleled opportunities for businesses to innovate and thrive. With expertise in leveraging the capabilities of OpenAI, I specialize in tailoring and training models that resonate with your unique business logic and objectives.<br /><br />Whether your vision involves crafting a bespoke LLM that encapsulates your business's distinct logic or venturing into the realm of image recognition, I'm here to guide, develop, and deploy. My approach is comprehensive, ensuring that every AI solution is not only technically robust but also aligns seamlessly with your operational needs and goals.<br /><br />Together, let's navigate the transformative landscape of A.I., creating solutions that drive efficiency, innovation, and a competitive edge for your business.",
        },
      },
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
              tags: ["Custom Trained LLM"],
              title: "Paintball Vault",
              copy: "Automated customer support using OpenAI",
            },

            {
              type: "photo",
              link: { href: "/work/crowler" },
              image: {
                src: "/work/crowler/DTR50666.jpg",
                alt: "Crowler",
              },
              tags: ["Image Recognition"],
              title: "Crowler",
              copy: "Beer label recognition",
            },
          ],
        },
      },
    ],
  },
  design: {
    meta: {
      title: "Drew Templeton | Design, UX, Branding & Photography",
      description:
        "Elevate your brand's identity with our comprehensive design services. From captivating visuals to memorable branding, we craft narratives that leave a lasting impression.",
    },
    components: [
      {
        type: "header",
        data: {
          title: "Let's<br />Build<br />A Brand",
          button: {
            text: "Connect With Me",
            link: { href: "/contact" },
          },
        },
      },
      {
        type: "row",
        data: {
          description:
            "In the vast expanse of the business world, standing out is both an art and a science. At the core of every memorable product or service lies impeccable design, a unique brand identity, and a user experience that resonates. With a deep understanding of these elements, I offer a comprehensive suite of services tailored to elevate your brand's presence.<br /><br />By delving deep into the essence of your company and the nuances of your project, I craft designs that are not only visually captivating but also align with your brand's ethos. Beyond design, my expertise in photography ensures that every visual element tells a story, further enhancing your brand's narrative and appeal.<br /><br />Together, let's embark on a journey to create a brand identity that not only sets you apart but also leaves an indelible mark in the minds of your audience.",
        },
      },
      {
        type: "row",
        data: {
          title: "Some Past Work",
          cards: [
            {
              type: "photo",
              link: { href: "/work/studio-three" },
              image: {
                src: "/work/studio-three/DT3_1766.jpg",
                alt: "Studio Three",
              },
              tags: ["Photography"],
              title: "Studio Three",
            },
            {
              type: "photo",
              link: { href: "/work/paintball-vault" },
              image: {
                src: "/work/paintball-vault/DTR50644.jpg",
                alt: "Paintball Vault",
              },
              tags: ["Founded", "UX, Design & Photography"],
              title: "Paintball Vault",
            },
            {
              type: "photo",
              link: { href: "/work/mercadito-hospitality" },
              image: {
                src: "/work/mercadito-hospitality/Hosp_Taco-Camaron1.jpg",
                alt: "Mercadito Hospitality",
              },
              tags: ["Photography"],
              title: "Mercadito Hospitality",
            },
          ],
        },
      },
    ],
  },
  "tech-partner": {
    meta: {
      title: "Drew Templeton | Tech Partner & Consulting",
      description:
        "Empower your business with our tech partnership and consultancy. With a decade of experience, we seamlessly integrate technology into your operations, setting the stage for success.",
    },
    components: [
      {
        type: "header",
        data: {
          title: "Let's<br />Partner",
          button: {
            text: "Connect With Me",
            link: { href: "/contact" },
          },
        },
      },
      {
        type: "row",
        data: {
          description:
            "In the intricate world of business, integrating technology effectively can be the difference between mere survival and unparalleled success. As a seasoned business owner with a rich history of crafting products and MVPs since 2010, I bring a wealth of experience and insights to the table.<br /><br />Whether you're in need of a dedicated tech partner to navigate the complexities of the digital realm or seeking a consultant to augment your existing development team, I'm here to assist. My strength lies in understanding the unique challenges and aspirations of businesses, and then weaving technology seamlessly into the fabric of your operations. With a collaborative approach, I aim to empower your team, streamline processes, and set the foundation for lasting success.<br /><br />Together, let's harness the power of technology, ensuring it becomes a driving force behind your business's growth and evolution.",
        },
      },
    ],
  },
};

export default SERVICES;
