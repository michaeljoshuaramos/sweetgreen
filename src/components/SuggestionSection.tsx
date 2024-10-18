import { Link } from "react-router-dom";
import { MenuItemCard } from "../components/";
import { menu } from "../utils";

const SuggestionSection = () => {
  return (
    <div className="my-20 text-sweetgreen-green-primary px-12">
      <h2 className="text-3xl font-bold mb-4">You May Also Like</h2>
      <div className="grid md:grid-cols-2 gap-[60px] my-10 grid-cols-1 lg:grid-cols-3">
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

export default SuggestionSection;
