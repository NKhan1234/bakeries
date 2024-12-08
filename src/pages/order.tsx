import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { products } from "@/pages/api/hello";
import Link from "next/link";

export default function Order() {
  return (
    <>
      <Navbar />
      <div className="w-full h-full px-[10%] py-[50px] z-40">
        <h1 className="text-3xl mt-8 py-[30px] font-normal sm:text-5xl font-bold bg-white tracking-wide text-stone-600 py-[30px] sm:py-[40px] px-6 sm:px-8 sm:mt-12">
          OUR PRODUCTS
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4 p-6 bg-stone-100 items-center justify-evenly">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="flex flex-col bg-white w-auto h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="w-full h-[220px] object-cover"
                />
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-md font-medium">{product.name}</h2>
                    <p className="text-sm p-2 bg-stone-500 text-white rounded-lg mt-2 sm:mt-0">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
