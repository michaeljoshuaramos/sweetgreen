import sweetpassProgramImage from "../assets/sweetpassProgramImage.avif";

const SweetpassSection = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="h-[800px] bg-sweetgreen-green-secondary">
        <section className="text-sweetgreen-black py-16 px-4 md:py-24">
          <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl md:text-base font-normal uppercase tracking-wider">
              Inside the App
            </h1>

            <h2 className="text-6xl md:text-6xl font-light tracking-tight">
              Join Sweetpass
            </h2>

            <p className="text-base md:text-lg font-light leading-relaxed">
              The sweetgreen app for iOS and Android is the #1 most convenient
              way to get fresh, craveable, feel-good food on demand. Download
              the app and order ahead for pickup or delivery.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed">
              Unlock a delicious new world of perks when you join our free
              loyalty program, Sweetpass, and earn rewards, birthday gifts, menu
              exclusives and more.
            </p>

            <div className="space-x-4">
              <a
                href="#"
                className="inline-block bg-sweetgreen-yellow font-medium text-base px-6 py-3 rounded-xl hover:text-sweetgreen-yellow hover:bg-sweetgreen-green-primary transition"
              >
                Download for iOS
              </a>
              <a
                href="#"
                className="inline-block bg-sweetgreen-yellow font-medium text-base px-6 py-3 rounded-xl hover:text-sweetgreen-yellow hover:bg-sweetgreen-green-primary transition"
              >
                Download for Android
              </a>
            </div>
          </div>
        </section>
      </div>
      <div>
        <img
          className="h-[800px] w-full object-cover object-top"
          src={sweetpassProgramImage}
        />
      </div>
    </div>
  );
};

export default SweetpassSection;
