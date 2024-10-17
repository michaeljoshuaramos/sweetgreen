import { Link } from "react-router-dom";
import sweetgreenHero from "../assets/sweetgreenHero.webp";

const MainHeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-[90vh]"
      style={{ backgroundImage: `url(${sweetgreenHero})` }}
    >
      <h1 className="absolute bottom-96 left-24 text-base font-light uppercase tracking-wider text-white">
        Brussels Are Back
      </h1>
      <h1 className="absolute bottom-56 left-24 text-7xl font-light text-white max-w-[800px]">
        Introducing the Autumn Harvest Bowl
      </h1>
      <Link to={"/menu"} className="group">
        <button className="absolute bottom-32 uppercase rounded-full left-24 px-12 py-4 tracking-wide bg-sweetgreen-neon font-light text-sweetgreen-green-primary text-xl">
          <span className="group-hover:border-b group-hover:border-sweetgreen-green-primary">
            Order Now
          </span>
        </button>
      </Link>
    </div>
  );
};

export default MainHeroSection;
