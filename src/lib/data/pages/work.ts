import { Page } from "./types";

export const workIndex: Page = {
  meta: {
    title: "Drew Templeton | Past Work",
    description:
      "Here's some past work from clients we've had the pleasure of serving since 2010.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Some</br>Past</br>Work",
        button: {
          text: "Connect With Me",
          link: { href: "/contact" },
        },
      },
    },
    {
      type: "row",
      data: {
        cards: [
          {
            type: "photo",
            link: { href: "/work/paintball-vault" },
            image: {
              src: "/work/paintball-vault/DTR50653.jpg",
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
              src: "/work/pangobooks/DTR50637.jpg",
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
              src: "/work/studio-three/DT3_2225.jpg",
              alt: "Studio Three",
            },
            tags: ["Photography"],
            title: "Studio Three",
            copy: "Boutique fitness studio located in Chicago",
          },
          {
            type: "photo",
            link: { href: "/work/crowler" },
            image: {
              src: "/work/crowler/DTR50666.jpg",
              alt: "Crowler",
            },
            tags: ["App", "Founded"],
            title: "Crowler",
            copy: "Beer label recognition app",
          },
          {
            type: "photo",
            link: { href: "/work/american-softgels" },
            image: {
              src: "/work/american-softgels/DTR50629.jpg",
              alt: "American Softgels",
            },
            tags: ["Website"],
            title: "American Softgels",
            copy: "Softgel manufacturer located in Florida",
          },
          {
            type: "photo",
            link: { href: "/work/adage-financial-consultants" },
            image: {
              src: "/work/adage-financial/DTR50635.jpg",
              alt: "American Softgels",
            },
            tags: ["Website"],
            title: "Adage Financial Consultants",
            copy: "Financial consulting firm located in Arkansas",
          },
        ],
      },
    },
  ],
};

export const workSlugs = [
  "paintball-vault",
  "pangobooks",
  "studio-three",
  "crowler",
  "american-softgels",
  "adage-financial-consultants",
  "mercadito-hospitliaty",
];

const PAINTBALL_VAULT: Page = {
  slug: "paintball-vault",
  meta: {
    title: "Drew Templeton | Paintball Vault",
    description:
      "Dive into Paintball Vault, the ultimate marketplace for paintball gear. Powered by Expo, React Native, and Next.js, it's where technology meets passion.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Paintball Vault",
        copy: "The first marketplace built for paintball",
        button: {
          text: "Visit Paintball Vault",
          link: { href: "https://pbvault.com" },
        },
      },
    },
    {
      type: "row",
      data: {
        title: "Revolutionizing the Paintball Marketplace",
        description:
          "In the dynamic world of paintball, enthusiasts needed a dedicated platform to buy, sell, and trade gear. Recognizing this gap, I founded Paintball Vault, a comprehensive marketplace tailored to the paintball community.",
        cards: [
          {
            type: "photo",
            image: {
              src: "/work/paintball-vault/DTR50644.jpg",
              alt: "Paintball Vault",
            },
          },
          {
            type: "photo",
            image: {
              src: "/work/paintball-vault/DTR50649.jpg",
              alt: "Paintball Vault",
            },
          },
        ],
      },
    },
    {
      type: "row",
      data: {
        description:
          "At the heart of Paintball Vault's success is its robust technological foundation. The mobile app, crafted meticulously using Expo and React Native, offers users a seamless and intuitive experience, making gear trading a breeze. On the web front, we harnessed the power of Next.js to deliver a fast, responsive, and immersive platform that mirrors the app's efficiency.<br /><br />But what truly sets Paintball Vault apart is its backend infrastructure. By integrating Postgres with Supabase, we've been able to effortlessly scale our API. This strategic choice not only ensures a consistent product experience across both web and native apps but also positions Paintball Vault for future growth.<br /><br />Moreover, in the early stages of the business, we introduced a custom LLM (Large Language Model) to manage customer support. This innovative approach allowed Paintball Vault to scale efficiently, ensuring top-notch customer service without the need for a large employee base.<br /><br />Today, Paintball Vault stands as a beacon of innovation in the paintball community, a testament to our commitment to excellence and forward-thinking.",
      },
    },
    {
      type: "gallery",
      data: {
        images: [
          {
            src: "/work/paintball-vault/DTR50646.jpg",
            alt: "Paintball Vault",
          },
          {
            src: "/work/paintball-vault/DTR50656.jpg",
            alt: "Paintball Vault",
          },
          {
            src: "/work/paintball-vault/DTR50653.jpg",
            alt: "Paintball Vault",
          },
        ],
      },
    },
  ],
};

