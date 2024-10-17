import news1Image from "../assets/news1Image.jpg";
import news2Image from "../assets/news2Image.jpg";
import news3Image from "../assets/news3Image.jpg";

export type News = {
  publisher: string;
  title: string;
  teaser: string;
  image: string;
};

export const news: News[] = [
  {
    publisher: "Good Morning America",
    title: "Naomi Osaka joins sweetgreen as youngest investor",
    teaser: "Discover what our collab means for the future of fast food…",
    image: news1Image,
  },
  {
    publisher: "New York Times",
    title: "In a burger world, can sweetgreen scale up?",
    teaser: "Learn how we're using tech to innovate fast-casual dining…",
    image: news2Image,
  },
  {
    publisher: "NPR How I Built This",
    title: "sweetgreen: Nicolas Jammet & Jonathan Neman",
    teaser: "Dive into a juicy podcast with our visionary founders…",
    image: news3Image,
  },
];
