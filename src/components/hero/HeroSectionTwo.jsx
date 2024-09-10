import Container from "../container/Container";
import imag from "../../assets/hero2.jpg";
import ima from "../../assets/hiddenImage.png";

const HeroSectionTwo = () => {
  return (
    <div className="bg-[#F2F5FF] h-[874px]">
      <Container>
        <div className="flex items-center justify-between gap-10 mx-20">
          <div className="flex justify-center gap-5 flex-col w-[414px] text-left">
            <h3 className="text-2xl font-bold mt-96">Beautify Your Space</h3>
            <p className="text-[#666666] leading-loose">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <button className="bg-[#054C73] py-3 w-4/12 rounded-full text-white font-semibold">Learn More</button>
          </div>
          <div className="">
            <img
              src={imag}
              className="-mt-12 absolute -ml-52 z-10 rounded-tl-[3.5rem] rounded-br-[3.5rem]"
              alt=""
            />
            <div className="">
                <img src={ima} className="relative top-32" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSectionTwo;
