import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Container from "../container/Container";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "Doctors", link: "/doctors" },
    { name: "Products", link: "/Products" },
    { name: "Gallery", link: "/gallery" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full fixed top-0 z-50 left-0 bg-white">
        <div className="max-w-screen-xl mx-auto md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
            Furniture
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden"
          >
            {!open && <CiMenuBurger />}
            {open && <IoIosCloseCircleOutline className="" />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100`}
          >
            {Links.map((link) => (
              <li key={link.name} className="text-xl md:ml-14 md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-500 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
