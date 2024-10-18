import { useState } from "react";
import { Link } from "react-router-dom";
import peopleImage from "../assets/peopleImage.avif";
import sweetgreenWorkImage from "../assets/sweetgreenWorkImage.avif";
import { formatAsDollars, type MenuItem } from "../utils";

type MenuItemDetailsProps = {
  menuItem: MenuItem;
};

const MenuItemDetails = ({ menuItem }: MenuItemDetailsProps) => {
  const images = [menuItem.image, sweetgreenWorkImage, peopleImage];
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    if (imageIndex - 1 === -1) {
      return;
    }

    setImageIndex(imageIndex - 1);
  };

  const handleNext = () => {
    if (imageIndex + 1 === images.length) {
      return;
    }

    setImageIndex(imageIndex + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-8 my-12">
        {/* Left side: product details */}
        <div className="text-sweetgreen-green-primary ml-32 mr-16 flex flex-col justify-between pb-8 pt-4">
          <div>
            <div className="text-base font-light uppercase tracking-wider mb-8">
              <Link
                to={"/menu"}
                className="hover:border-b hover:border-sweetgreen-green-primary hover:cursor-pointer"
              >
                ← Go Back to Menu
              </Link>
            </div>
            <h2 className="text-2xl font-light italic font-serif mb-1">
              {menuItem.category}
            </h2>
            <h2 className="text-3xl font-bold mb-4">{menuItem.name}</h2>
            <p className="mb-2">{menuItem.description}</p>
          </div>

          <div className="space-y-6">
            <p className="mb-2">
              <span className="font-semibold">Ingredients: </span>
              {menuItem.ingredients}
            </p>
            <button className="rounded-full px-10 py-4 tracking-wide bg-sweetgreen-green-primary font-semibold text-white text-base">
              <span className="group-hover:border-b group-hover:border-sweetgreen-green-primary">
                Add to Cart — {formatAsDollars(menuItem.price)}
              </span>
            </button>
          </div>
        </div>

        {/* Right side: carousel */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <div className="flex space-x-4">
            <div className="flex space-x-4">
              {/* Fixed-size images */}
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative min-w-[500px] h-[500px] flex space-x-4 transition-transform duration-200 ease-in-out"
                    style={{ transform: `translateX(-${imageIndex * 516}px)` }} // Shift images based on current index
                  >
                    <img
                      className="rounded-[36px] object-cover w-full h-full"
                      src={image}
                    />
                  </div>
                );
              })}
            </div>
            <div
              onClick={handlePrev}
              className="hover:cursor-pointer absolute top-[436px] left-[420px] bg-sweetgreen-yellow w-[64px] h-[64px] flex items-center justify-center rounded-tl-3xl"
            >
              <button className="text-3xl font-light">←</button>
            </div>
            <div
              onClick={handleNext}
              className="hover:cursor-pointer absolute top-[436px] left-[500px] bg-sweetgreen-yellow w-[64px] h-[64px] flex items-center justify-center rounded-tr-3xl"
            >
              <button className="text-3xl font-light">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
