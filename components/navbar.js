import { CgMenuGridO } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi";
import Image from "next/image";
import NavBtn from "./navBtn";

export default function Navbar({}) {
  const buttons = [
    { title: "Rent" },
    { title: "Short stays" },
    { title: "Blog" },
    { title: "About us" },
    { title: "Advertise", border: "border" },
  ];
  return (
    <div className="flex justify-between bg-white px-4 items-center">
      {/* left menu */}
      <div className="lg:hidden flex items-center">
        <CgMenuGridO className="w-10 h-10" />
      </div>
      {/* middle logo*/}
      <div className="">
        {/* Logo */}
        <div className="">
          <Image
            priority
            src="/images/a_house.png"
            width={80}
            height={80}
            alt=""
            className=""
          />
        </div>
      </div>

      {/* links */}
      <div className="hidden lg:flex">
        <ul className="flex space-x-10   py-4">
          {buttons.map((button) => (
            <NavBtn title={button.title} />
          ))}
        </ul>
      </div>

      {/* right authentication */}
      <div className="lg:hidden flex h-full items-center">
        <div className="w-10 h-10 bg-[white] rounded-full flex justify-center ">
          <HiOutlineUser className="text-[38px]" />
        </div>
      </div>

      <div className="hidden lg:flex items-center">
        <button>Log in</button>
        <div className="bg-[#d8a90f] p-2 rounded-[0.5rem] px-4 ml-4 ">
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}
