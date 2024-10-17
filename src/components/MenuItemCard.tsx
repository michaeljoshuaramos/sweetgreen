import { type MenuItem } from "../utils";

type MenuItemCardProps = {
  menuItem: MenuItem;
};

const MenuItemCard = ({ menuItem }: MenuItemCardProps) => {
  return (
    <div className="space-y-4 text-sweetgreen-green-primary">
      <img
        className="rounded-[36px] object-cover w-full h-auto"
        src={menuItem.image}
        alt={menuItem.name}
      />
      <p className="text-lg font-semibold tracking-wide">{menuItem.name}</p>
      <p className="text-base font-normal leading-relaxed">
        {menuItem.ingredients}
      </p>
      <p className="text-lg font-semibold">${menuItem.price}</p>
    </div>
  );
};

export default MenuItemCard;
