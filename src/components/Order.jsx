import { RiDeleteBin6Line } from "react-icons/ri";

function Order() {
  return (
    <div
      className="bg-[#262837] p-4 roudedxl
             mb-4 "
    >
      <div className="grid grid-cols-6 mb-4">
        {/* Order desc */}
        <div className="col-span-4 flex item-center gap-3">
          <img
            src="comida.png"
            alt="comida"
            className="w-10 h-10 object-cover"
          />
          <div>
            <h5 className="text-sm">Spicy Seasoned...</h5>
            <p className="text-sm text-gray-500">$2.29</p>
          </div>
        </div>
        {/* Qty */}
        <div>
          <span>2</span>
        </div>
        {/* Price */}
        <div>
          <span>$4.58</span>
        </div>
      </div>
      {/* Note */}
      <div className="grid grid-cols-6 items-center">
        <form className="col-span-5">
          <input
            type="text"
            className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
            placeholder="Oder note..."
          />
        </form>
        <div>
          <button className="border border-red-500 p-2 rounded-lg">
            <RiDeleteBin6Line className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
