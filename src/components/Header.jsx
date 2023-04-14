import { RiArrowDownLine, RiSearch2Line } from "react-icons/ri";

function Header() {
  return (
    <header className="p-4">
      {/* Title and Search */}
      <div
        className="flex flex-col md:flex-row
       md:justify-between md:items-center mb-6"
      >
        <div>
          <h1 className="text-2xl text-gray-300">Fancy Restaurant</h1>
          <p className="text-gray-500">{new Date().toLocaleString() + ""}</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              placeholder="Search"
              type="text"
              className="bg-[#1f1d2b] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a
          href="#"
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a] "
        >
          Hot Dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Cold Dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Soup
        </a>
        <a href="#" className="py-2 pr-4">
          Grill
        </a>
      </nav>
    </header>
  );
}

export default Header;
