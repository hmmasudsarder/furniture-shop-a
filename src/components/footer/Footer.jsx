import Container from "../container/Container";
import image1 from "../../assets/Ig-1.jpg"
import image2 from "../../assets/Ig-2.jpg"
import image3 from "../../assets/Ig-3.jpg"
import image4 from "../../assets/Ig-4.jpg"

const Footer = () => {
  return (
    <div className="bg-[#03344F] h-[386px]">
      <Container>
        <div className="md:flex items-center justify-center gap-5">
          <div className="flex justify-center flex-col text-left w-[380px]">
            <h3 className="text-2xl font-bold text-white mb-11">Beauty Care</h3>
            <p className="mb-6 text-white text-left leading-loose">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <h3 className="text-2xl font-bold text-white">Follow Us</h3>
          </div>
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-white">Instagram Shop</h3>
            <div className="flex items-center justify-center gap-5 mt-4">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
