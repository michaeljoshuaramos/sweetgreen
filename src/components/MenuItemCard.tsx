import { type MenuItem } from "../utils";

type MenuItemCardProps = {
  menuItem: MenuItem;
};

const MenuItemCard = ({ menuItem }: MenuItemCardProps) => {
  return (
    <div className="space-y-4">
      <img
        className="rounded-[36px] object-cover w-full h-auto"
        src={menuItem.image}
        alt={menuItem.name}
      />
      <p className="text-xl font-semibold uppercase text-sweetgreen-green-primary tracking-wide">
        {menuItem.name}
      </p>
      <p className="text-base font-light text-gray-600 leading-relaxed">
        {menuItem.ingredients}
      </p>
      <p className="text-lg font-medium text-sweetgreen-green-primary">
        ${menuItem.price}
      </p>
    </div>
  );
};

export default MenuItemCard;