const PANGOBOOKS: Page = {
  slug: "pangobooks",
  meta: {
    title: "Drew Templeton | Pangobooks",
    description:
      "Discover Pangobooks, the game-changer in used book marketplaces. Experience seamless book shopping with our Next.js web platform and revamped React Native app.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Pangobooks",
        button: {
          text: "Visit Pangobooks",
          link: { href: "https://pangobooks.com" },
        },
      },
    },
    {
      type: "row",
      data: {
        title: "Empowering Buying & Selling Of Used Books",
        description:
          "Working with Pangobooks, they envisioned a seamless platform that would redefine the used book marketplace experience. Recognizing the power and flexibility of Next.js, we embarked on crafting a web application from the ground up. The result was a fast, responsive, and user-centric platform that not only met but exceeded Pangobooks' expectations.",
        cards: [
          {
            type: "photo",
            image: {
              src: "/work/pangobooks/DTR50637.jpg",
              alt: "Pangobooks",
            },
          },
          {
            type: "photo",
            image: {
              src: "/work/pangobooks/DTR50640.jpg",
              alt: "Pangobooks",
            },
          },
          {
            type: "photo",
            image: {
              src: "/work/pangobooks/DTR50658.jpg",
              alt: "Pangobooks",
            },
          },
        ],
      },
    },

    {
      type: "row",
      data: {
        description:
          "It didn't stop there. Pangobooks' existing React Native app needed a revamp to align with the new web experience. We strategically rearchitected the mobile app, leveraging the same page component system as the Next.js web app. This ensured a consistent and unified user experience across both platforms, streamlining development and maintenance processes.",
      },
    },
  ],
};

const STUDIO_THREE: Page = {
  slug: "studio-three",
  meta: {
    title: "Drew Templeton | Studio Three",
    description:
      "Elevate your fitness journey in a boutique setting. Explore our captivating visuals, capturing the essence of dedication, passion, and transformation.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Studio Three",
        copy: "Here's some photos from a shoot I did for Studio Three in Chicago.",
        button: {
          text: "Visit Studio Three",
          link: { href: "https://studiothree.com" },
        },
      },
    },
    {
      type: "gallery",
      data: {
        images: [
          {
            src: "/work/studio-three/DT3_0934.jpg",
            alt: "Studio Three - Instructors",
          },
          {
            src: "/work/studio-three/DT3_1465.jpg",
            alt: "Studio Three - Instructors",
          },
          {
            src: "/work/studio-three/DT3_1766.jpg",
            alt: "Studio Three - Andrea Wright",
          },
          {
            src: "/work/studio-three/DT3_1801.jpg",
            alt: "Studio Three - Andrea Wright",
          },
          {
            src: "/work/studio-three/DT3_1903.jpg",
            alt: "Studio Three Instructor",
          },
          {
            src: "/work/studio-three/DT3_2225.jpg",
            alt: "Studio Three - Marissa Schrader",
          },
          {
            src: "/work/studio-three/DT3_2343.jpg",
            alt: "Studio Three Instructors",
          },
          {
            src: "/work/studio-three/DT3_2469.jpg",
            alt: "Studio Three Instructors",
          },
          {
            src: "/work/studio-three/DT3_2824.jpg",
            alt: "Studio Three - Diggy Moreland",
          },
          {
            src: "/work/studio-three/DT3_2915.jpg",
            alt: "Studio Three Instructors",
          },
          {
            src: "/work/studio-three/DT3_3218.jpg",
            alt: "Studio Three - Jen Enright",
          },
          {
            src: "/work/studio-three/DT3_3884.jpg",
            alt: "Studio Three - Dani Haboush",
          },
        ],
      },
    },
  ],
};

