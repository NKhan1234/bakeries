// Cart.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../redux/cartSlice";
import Link from "next/link";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <>
      <Navbar />
      <main className="w-full h-full flex flex-col py-[60px] container mx-auto my-8 px-4 md:px-8 z-40">
        <div className="">
          <h1 className="text-center text-2xl font-bold mb-4">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty</p>
          ) : (
            <div className="relative cart-items grid items-center justify-center py-[30px] px-[10%]">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-black-2 cart-item border p-4 mb-4 flex flex-col md:flex-row"
                >
                  <div className="image-container w-full md:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-[200px] rounded"
                    />
                  </div>
                  <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex items-center">
                    <div className="">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p>${item.price.toFixed(1)}</p>
                      <p>Total: ${(item.price * item.quantity).toFixed(1)}</p>
                      <div className="flex gap-x-4">
                        <button
                          className="w-[20px] h-[20px] p-3 rounded-full bg-red-900 text-white flex items-center justify-center"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className="w-[20px] h-[20px] p-3 rounded-full bg-red-900 text-white flex items-center justify-center"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="btn1 ml-12 px-4 py-2 outline-none border-none bg-orange-400 text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="bag fixed bottom-20 right-8 z-40">
          <Link href="/cart">
            <h1 className="relative flex items-center justify-center bg-white text-black w-[40px] h-[40px] p-8 rounded-md text-2xl">
              <i className="ri-shopping-bag-4-line"></i>
            </h1>
            <p className="absolute top-[-8px] right-0 cursor-pointer flex items-center justify-center text-sm bg-red-400 text-white w-[30px] h-[30px] p-4 rounded-full text-lg">
              {cartItems.length}
            </p>
          </Link>
        </div>
        <Link href="/checkout">
          <button className="btn9 inline flex items-center justify-center text-lg font-semibold tracking-wide m-auto px-8 py-4 outline-none border-none bg-red-950 text-white">
            CHECKOUT
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
