const LocationBanner = () => {
  return (
    <div
      className={`w-full py-10 my-10 md:my-20 md:py-12 lg:py-16 px-3 bg-slate-400 bg-fixed text-background`}
      style={{ backgroundImage: 'url(./aboutBg.jpg)' }}
    >
      <div className="container p-5 space-y-10 rounded-xl sm:p-10">
        <div className="relative text-center">
          <h2 className="pb-4 font-bold text-center  md:text-5xl">Branch Address</h2>
          <p className="md:text-lg">
            Feel free to drop by our office whenever you have some time. I&apos;d
            love to catch up over a cup of coffee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationBanner;
