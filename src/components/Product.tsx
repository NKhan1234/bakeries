// import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div className="product-section grid items-center justify-center gap-y-6 bg-fuchsia-200 pb-[40px]">
      <div className="text-center py-[20px]">
        <h1 className="text-xl font-bold text-amber-600 sm:text-4xl">
          Our Products
        </h1>
        <p className="text-stone-600 my-6">
          &quot;Mama&apos;s Bakery: Fresh, handcrafted treats made daily with
          love. From pastries to custom cakes, bringing sweetness to every
          moment!&quot;
        </p>
      </div>
      <div className=" grid justify-center items-center gap-y-6 py-6 px-4 lg:py-6 lg:px-4 lg:bg-white lg:flex lg:items-center lg:justify-center lg:gap-x-8 md:p-4 md:grid md:grid-cols-2 md:items-center md:justify-center md:m-auto md:gap-x-8 sm:grid sm:grid-cols-2  sm:gap-8 sm:gap-x-8 sm:py-6 px-4">
        <Link href="/order">
          <img
            src="https://www.magnoliabakery.com/cdn/shop/products/LemonBar_2PK_25859_1194x.jpg?v=1632897490"
            alt="product-img"
            className="bg-white p-4 w-[300px] h-[210px] lg:w-[220px] lg:p-4 lg:h-[200px] lg:bg-white md:w-[300px] md:p-4 md:h-[240px] md:bg-white sm:w-[300px] sm:h-[210px] sm:p-4 sm:bg-white"
          />
        </Link>
        <Link href="/order">
          <img
            src="//www.magnoliabakery.com/cdn/shop/files/HalloweenAssortment_1194x.jpg?v=1694183746"
            alt="product-img"
            className="bg-white p-4 w-[300px] h-[210px] lg:w-[220px] lg:p-4 lg:h-[200px] lg:bg-white md:w-[300px] md:p-4 md:h-[240px] md:bg-white sm:w-[300px] sm:h-[210px] sm:p-4 sm:bg-white"
          />
        </Link>
        <Link href="/order">
          <img
            src="//www.magnoliabakery.com/cdn/shop/products/ChocChunkBlondie_25804_b3b92b57-3317-4e2f-82e1-a016e744c0c5_1194x.jpg?v=1632897003"
            alt="product-img"
            className="bg-white p-4 w-[300px] h-[210px] lg:w-[220px] lg:p-4 lg:h-[200px] lg:bg-white md:w-[300px] md:p-4 md:h-[240px] md:bg-white sm:w-[300px] sm:h-[210px] sm:p-4 sm:bg-white"
          />
        </Link>
        <Link href="/order">
          <img
            src="//www.magnoliabakery.com/cdn/shop/products/BP_Cookies_6PK_0416_1194x.jpg?v=1651845857"
            alt="product-img"
            className="bg-white p-4 w-[300px] h-[210px] lg:w-[220px] lg:p-4 lg:h-[200px] lg:bg-white md:w-[300px] md:p-4 md:h-[240px] md:bg-white sm:w-[300px] sm:h-[210px] sm:p-4 sm:bg-white"
          />
        </Link>
      </div>
      <button className="btn1 inline m-auto text-md font-semibold tracking-wide outline-none border-2 border-solid border-stone-600 px-4 py-2 bg-white text-stone-600">
        <Link href="/order">VIEW MORE</Link>
      </button>
    </div>
  );
}
