import {
  RiHome6Line,
  RiLogoutBoxLine,
  RiMailLine,
  RiNotification3Line,
  RiPercentLine,
  RiPieChartLine,
  RiSettings4Line,
} from "react-icons/ri";

export default function Sidebar({ showMenu }) {
  return (
    <div
      className={`bg-[#1f1d2b] fixed lg:left-0 w-28 h-full flex flex-col justify-between rounded-tr-xl rounded-br-xl transition-all z-10
      ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl transition-colors">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white group-hover:bg-[#ec7c6a] group-hover:text-white"
            >
              <RiPercentLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white group-hover:bg-[#ec7c6a] group-hover:text-white"
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white group-hover:bg-[#ec7c6a] group-hover:text-white"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white group-hover:bg-[#ec7c6a] group-hover:text-white"
            >
              <RiNotification3Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white group-hover:bg-[#ec7c6a] group-hover:text-white"
            >
              <RiLogoutBoxLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
