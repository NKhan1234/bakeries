import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type CartItem = {
  id: number | string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function Checkout() {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items as CartItem[]
  );

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col gap-y-8 lg:flex-row justify-center lg:gap-x-12 px-[5%] py-[130px]">
        <div className="px-8 py-4 border-2 border-solid border-stone-400 rounded-xl">
          <h1 className="text-3xl font-bold mb-4">Billing Details</h1>
          <div className="flex items-center justify-center flex-col">
            <form action="" className="grid gap-y-8">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-[300px] lg:w-[400px] outline-none px-3 py-2 border-2 border-solid border-stone-300 rounded-lg placeholder:text-stone-400 text-stone-400"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-[300px] lg:w-[400px] outline-none px-3 py-2 border-2 border-solid border-stone-300 rounded-lg placeholder:text-stone-400 text-stone-400"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="w-[300px] lg:w-[400px] outline-none px-3 py-2 border-2 border-solid border-stone-300 rounded-lg placeholder:text-stone-400 text-stone-400"
              />
              <input
                type="text"
                placeholder="State / County"
                className="w-[300px] lg:w-[400px] outline-none px-3 py-2 border-2 border-solid border-stone-300 rounded-lg placeholder:text-stone-400 text-stone-400"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-[300px] lg:w-[400px] outline-none px-3 py-2 border-2 border-solid border-stone-300 rounded-lg placeholder:text-stone-400 text-stone-400"
              />
            </form>
            <div className="flex gap-x-8 mt-8">
              <button className="px-6 py-2 outline-none border-none bg-sky-700 text-white">
                By UPI
              </button>
              <button className="px-6 py-2 outline-none border-none bg-sky-500 text-white">
                <span>
                  <i className="ri-google-fill"></i>
                </span>{" "}
                Pay
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 border-2 border-solid border-stone-400 rounded-xl">
          <h1 className="text-3xl font-bold">Your Order</h1>
          <div className="relative cart-items grid items-center justify-center py-[30px] px-[10%]">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-black-2 cart-item border p-4 mb-4 flex flex-col md:grid"
              >
                <div className="image-container w-full flex flex-col sm:flex-row">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[200px] object-cover lg:w-[100px] rounded-md"
                  />
                  <div className="ml-4 md:mt-4 flex pt-4">
                    <div>
                      <h2 className="text-xl lg:text-sm font-normal">
                        {item.name}
                      </h2>
                      <p>${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right mt-8">
            <h2 className="text-2xl font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </h2>
          </div>
          <div className="bag fixed bottom-20 right-8 z-40">
            <Link href="/cart">
              <a className="relative flex items-center justify-center bg-white text-black w-[40px] h-[40px] p-8 rounded-md text-2xl">
                <i className="ri-shopping-bag-4-line"></i>
              </a>
              <span className="absolute top-[-8px] right-0 cursor-pointer flex items-center justify-center text-sm bg-red-400 text-white w-[30px] h-[30px] p-4 rounded-full text-lg">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
