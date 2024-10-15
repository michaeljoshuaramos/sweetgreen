import featuredProduct from "../assets/SG_Web_Harvest_Desktop.webp";

const Landing = () => {
  return (
    <div
      className="bg-cover bg-center h-[60vh]"
      style={{ backgroundImage: `url(${featuredProduct})` }}
    ></div>
  );
};

export default Landing;
