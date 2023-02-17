import Link from "next/link";

export default function SideBar() {
    return (
      <aside className="w-full sm:w-1/3 md:w-1/4 px-2 items-end">
        <div className="sticky top-0 p-4 w-full">
          <div className="flex items-center py-4 font-bold text-[18px]">
            <div className="w-4 h-4 bg-[#d8a90f] rounded mr-1"></div>
            <p>Need help?</p>
          </div>
          <p>Contact us by <Link href="/contact">email</Link></p>
        </div>
      </aside>
    )
}