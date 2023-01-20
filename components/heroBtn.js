export default function HeroBtn({ title, underline }) {
  return (
    <div className="relative group">
      <div className="text-white font-semibold px-2">
        <button>{title}</button>
      </div>
      <div
        className={`absolute h-[3px] group-hover:bg-[#d8a90f] ${underline} w-full  duration-200 ease-out`}
      ></div>
    </div>
  );
}