const CROWLER: Page = {
  slug: "crowler",
  meta: {
    title: "Drew Templeton | Crowler",
    description:
      "Meet Crowler, the innovative beer discovery app. Using advanced image recognition and Expo, React Native and Postgres, we've redefined how you find and enjoy your next brew.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Crowler",
      },
    },
    {
      type: "row",
      data: {
        title: "Revolutionizing the Beer Discovery Experience",
        description:
          "In the vast world of craft beers, finding that perfect brew can be a daunting task. Enter Crowler, an app I proudly founded along side my good friend Matt to transform the way beer enthusiasts discover their next favorite pint.<br /><br />At the core of Crowler's innovation is its state-of-the-art image recognition technology. Simply point your device at a beer label in-store, and Crowler instantly identifies it. But it doesn't stop there. Once recognized, the app presents you with ratings from leading beer connoisseurs and platforms, ensuring that you're making an informed choice.",
      },
    },
    {
      type: "gallery",
      data: {
        images: [
          {
            src: "/work/crowler/DTR50660.jpg",
            alt: "Crowler",
          },
          {
            src: "/work/crowler/DTR50666.jpg",
            alt: "Crowler",
          },
          {
            src: "/work/crowler/DTR50662.jpg",
            alt: "Crowler",
          },
        ],
      },
    },
  ],
};

const AMERICAN_SOFTGELS: Page = {
  slug: "american-softgels",
  meta: {
    title: "Drew Templeton | American Softgels",
    description:
      "Explore American Softgels' digital presence, crafted with precision.  Their Next.js website combines custom aesthetics with SEO optimization.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "American Softgels",
        button: {
          text: "Visit American Softgels",
          link: { href: "https://www.americansoftgels.com" },
        },
      },
    },
    {
      type: "row",
      data: {
        title: "Crafting a Digital Presence with Precision",
        description:
          "In the digital age, even the most straightforward projects demand meticulous attention to detail and a commitment to excellence. Working with American Softgels, their vision was clear: an informative website that not only encapsulated their brand ethos but also ensured they stood out in the vast expanse of the internet.<br /><br />Understanding the importance of discoverability, we prioritized SEO from the outset. Every site we craft is built with this in mind, and American Softgels was no exception. By leveraging the power and flexibility of Next.js, we designed a website that is not only responsive and user-friendly but also primed for optimal search engine performance.<br /><br />But our commitment didn't stop at functionality. Recognizing the importance of aesthetics in today's digital landscape, we embarked on creating custom styling for the website. The result? A unique digital presence that truly captures the essence of American Softgels, setting them apart in their industry.",
      },
    },
    {
      type: "gallery",
      data: {
        images: [
          {
            src: "/work/american-softgels/DTR50624.jpg",
            alt: "American Softgels",
          },
          {
            src: "/work/american-softgels/DTR50628.jpg",
            alt: "American Softgels",
          },
          {
            src: "/work/american-softgels/DTR50629.jpg",
            alt: "American Softgels",
          },
        ],
      },
    },
    {
      type: "row",
      data: {
        description:
          "While some might see a simple website project as just another task, we see it as an opportunity. An opportunity to showcase our dedication, our expertise, and our passion. American Softgels stands as a testament to our belief that no project is too small to deserve our best.",
      },
    },
  ],
};

