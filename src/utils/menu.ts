import chickenAvocadoRanchImage from "../assets/chickenAvocadoRanchImage.avif";
import chickenPestoParmImage from "../assets/chickenPestoParm.avif";
import crispyRiceBowlImage from "../assets/crispyRiceBowlImage.avif";
import fishTacoImage from "../assets/fishTacoImage.avif";
import harvestBowlImage from "../assets/harvestBowlImage.avif";
import shroomamiImage from "../assets/shroomamiImage.avif";
import steakhouseChoppedImage from "../assets/steakhouseChoppedImage.avif";

export type MenuItem = {
  name: string;
  description: string;
  ingredients: string;
  price: string;
  category: string;
  image: string;
};

export const menu: MenuItem[] = [
  {
    name: "Crispy Rice Bowl",
    description: "A flavorful bowl with a variety of textures and ingredients.",
    ingredients:
      "Blackened chicken, raw carrots, shredded cabbage, cucumbers, cilantro, roasted almonds, crispy rice, wild rice, spring mix, lime squeeze, spicy cashew",
    price: "1600",
    category: "Bowls",
    image: crispyRiceBowlImage,
  },
  {
    name: "Harvest Bowl",
    description: "A wholesome, autumn-inspired bowl packed with nutrients.",
    ingredients:
      "Roasted chicken, roasted sweet potatoes, wild rice, apples, goat cheese, almonds, arugula, balsamic vinaigrette",
    price: "1700",
    category: "Bowls",
    image: harvestBowlImage,
  },
  {
    name: "Chicken Avocado Ranch",
    description: "A hearty bowl with chicken, avocado, and ranch dressing.",
    ingredients:
      "Grilled chicken, avocado, romaine lettuce, corn, tomato, cheddar cheese, ranch dressing",
    price: "1800",
    category: "Bowls",
    image: chickenAvocadoRanchImage,
  },
  {
    name: "Chicken Pesto Parm",
    description: "A flavorful dish combining chicken, pesto, and parmesan.",
    ingredients:
      "Grilled chicken, penne pasta, basil pesto, parmesan cheese, cherry tomatoes",
    price: "1500",
    category: "Pasta",
    image: chickenPestoParmImage,
  },
  {
    name: "Fish Taco",
    description: "A delicious taco featuring grilled fish and fresh toppings.",
    ingredients:
      "Grilled fish, cabbage slaw, pico de gallo, avocado, chipotle mayo, corn tortillas",
    price: "1400",
    category: "Tacos",
    image: fishTacoImage,
  },
  {
    name: "Shroomami",
    description: "A vegan-friendly bowl full of umami flavors and mushrooms.",
    ingredients:
      "Roasted mushrooms, tofu, wild rice, kale, ginger, sesame, avocado, cucumber",
    price: "1650",
    category: "Bowls",
    image: shroomamiImage,
  },
  {
    name: "Steakhouse Chopped",
    description: "A classic steakhouse-inspired salad.",
    ingredients:
      "Grilled steak, romaine lettuce, cherry tomatoes, blue cheese, crispy onions, steak sauce",
    price: "1900",
    category: "Salads",
    image: steakhouseChoppedImage,
  },
];
