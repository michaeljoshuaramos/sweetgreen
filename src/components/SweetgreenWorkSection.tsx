import sweetgreenWorkImage from "../assets/sweetgreenWorkImage.avif";

const SweetgreenWorkSection = () => {
  return (
    <div className="grid grid-cols-2 bg-sweetgreen-green-tertiary h-[800px]">
      <div className="flex items-center justify-center">
        <img
          className="h-[700px] w-[700px] rounded-3xl"
          src={sweetgreenWorkImage}
        />
      </div>
      <div>
        <section className="text-sweetgreen-black py-16 px-4 md:py-24">
          <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl md:text-base font-normal uppercase tracking-wider">
              Sweetgreen for Work
            </h1>

            <h2 className="text-6xl md:text-6xl font-light tracking-tight">
              All the ways we keep your workplace working
            </h2>

            <p className="text-base md:text-lg font-light leading-relaxed">
              <span className="font-semibold">Catering:</span> For the little
              things and the big milestones alike, we’re here to bring the plant
              party
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed">
              <span className="font-semibold">Outpost:</span> A daily batch
              delivery right to your office to keep your team firing on all
              cylinders.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed">
              <span className="font-semibold">Still WFH?</span> Learn about our
              sweetgreen credits program so your teams can fuel up with
              subsidized meals, wherever they are.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SweetgreenWorkSection;
