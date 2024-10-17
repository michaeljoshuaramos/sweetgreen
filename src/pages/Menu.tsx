import { useState } from "react";
import {
  FilterOptions,
  Footer,
  MenuItemCard,
  NewsletterSection,
} from "../components";
import { menu } from "../utils";

const Menu = () => {
  const [category, setCategory] = useState<
    "Bowls" | "Protein Plates" | "Salads"
  >("Bowls");
  console.log(category);
  return (
    <div>
      <div className="text-center my-16">
        <h1 className="text-7xl font-serif text-sweetgreen-green-primary">
          Fresh, plant-forward, earth friendly food.
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto my-12">
        <FilterOptions category={category} setCategory={setCategory} />
        <div className="grid grid-cols-3 gap-[60px] my-12">
          {menu
            .filter((menuItem) => menuItem.category === category)
            .map((menuItem, index) => {
              return <MenuItemCard key={index} menuItem={menuItem} />;
            })}
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Menu;