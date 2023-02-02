import Link from "next/link";

export default function NavBtn({ title, border, underline }) {
  return (
    <div>
      <li className="relative group mx-2 font-semibold whitespace-nowrap">
        <Link href="/lare">
          <button className={`px-2 ${border}`}>{title}</button>
        </Link>
        <div
          className={`absolute group-hover:bg-[#d8a90f] flex h-1 w-full ${underline} -bottom-[0.7rem]
          }`}
        ></div>
      </li>
    </div>
  );
}
