import img1 from "../../assets/Group.svg";
import img2 from "../../assets/icontwo.svg";
import img3 from "../../assets/icons.png";
import Container from "../container/Container";
const Facelity = () => {
  return (
    <div className="bg-[#F2F5FF] ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-6 w-full">
          <div className="flex items-center justify-center gap-4">
            <img src={img1} className="w-14 h-auto text-black" alt="" />
            <div className="">
              <h1 className="text-xl font-bold">Free Delivery</h1>
              <p>for any product delivery</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img src={img2} className="w-14 h-auto text-black" alt="" />
            <div className="">
              <h1 className="text-xl font-bold">Support 24/7</h1>
              <p>for any product delivery</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img src={img3} className="w-14 h-auto text-black" alt="" />
            <div className="">
              <h1 className="text-xl font-bold">100% Authentic</h1>
              <p>for any product delivery</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facelity;
