import { CgMenuGridO } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi";
import Image from "next/image";

export default function Navbar({}) {
  return (
    <div className="flex items-center ">
      {/* left menu */}
      <div className="">
        <CgMenuGridO className="w-10 h-10" />
      </div>
      {/* middle logo*/}
      <div>
        <Image
          priority
          src="/images/a_house.png"
          width={80}
          height={80}
          alt=""
        />
      </div>
      {/* right authentication */}
      <div className="">
        <div className="w-10 h-10 bg-[black] rounded-full">
          <HiOutlineUser />
        </div>
      </div>
    </div>
  );
}
