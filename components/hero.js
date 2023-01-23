import Image from "next/image";
import HeroBtn from "./heroBtn";
import { FaSearchLocation } from "react-icons/fa";

export default function Hero() {
  const buttons = [
    { title: "RENT", underline: "bg-[#d8a90f]" },
    { title: "SHORT STAYS" },
    { title: "FEATURED", css: "hidden sm:block" },
    { title: "FORUM" },
  ];
  return (
    <div className="h-[25rem] sm:h-[27rem] flex overflow-hidden">
      <div className="absolute z-0 w-full ">
        <div className="bg-black/50 absolute z-20 w-full h-[26rem] "></div>
        <Image
          priority
          src="/images/pets_couch.png"
          width={1000}
          height={1000}
          alt=""
          className="object-cover w-full h-[26rem] sm:h-[26rem]"
        />
      </div>
      <div className="relative z-30 flex flex-col items-center w-full pt-10">
        <p className="text-white text-[33px] sm:text-[50px] font-bold">
          Pet friendly stays
        </p>
        <p className="text-white pt-1 sm:pt-0 sm:text-[20px]">
          Connect with landlords or room mates that love animals like we do
        </p>

        <ul className="">
          <div className="pt-10 flex space-x-7 sm:space-x-5">
            {buttons.map((button, id) => (
              <HeroBtn
                title={button.title}
                underline={button.underline}
                css={button.css}
                key={id}
              />
            ))}
          </div>
        </ul>
        {/* input */}
        <div className="relative mt-10">
          <input
            type="search"
            placeholder="Search City, Town, or Station"
            className="outline-0 bg-white py-4 w-[27rem] sm:w-[35rem] rounded pl-5 placeholder:text-gray-500 placeholder:text-[20px]"
          />
          <div className="cursor-pointer justify-center flex items-center absolute w-[2.5rem] h-[2.5rem] rounded bg-[#d8a90f] top-[0.45rem] right-1.5">
            <FaSearchLocation className=" text-[24px] " />
          </div>
        </div>
      </div>
    </div>
  );
}
