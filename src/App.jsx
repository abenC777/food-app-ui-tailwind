import {
  RiAddLine,
  RiArrowDownLine,
  RiCloseLine,
  RiMenu3Fill,
  RiPieChartLine,
  RiSearch2Line,
  RiUser3Line,
} from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";
import { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Card from "./components/Card";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [orders, setOrders] = useState([
    {
      img: "comida.png",
      description: "Spicy seasoned ,seafood noodles",
      price: "2.29",
      inventory: "20",
    },
    {
      img: "dish.png",
      description: "Fresh Vegies Salad with cheese",
      price: "3.29",
      inventory: "10",
    },
    {
      img: "comida.png",
      description: "Spicy seasoned ,seafood noodles",
      price: "2.29",
      inventory: "20",
    },
    {
      img: "dish.png",
      description: "Fresh Vegies Salad with cheese",
      price: "3.29",
      inventory: "10",
    },
    {
      img: "comida.png",
      description: "Spicy seasoned ,seafood noodles",
      price: "2.29",
      inventory: "20",
    },
    {
      img: "dish.png",
      description: "Fresh Vegies Salad with cheese",
      price: "3.29",
      inventory: "10",
    },
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleCart = () => {
    setShowOrder(!showOrder);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Cart toggleCart={toggleCart} showOrder={showOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2" onClick={toggleCart}>
          <RiPieChartLine />
        </button>
        <button className="p-2" onClick={toggleMenu}>
          {showMenu ? (
            <RiCloseLine className="text-white" />
          ) : (
            <RiMenu3Fill className="text-white" />
          )}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Cards */}
            {orders.map((order) => {
              return (
                <Card
                  img={order.img}
                  description={order.description}
                  price={order.price}
                  inventory={order.inventory}
                />
              );
            })}
            <Card
              img="comida.png"
              description="Spicy seasoned seafood noodles"
              price="2.29"
              inventory="20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
