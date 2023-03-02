import Link from "next/link";

export default function NavBtn({ title, border, underline }) {
  let link: string = ""
  switch(title) {
    case "Advertise":
      link = "/advertise"
      break;
    case "Rent":
      link = "/"
      break;
    case "Short stays":
      link = "/"
      break;
    case "About us":
      link = "/about"
      break;
    case "Blog":
      link = "/blog"
      break;
  }
  return (
    <div>
      <li className="relative group mx-2 font-semibold whitespace-nowrap">
        <Link href={link}>
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
