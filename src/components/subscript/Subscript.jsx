import Container from "../container/Container";

const Subscript = () => {
  return (
    <div className="bg-[#F2F5FF] h-[360px] py-8">
      <Container>
        <div className="space-y-5 mt-5">
          <h3 className="text-center text-3xl font-bold text-slate-700">
            Join Our Mailing List
          </h3>
          <p className="text-center">
            Sign up to receive inspiration, product updates, <br /> and special
            offers from our team.{" "}
          </p>
        </div>
        <div className="text-center pt-12 rounded-sm">
          <input type="text" placeholder="exmaple@gmail.com" className="px-10 py-3 text-left border-2 border-black " />
          <button className="px-10 pt-[10px] pb-[14px] bg-[#03344F] text-xl text-white">
            SUBMIT
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Subscript;
