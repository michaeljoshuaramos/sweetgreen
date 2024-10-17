import { useParams } from "react-router-dom";
import { MenuItemDetails, SuggestionSection } from "../components";
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
    <>
      <MenuItemDetails menuItem={menuItem} />
      <SuggestionSection />
    </>
  );
};

export default MenuItem;
