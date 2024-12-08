import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { products } from "../api/hello";
import Footer from "@/components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { addItem } from "../../redux/cartSlice";
import Link from "next/link";

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const router = useRouter();
  const { productid } = router.query;

  const product = products.find((item) => item.id === Number(productid));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddItem = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <Navbar />
      <main className="w-full h-full flex flex-col gap-6 py-[40px] mt-[60px] z-40">
        <div className="relative flex flex-col gap-y-8 md:flex-row justify-center items-center gap-x-12 mt-8">
          <div className="left flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-[260px] h-[220px] md:w-[300px] h-[250px] z-30"
            />
          </div>
          <div className="grid gap-y-6">
            <div className="flex flex-row gap-x-6 md:flex-col  items-center gap-y-4">
              <h1 className="text-3xl font-semibold">{product.name}</h1>
              <div className="flex ">
                <h3 className="text-xl font-normal">${product.price}</h3>
              </div>
            </div>
            <button
              onClick={handleAddItem}
              className="btn4 px-6 py-4 outline-none border-none bg-white text-orange-400 text-sm font-semibold"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="bag fixed bottom-16 right-12 z-40 shadow-3xl">
          <Link href="/cart">
            <h1 className="relative flex items-center justify-center bg-white text-black w-[40px] h-[40px] p-8 rounded-md text-2xl">
              <i className="ri-shopping-bag-4-line"></i>
            </h1>

            <p className="absolute top-[-8px] right-0 cursor-pointer flex items-center justify-center text-sm bg-red-400 text-white w-[30px] h-[30px] p-4 rounded-full text-lg">
              {cart.length}
            </p>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
