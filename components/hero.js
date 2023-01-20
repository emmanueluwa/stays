import Image from "next/image";
import HeroBtn from "./heroBtn";

export default function Hero() {
  const buttons = [
    { title: "RENT", underline: "bg-[#d8a90f]" },
    { title: "SHORT STAYS" },
    { title: "FEATURED" },
    { title: "FORUM" },
  ];
  return (
    <div>
      <div className="h-[10rem] flex">
        <div className="absolute z-0 w-full ">
          <div className="bg-black/50 absolute z-20 w-full h-[30rem]"></div>
          <Image
            priority
            src="/images/pets_couch.png"
            width={1000}
            height={1000}
            alt=""
            className="absolute object-cover w-full h-[30rem]"
          />
        </div>
        <div className="relative z-30 flex flex-col items-center w-full pt-10">
          <p className="text-white text-[50px] font-bold">Pet friendly stays</p>
          <p className="text-white text-[20px]">
            Connect with landlords or roommates that love animals like we do
          </p>
          <ul className="">
            <div className="pt-10 flex space-x-5">
              {buttons.map((button) => (
                <HeroBtn title={button.title} underline={button.underline} />
              ))}
            </div>
          </ul>
          {/* input */}
          <div className="relative pt-10">
            <input
              type="search"
              placeholder="Search City, Town, or Station"
              className="outline-0 bg-white py-4 w-[35rem] rounded pl-5 placeholder:text-gray-500 placeholder:text-[20px]"
            />
            <div className="absolute w-5 h-5 rounded bg-[#d8a90f]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
