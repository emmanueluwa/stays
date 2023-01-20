import { CgMenuGridO } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi";
import Image from "next/image";
import NavBtn from "./navBtn";

export default function Navbar({}) {
  const buttons = [
    { title: "Rent", underline: "-bottom-[1.2]" },
    { title: "Short stays", underline: "-bottom-[1.2]" },
    { title: "Blog", underline: "-bottom-[1.2]" },
    { title: "About us", underline: "-bottom-[1.2]" },
    {
      title: "Advertise",
      border: "border p-1 rounded-[0.5rem] border-grey-900",
    },
  ];
  return (
    <div className="bg-white">
      <div className="flex justify-between  px-4 items-center max-w-[95vw] sm:max-w-[85vw] lg:max-w-[85vw] mx-auto whitespace-nowrap">
        {/* left menu */}
        <div className="lg:hidden flex items-center">
          <CgMenuGridO className="w-10 h-10" />
        </div>
        {/* middle logo*/}
        <div className="shrink-0 pr-6">
          {/* Logo */}
          <div className="">
            <Image
              priority
              src="/images/a_house.png"
              width={80}
              height={80}
              alt=""
              className="shrink-0"
            />
          </div>
        </div>

        {/* links */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-10 items-center  py-4">
            {buttons.map((button) => (
              <NavBtn
                title={button.title}
                border={button.border}
                underline={button.underline}
              />
            ))}
          </ul>
        </div>

        {/* right authentication */}
        <div className="lg:hidden flex h-full items-center">
          <div className="w-10 h-10 bg-[white] rounded-full flex justify-center ">
            <HiOutlineUser className="text-[38px]" />
          </div>
        </div>

        <div className="hidden lg:flex items-center pl-8">
          <button>Log in</button>
          <div className="bg-[#d8a90f] p-2 rounded-[0.5rem] px-4 ml-4 flex items-center">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
