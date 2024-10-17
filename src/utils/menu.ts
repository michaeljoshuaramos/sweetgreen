import bbqChickenSaladImage from "../assets/bbqChickenSaladImage.avif";
import buffaloChickenImage from "../assets/buffaloChickenImage.avif";
import caramelizedGarlicSteakImage from "../assets/caramelizedGarlicSteakImage.avif";
import chickenAvocadoRanchImage from "../assets/chickenAvocadoRanchImage.avif";
import chickenPestoParmImage from "../assets/chickenPestoParm.avif";
import crispyRiceBowlImage from "../assets/crispyRiceBowlImage.avif";
import fishTacoImage from "../assets/fishTacoImage.avif";
import gardenCobbImage from "../assets/gardenCobbImage.avif";
import guacamoleGreensImage from "../assets/guacamoleGreensImage.avif";
import harvestBowlImage from "../assets/harvestBowlImage.avif";
import hotHoneyChickenImage from "../assets/hotHoneyChickenImage.avif";
import hummusCrunchImage from "../assets/hummusCrunchImage.avif";
import kaleCaesarImage from "../assets/kaleCaesarImage.avif";
import misoGlazedSalmonImage from "../assets/misoGlazedSalmonImage.avif";
import shroomamiImage from "../assets/shroomamiImage.avif";
import steakhouseChoppedImage from "../assets/steakhouseChoppedImage.avif";
import superGreenGoddessImage from "../assets/superGreenGoddessImage.avif";

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
    category: "Bowls",
    image: chickenPestoParmImage,
  },
  {
    name: "Fish Taco",
    description: "A delicious taco featuring grilled fish and fresh toppings.",
    ingredients:
      "Grilled fish, cabbage slaw, pico de gallo, avocado, chipotle mayo, corn tortillas",
    price: "1400",
    category: "Bowls",
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
    description: "A classic steakhouse-inspired bowl.",
    ingredients:
      "Grilled steak, romaine lettuce, cherry tomatoes, blue cheese, crispy onions, steak sauce",
    price: "1900",
    category: "Bowls",
    image: steakhouseChoppedImage,
  },
  {
    name: "Caramelized Garlic Steak",
    description:
      "Tender caramelized garlic steak served with spicy broccoli, tomatoes, and roasted sweet potatoes over wild rice, topped with pesto vinaigrette.",
    ingredients:
      "Caramelized garlic steak, spicy broccoli, tomatoes, warm roasted sweet potatoes, wild rice (x2), pesto vinaigrette",
    price: "1400",
    category: "Protein Plates",
    image: caramelizedGarlicSteakImage,
  },
  {
    name: "Miso Glazed Salmon",
    description:
      "Savory miso glazed salmon paired with avocado, cucumbers, and pickled onions, served on white rice and topped with crispy onions and spicy cashew.",
    ingredients:
      "Miso glazed salmon, avocado, cucumbers, pickled onions, crispy onions, white rice, nori sesame seasoning, spicy cashew",
    price: "1650",
    category: "Protein Plates",
    image: misoGlazedSalmonImage,
  },
  {
    name: "Hot Honey Chicken",
    description:
      "Blackened chicken with roasted sweet potatoes, veg slaw, and crispy onions, complemented by herbed quinoa and drizzled with hot honey mustard sauce.",
    ingredients:
      "Blackened chicken, warm roasted sweet potatoes, veg slaw, crispy onions, herbed quinoa, hot honey mustard sauce",
    price: "1900",
    category: "Protein Plates",
    image: hotHoneyChickenImage,
  },
  {
    name: "Kale Caesar",
    description:
      "A fresh take on Caesar salad with roasted chicken, shaved parmesan, kale, and romaine, finished with a lime squeeze and classic Caesar dressing.",
    ingredients:
      "Roasted chicken, tomatoes, parmesan crisps, shaved parmesan, shredded kale, chopped romaine, lime squeeze, caesar",
    price: "1500",
    category: "Salads",
    image: kaleCaesarImage,
  },
  {
    name: "Guacamole Greens",
    description:
      "A vibrant salad with roasted chicken, avocado, pickled onions, and shredded cabbage, topped with tortilla chips and lime cilantro jalapeño vinaigrette.",
    ingredients:
      "Roasted chicken, avocado, tomatoes, pickled onions, shredded cabbage, tortilla chips, spring mix, chopped romaine, lime squeeze, lime cilantro jalapeño vinaigrette",
    price: "1400",
    category: "Salads",
    image: guacamoleGreensImage,
  },
  {
    name: "BBQ Chicken Salad",
    description:
      "A tangy and sweet salad with blackened chicken, apples, and tortilla chips, served over kale and romaine, and drizzled with honey BBQ sauce and green goddess ranch.",
    ingredients:
      "Blackened chicken, shredded cabbage, pickled onions, tomatoes, apples, tortilla chips, chopped romaine, shredded kale, honey BBQ sauce, green goddess ranch",
    price: "1650",
    category: "Salads",
    image: bbqChickenSaladImage,
  },
  {
    name: "Hummus Crunch",
    description:
      "A Mediterranean-inspired salad with hummus, chickpeas, spicy banana peppers, and za'atar breadcrumbs, served over kale and romaine with pesto vinaigrette.",
    ingredients:
      "Hummus, chickpeas, tomatoes, cucumbers, shredded cabbage, spicy banana peppers, basil, za’atar breadcrumbs, chopped romaine, shredded kale, pesto vinaigrette",
    price: "1900",
    category: "Salads",
    image: hummusCrunchImage,
  },
  {
    name: "Buffalo Chicken",
    description:
      "A spicy and bold salad with blackened chicken, pickled onions, raw carrots, and blue cheese, served over kale and romaine, finished with sweetgreen hot sauce and caesar dressing.",
    ingredients:
      "Blackened chicken, pickled onions, tomatoes, raw carrots, cilantro, blue cheese, za’atar breadcrumbs, shredded kale, chopped romaine, sweetgreen hot sauce, caesar",
    price: "1400",
    category: "Salads",
    image: buffaloChickenImage,
  },
  {
    name: "Super Green Goddess",
    description:
      "A nutrient-packed salad with chickpeas, sweet potatoes, and broccoli, topped with almonds and served over baby spinach and kale with green goddess ranch.",
    ingredients:
      "Chickpeas, roasted sweet potatoes, raw carrots, spicy broccoli, shredded cabbage, roasted almonds, baby spinach, shredded kale, green goddess ranch",
    price: "1650",
    category: "Salads",
    image: superGreenGoddessImage,
  },
  {
    name: "Garden Cobb",
    description:
      "A fresh and hearty cobb salad with avocado, roasted sweet potatoes, and blue cheese, served over spring mix and romaine with balsamic vinaigrette.",
    ingredients:
      "Avocado, hard boiled egg, roasted sweet potatoes, tomatoes, blue cheese, roasted almonds, spring mix, chopped romaine, balsamic vinaigrette",
    price: "1900",
    category: "Salads",
    image: gardenCobbImage,
  },
];
