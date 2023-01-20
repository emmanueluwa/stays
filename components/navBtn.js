export default function NavBtn({ title, border, underline }) {
  return (
    <div>
      <li className="relative group mx-2 font-semibold whitespace-nowrap">
        <button className={`px-2 ${border}`}>{title}</button>
        <div
          className={`absolute group-hover:flex hidden h-1 w-full bg-[#d8a90f] ${
            underline ? underline : "-bottom-[0.7rem]"
          }`}
        ></div>
      </li>
    </div>
  );
}
