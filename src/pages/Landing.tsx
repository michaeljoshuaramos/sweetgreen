import featuredProduct from "../assets/sweetgreenHero.webp";
import MenuItemCard from "../components/MenuItemCard";
import { menu } from "../utils/menu";

const Landing = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[90vh]"
        style={{ backgroundImage: `url(${featuredProduct})` }}
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
      <div className="grid grid-cols-2 gap-[60px]">
        <div>left</div>
        <div>right</div>
      </div>
    </>
  );
};

export default Landing;
