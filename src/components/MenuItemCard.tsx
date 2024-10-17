import { formatAsDollars, type MenuItem } from "../utils";

type MenuItemCardProps = {
  menuItem: MenuItem;
};

const MenuItemCard = ({ menuItem }: MenuItemCardProps) => {
  return (
    <div className="space-y-1 text-sweetgreen-green-primary group hover:cursor-pointer">
      <div className="relative overflow-hidden rounded-[36px]">
        <img
          className="object-cover w-full h-auto transform transition duration-300 group-hover:scale-105 group-hover:brightness-90"
          src={menuItem.image}
          alt={menuItem.name}
        />
      </div>
      <div className="pt-3 space-y-2">
        <p className="text-2xl uppercase font-light tracking-wide">
          <span className="group-hover:border-b-2 group-hover:border-sweetgreen-green-primary">
            {menuItem.name}
          </span>
        </p>
        <p className="text-base font-light leading-relaxed">
          {menuItem.ingredients}
        </p>
        <p className="text-xl font-normal">{formatAsDollars(menuItem.price)}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
