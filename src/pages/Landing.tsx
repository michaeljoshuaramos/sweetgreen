import sweetgreenHero from "../assets/sweetgreenHero.webp";
import { MenuItemCard, SweetpassSection } from "../components/";
import { menu } from "../utils/menu";

const Landing = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[90vh]"
        style={{ backgroundImage: `url(${sweetgreenHero})` }}
      ></div>
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
    </>
  );
};

export default Landing;
