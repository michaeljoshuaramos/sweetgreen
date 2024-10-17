import { menu } from "../utils/";
import MenuItemCard from "./MenuItemCard";

const BestSellersSection = () => {
  return (
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
  );
};

export default BestSellersSection;
