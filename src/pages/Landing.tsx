import sweetgreenHero from "../assets/sweetgreenHero.webp";
import {
  MenuItemCard,
  SweetgreenWorkSection,
  SweetpassSection,
} from "../components/";
import { menu } from "../utils/";

const Landing = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[90vh]"
        style={{ backgroundImage: `url(${sweetgreenHero})` }}
      ></div>
      <div className="max-w-[1400px] mx-auto my-12">
        <h2 className="font-serif text-sweetgreen-green-primary text-6xl text-center">
          Our Best Sellers
        </h2>
        <div className="grid grid-cols-3 gap-[60px] my-12">
          <MenuItemCard menuItem={menu[0]} />
          <MenuItemCard menuItem={menu[1]} />
          <MenuItemCard menuItem={menu[2]} />
        </div>
      </div>
      <SweetpassSection />
      <SweetgreenWorkSection />
      <div className="max-w-[1400px] mx-auto my-12">
        <div className="grid grid-cols-3">
          <div>
            <section>
              <p>Good Morning America</p>
              <p>Naomi Osaka joins sweetgreen as youngest investor</p>
              <p>
                Discover what our collab means for the future of fast food…
                <br />
                <span>Read more →</span>
              </p>
            </section>
          </div>
          <div>
            <section>
              <p>Good Morning America</p>
              <p>Naomi Osaka joins sweetgreen as youngest investor</p>
              <p>
                Discover what our collab means for the future of fast food…
                <br />
                <span>Read more →</span>
              </p>
            </section>
          </div>
          <div>
            <section>
              <p>Good Morning America</p>
              <p>Naomi Osaka joins sweetgreen as youngest investor</p>
              <p>
                Discover what our collab means for the future of fast food…
                <br />
                <span>Read more →</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
