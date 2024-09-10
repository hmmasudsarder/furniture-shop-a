import hero from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div>
      <div className="relative top-0 left-0 right-0">
        <img src={hero} className="w-full h-9/12" alt="" />
        <div className="absolute hidden md:block bg-[#DFE9F4] top-40 md:left-[720px]  md:w-[600px] md:h-[440px] rounded-xl">
          <div className="w-[540px] mx-auto flex items-center h-[350px]">
            <div className="pt-20">
              <h2 className="text-2xl lg:mb-10">New Arrival</h2>
              <h2 className="text-2xl font-semibold mb-3">
                Discover Our New Collection
              </h2>
              <p className="mb-3 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, <br/> luctus nec ullamcorper mattis.
              </p>
              <button className="lg:mt-14 py-4 px-9 bg-[#054C73] rounded-3xl text-white font-semibold">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
