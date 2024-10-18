import { Link } from "react-router-dom";
import sweetgreenHero from "../assets/sweetgreenHero.webp";

const MainHeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-[90vh]"
      style={{ backgroundImage: `url(${sweetgreenHero})` }}
    >
      <h1 className="absolute bottom-80 left-12 text-sm lg:text-base font-light uppercase tracking-wider text-white">
        Brussels Are Back
      </h1>
      <h1 className="absolute bottom-40 max-w-[300px] left-12 text-4xl md:text-5xl lg:text-5xl lg:max-w-[600px] xl:text-7xl xl:max-w-[800px] font-light text-white">
        Introducing the Autumn Harvest Bowl
      </h1>
      <Link to={"/menu"} className="group">
        <button className="absolute bottom-16 left-12 uppercase rounded-full px-12 py-4 tracking-wide bg-sweetgreen-neon font-light text-sweetgreen-green-primary text-xl">
          <span className="group-hover:border-b group-hover:border-sweetgreen-green-primary">
            Order Now
          </span>
        </button>
      </Link>
    </div>
  );
};

export default MainHeroSection;
