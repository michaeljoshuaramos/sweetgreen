import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import peopleImage from "../assets/peopleImage.avif";
import sweetgreenWorkImage from "../assets/sweetgreenWorkImage.avif";
import { addItem } from "../features/cart/cartSlice";
import { useToast } from "../hooks/use-toast";
import { formatAsDollars, type MenuItem } from "../utils";

type MenuItemDetailsProps = {
  menuItem: MenuItem;
};

const MenuItemDetails = ({ menuItem }: MenuItemDetailsProps) => {
  const images = [menuItem.image, sweetgreenWorkImage, peopleImage];
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addToCart = () => {
    dispatch(addItem(menuItem));
    toast({ title: "Item added to cart!", description: menuItem.name });
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-12 max-w-[1400px] mx-auto">
        {/* Left side: product details */}
        <div className="text-sweetgreen-green-primary px-16 flex flex-col justify-between pt-4">
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
            <button
              className="rounded-full px-10 py-4 tracking-wide bg-sweetgreen-green-primary font-semibold text-white text-base group"
              onClick={addToCart}
            >
              <span className="group-hover:border-b group-hover:border-white">
                Add to Cart — {formatAsDollars(menuItem.price)}
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center px-16 pt-8">
          <Carousel className="max-w-[400px] ">
            <CarouselContent>
              {images.map((image, index) => {
                return (
                  <CarouselItem key={index} className="max-h-[400px]">
                    <img
                      className="rounded-[36px] object-cover w-full h-full"
                      src={image}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-sweetgreen-green-primary text-white w-10 h-10" />
            <CarouselNext className="bg-sweetgreen-green-primary text-white w-10 h-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
