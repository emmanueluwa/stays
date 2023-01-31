import Image from "next/image";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";

export default function CardComponent({ img, price, credit }) {
  return (
    <div className="min-w-[12rem] rounded shadow-lg">
      {/* image */}
      <div className="relative">
        <Image
          priority
          src={img}
          width={1000}
          height={1000}
          alt={credit}
          className="w-full h-20 rounded-t "
        />
        <div className="absolute right-3 bottom-3 text-white text-[20px] group cursor-pointer">
          <TiStarOutline className="" />
          <TiStarFullOutline className="text-[#d8a90f] hidden group-hover:flex absolute top-0 duration-200 ease-out" />
        </div>
        <div className="absolute bg-[#d8a90f]/95 text-white px-1 rounded text-[12px] top-2 left-2 shadow-lg">
          <p>NEW</p>
        </div>
      </div>

      {/* desctiption */}
      <div className="mt-1 ml-4 pb-2">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-[#d8a90f] rounded mr-1"></div>
          <p>Bungalow</p>
        </div>

        <p className="text-[22px] font-bold">{price}</p>
        <div className="gap-x-2">
          <div className="flex">
            <span className="font-bold pr-1">3</span>bed
            <span className="font-bold pr-1 pl-1">2</span>bath
            <span className="font-bold pr-1 pl-1">4</span>rating
          </div>

          <p>Durham</p>
          <p>England</p>
        </div>
      </div>
    </div>
  );
}
