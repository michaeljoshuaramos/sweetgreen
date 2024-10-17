import sweetgreenHero from "../assets/sweetgreenHero.webp";
import {
  Footer,
  MenuItemCard,
  NewsletterSection,
  NewsSection,
  SweetgreenWorkSection,
  SweetpassSection,
} from "../components/";
import { menu } from "../utils/";

const Landing = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[90vh]"
        style={{ backgroundImage: `url(${sweetgreenHero})` }}
      >
        <h1 className="absolute bottom-96 left-24 text-base font-light uppercase tracking-wider text-white">
          Brussels Are Back
        </h1>
        <h1 className="absolute bottom-56 left-24 text-7xl font-light text-white max-w-[800px]">
          Introducing the Autumn Harvest Bowl
        </h1>
        <button className="absolute bottom-32 uppercase rounded-full left-24 px-12 py-4 tracking-wide bg-sweetgreen-neon font-light text-sweetgreen-green-primary text-xl">
          Order Now
        </button>
      </div>
      <div className="max-w-[1400px] mx-auto my-12">
        <h2 className="font-serif text-sweetgreen-green-primary text-6xl text-center">
          Our Best Sellers
        </h2>
        <div className="grid grid-cols-3 gap-[60px] my-12">
          <MenuItemCard menuItem={menu[0]} />
          <MenuItemCard menuItem={menu[1]} />
          <MenuItemCard menuItem={menu[2]} />
        </div>
      </div>
      <SweetpassSection />
      <SweetgreenWorkSection />
      <NewsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Landing;
