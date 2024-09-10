import Container from "../container/Container";
import image1 from "../../assets/card1.jpg";
import image2 from "../../assets/card2.jpg";
import image3 from "../../assets/card3.png";

const Card = () => {
  return (
    <div>
      <Container>
        <div className="bg-white py-8">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold py-2 ">
                Inspiration Collection
              </h2>
              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-20 md:mt-20 mb-7">
            <div className="">
                <img src={image1} className="" alt="" />
            </div>
            <div className="">
                <img src={image2} className="md:-mt-10" alt="" />
            </div>
            <div className="">
                <img src={image3} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Card;
