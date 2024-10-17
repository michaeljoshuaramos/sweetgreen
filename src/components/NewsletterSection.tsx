const NewsletterSection = () => {
  return (
    <div className="border-t border-sweetgreen-black text-sweetgreen-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2">
          <div className="border-r border-sweetgreen-black py-12 flex flex-col gap-y-4">
            <h1 className="text-base font-light uppercase">
              Join Our Newsletter
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed">
              Sign up for exclusive promos, new menu drops, store openings, and
              more.
            </p>
          </div>
          <div className="p-12 flex flex-col gap-y-4">
            <h1 className="text-base font-light uppercase">Download The App</h1>
            <div className="flex flex-col">
              <a
                href="#"
                className="font-light text-lg md:text-xl hover:text-sweetgreen-bg-sweetgreen-green-secondary"
              >
                iOS →
              </a>
              <a
                href="#"
                className="font-light text-lg md:text-xl hover:text-sweetgreen-bg-sweetgreen-green-secondary"
              >
                Android →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
