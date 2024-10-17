import { footer } from "../utils";

const Footer = () => {
  return (
    <div className="bg-sweetgreen-green-tertiary font-light text-sm">
      <footer className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-6 gap-[60px] py-12">
          <div>
            <p className="uppercase mb-4">{footer[0].category}</p>
            {footer[0].links.map((link) => (
              <p key={link}>
                <a>{link}</a>
              </p>
            ))}
          </div>
          <div>
            <p className="uppercase mb-4">{footer[1].category}</p>
            {footer[1].links.map((link) => (
              <p key={link}>
                <a>{link}</a>
              </p>
            ))}
          </div>
          <div>
            <p className="uppercase mb-4">{footer[2].category}</p>
            {footer[2].links.map((link) => (
              <p key={link}>
                <a>{link}</a>
              </p>
            ))}
          </div>
          <div>
            <p className="uppercase mb-4">{footer[3].category}</p>
            {footer[3].links.map((link) => (
              <p key={link}>
                <a>{link}</a>
              </p>
            ))}
          </div>

          <div></div>
          <div>©2024 sweetgreen</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
