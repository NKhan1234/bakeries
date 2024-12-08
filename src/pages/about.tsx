import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="py-[50px] px-[5%] sm:px-[3%] sm:px-[5%] md:about-section grid items-center justify-center py-[80px] px-[10%] text-center">
        <div className="pt-8 m-8 sm:about-header pt-12 m-12">
          <h1 className="text-4xl font-medium mb-2 sm:text-5xl font-semibold mb-4">
            About Us
          </h1>
          <p className="text-md sm:text-lg">
            A bakery is a cozy spot filled with the aroma of freshly baked
            bread, cakes, and pastries, bringing warmth and delight to every
            visitor.
          </p>
        </div>
        <div className="about-content flex items-center justify-center  flex-col">
          <img
            src="/bakery.png"
            alt="About Mama's Bakery"
            className="w-[360px] sm:about-image w-[550px] flex items-center justify-center"
          />
          <div className="about-text grid gap-y-4 mt-12 text-stone-800">
            <p className=" m-auto">
              Founded in 2004, Mama&#39;s Bakery is a beloved neighborhood
              bakery known for its handcrafted, fresh-baked goods made from
              scratch daily. What began as a small family-owned bakery has grown
              into a staple for locals, thanks to its commitment to quality
              ingredients and warm, welcoming atmosphere.
            </p>
            <p className=" m-auto">
              Mama’s Bakery specializes in a variety of treats, from artisan
              bread, pastries, and cakes to seasonal specialties, offering
              something delicious for every palate. Driven by a passion for
              traditional baking methods and customer satisfaction, Mama&#39;s
              Bakery continues to bring joy to the community, one pastry at a
              time.
            </p>
            <p className=" m-auto">
              Whether you&#39;re in for a morning coffee and croissant, a fresh
              loaf for dinner, or a custom cake for a special occasion,
              Mama&#39;s Bakery is dedicated to making every visit memorable.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
