import { useParams } from "react-router-dom";
import { menu } from "../utils";

const MenuItem = () => {
  const { name } = useParams<{ name: string }>();

  // Find the menu item based on the name from URL params
  const menuItem = menu.find(
    (item) => item.name === decodeURIComponent(name || "")
  );

  if (!menuItem) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{menuItem.name}</h2>
      <p>{menuItem.description}</p>
      <p>{menuItem.ingredients}</p>
      <p>Price: {menuItem.price}</p>
      <img src={menuItem.image} alt={menuItem.name} />
    </div>
  );
};

export default MenuItem;
