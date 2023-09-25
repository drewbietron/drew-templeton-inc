import { Page } from "./types";

const ABOUT: (custom: any) => Page = (custom) => ({
  meta: {
    title: "Drew Templeton | About Me",
    description:
      "I'm Drew, a St. Charles based creator 💡, technology lover 🤓 and market enthusiast 📈.  I specialize in building custom apps, websites and software for companies of all sizes.",
  },
  components: [
    {
      type: "header",
      data: {
        title: "Small</br>But</br>Mighty",
        copy: "I take pride in giving clients the attention that a boutique agency can provide without sacrificing productivity and world class results.",
      },
    },

    custom,
  ],
});

export default ABOUT;
