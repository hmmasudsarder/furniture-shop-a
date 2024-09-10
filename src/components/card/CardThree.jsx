import image1 from "../../assets/wImage1.png";
import image2 from "../../assets/wImage2.png";
import image3 from "../../assets/wImage3.png";
import Container from "../container/Container";

const CardThree = () => {
  return (
    <Container>
      <div className="bg-white py-8 mb-20">
        <div className="flex items-center justify-center mx-5 md:mx-0">
          <div className="text-center">
            <h2 className="text-2xl font-bold py-2">How It Works</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-7 mx-20 mb-7">
          <div className="">
            <img src={image1} className="" alt="" />
            <h2 className="text-xl font-bold pt-5 text-center">
              Purchase Securely
            </h2>
            <p className="text-center py-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="">
            <img src={image2} className="" alt="" />
            <h2 className="text-xl font-bold pt-5 text-center">
              Ships From Warehouse
            </h2>
            <p className="text-center py-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="">
            <img src={image3} alt="" />
            <h2 className="text-xl font-bold pt-5 text-center">
              Style Your Room
            </h2>
            <p className="text-center py-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardThree;
