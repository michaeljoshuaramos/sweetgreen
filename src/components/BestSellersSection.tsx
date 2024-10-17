import { Link } from "react-router-dom";
import { menu } from "../utils/";
import MenuItemCard from "./MenuItemCard";

const BestSellersSection = () => {
  return (
    <div className="max-w-[1400px] mx-auto my-12">
      <h2 className="font-serif text-sweetgreen-green-primary text-6xl text-center">
        Our Best Sellers
      </h2>
      <div className="grid grid-cols-3 gap-[60px] my-12">
        <Link
          to={`/menu/${encodeURIComponent(menu[0].name)}`}
          key={menu[0].name}
        >
          <MenuItemCard menuItem={menu[0]} />
        </Link>
        <Link
          to={`/menu/${encodeURIComponent(menu[1].name)}`}
          key={menu[1].name}
        >
          <MenuItemCard menuItem={menu[1]} />
        </Link>
        <Link
          to={`/menu/${encodeURIComponent(menu[2].name)}`}
          key={menu[2].name}
        >
          <MenuItemCard menuItem={menu[2]} />
        </Link>
      </div>
    </div>
  );
};

export default BestSellersSection;