import Container from "../container/Container";
import image1 from "../../assets/cimage1.png";
import image2 from "../../assets/cimage2.png";
import image3 from "../../assets/cimage3.png";

const CardTwo = () => {
  return (
    <Container>
      <div className="bg-white py-8 border-b-2">
        <div className="flex items-center justify-center mx-5 md:mx-0">
          <div className="text-center">
            <h2 className="text-2xl font-bold py-2">Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-7 mx-20 mb-7">
          <div className="">
            <img src={image1} className="" alt="" />
            <h2 className="text-xl font-semibold py-3 text-center">Dining</h2>
          </div>
          <div className="">
            <img src={image2} className="" alt="" />
            <h2 className="text-xl font-semibold py-3 text-center">Living</h2>
          </div>
          <div className="">
            <img src={image3} alt="" />
            <h2 className="text-xl font-semibold py-3 text-center">Bedroom</h2>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default CardTwo;
