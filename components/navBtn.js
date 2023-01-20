export default function NavBtn({ title }) {
  return (
    <div>
      <li className="relative group mx-2 font-semibold">
        <button className="">{title}</button>
        <div className="absolute group-hover:flex hidden h-1 w-full bg-[#d8a90f] -bottom-[1.2]"></div>
      </li>
    </div>
  );
}