const ADAGE_FINANCIAL_CONSULTANTS: Page = {
  slug: "adage-financial-consultants",
  meta: {
    title: "Drew Templeton | Adage Financial Consultants",
    description:
      "Adage Financial Consultants SEO-friendly website build using Next.js.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Adage Financial Consultants",
        button: {
          text: "Visit Adage Financial Consultants",
          link: { href: "https://www.adagefinancial.com" },
        },
      },
    },
    {
      type: "row",
      data: {
        title: "Building Trust Through Digital Excellence",
        description:
          "For over three decades, Adage Financial Consultants have been a cornerstone in the local community, offering financial advisory services.  We embarked on a mission to create a website that not only reflected their rich legacy but also instilled confidence in potential clients. In the financial sector, a website is more than just a digital footprint; it's a testament to credibility and expertise.<br /><br />Harnessing the power of Next.js, we built a responsive and user-friendly platform. But beyond functionality, we prioritized design and aesthetics, ensuring that every element resonated with the brand's ethos and the trust they've cultivated over the years.",
      },
    },
    {
      type: "gallery",
      data: {
        images: [
          {
            src: "/work/adage-financial/DTR50632.jpg",
            alt: "Adage Financial Consultants",
          },
          {
            src: "/work/adage-financial/DTR50635.jpg",
            alt: "Adage Financial Consultants",
          },
          {
            src: "/work/adage-financial/DTR50636.jpg",
            alt: "Adage Financial Consultants",
          },
        ],
      },
    },
    {
      type: "row",
      data: {
        description:
          "SEO-friendliness was not just a checkbox for us; it was a necessity. We meticulously optimized the site to ensure that those seeking financial guidance could effortlessly discover Adage Financial Consultants.",
      },
    },
  ],
};

const MERCADITO_HOSPITALITY: Page = {
  slug: "mercadito-hospitality",
  meta: {
    title: "Drew Templeton | Mercadito Hospitality",
    description:
      "Photos by Drew Templeton of Mercadito Chicago, Tavernia, Little Market Brasserie and more.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Mercadito Hospitality",
      },
    },
    {
      type: "row",
      data: {
        description:
          "Food photography was my first found passion in professional photography. I working with Mercadito Hospitality afforded me some great opportunies to take lots of photos of lots of great food as well as expose me to the hospitality network in the best food city in the world. Here's some shots that I took both on the job.",
      },
    },
    {
      type: "gallery",
      data: {
        images: [
          {
            src: "/work/mercadito-hospitality/Booty_Collins.jpg",
            alt: "Mercadito Hospitality - Tavernita - Booty Collins",
          },
          {
            src: "/work/mercadito-hospitality/CJ0A0141.jpg",
            alt: "Mercadito Hospitality - Little Market",
          },
          {
            src: "/work/mercadito-hospitality/CJ0A0265.jpg",
            alt: "Mercadito Hospitality - Little Market",
          },
          {
            src: "/work/mercadito-hospitality/CJ0A0395.jpg",
            alt: "Mercadito Hospitality - Little Market",
          },
          {
            src: "/work/mercadito-hospitality/CJ0A9740.jpg",
            alt: "Mercadito Hospitality - Little Market",
          },
          {
            src: "/work/mercadito-hospitality/CJ0A9769.jpg",
            alt: "Mercadito Hospitality - Little Market",
          },
          {
            src: "/work/mercadito-hospitality/CJ0A9944.jpg",
            alt: "Mercadito Hospitality - Little Market",
          },
          {
            src: "/work/mercadito-hospitality/Crudo_Faroe_Island_Salmon_2.jpg",
            alt: "Mercadito Hospitality - Tavernita",
          },
          {
            src: "/work/mercadito-hospitality/Estrella_Pour.jpg",
            alt: "Mercadito Hospitality - Tavernita - Estrella Damm",
          },
          {
            src: "/work/mercadito-hospitality/Hosp_Guac_Granada_Fall.jpg",
            alt: "Mercadito Hospitality - Mercadito",
          },
          {
            src: "/work/mercadito-hospitality/Hosp_Spaghetti_Western.jpg",
            alt: "Mercadito Hospitality - Double A",
          },
          {
            src: "/work/mercadito-hospitality/Hosp_Taco-Camaron1.jpg",
            alt: "Mercadito Hospitality - Mercadito",
          },
          {
            src: "/work/mercadito-hospitality/Platos_Suckling_Pig_Confit.jpg",
            alt: "Mercadito Hospitality - Tavernita",
          },
          {
            src: "/work/mercadito-hospitality/Quixote.jpg",
            alt: "Mercadito Hospitality - Tavernita",
          },
        ],
      },
    },
  ],
};

export const workPages = [
  PAINTBALL_VAULT,
  PANGOBOOKS,
  CROWLER,
  AMERICAN_SOFTGELS,
  ADAGE_FINANCIAL_CONSULTANTS,
  MERCADITO_HOSPITALITY,
  STUDIO_THREE,
];
