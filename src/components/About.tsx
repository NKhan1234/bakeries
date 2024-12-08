import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white px-[10%] py-[50px]">
      <div className="">
        <div className="grid items-center justify-center">
          <h1 className="text-2xl font-semibold text-orange-400 text-center sm:text-2xl sm:font-semibold sm:text-orange-400 md:text-2xl md:font-semibold md:text-orange-400 lg:text-3xl lg:font-semibold lg:text-orange-400">
            FOOD IS GOOD, LIFE IS GOOD
          </h1>
          <p className="sm:my-4 sm:text-md sm:font-normal lg:my-4 text-center text-stone-600">
            Since 2004, we&apos;ve been serving our guests the best quality
            treats, <br /> traditionally made and presented with care.
          </p>
        </div>
        <div className="lg:flex items-center justify-center gap-x-6 sm:grid sm:items-center sm:justify-center gap-y-6">
          <div className="grid gap-y-8">
            <div className="">
              <h1 className="text-xl font-medium sm:text-2xl sm:font-medium lg:text-2xl text-center font-semibold text-orange-500">
                AUTHENTIC RECIPES
              </h1>
              <p className="text-sm font-normal text-center sm:text-sm sm:font-normal sm:text-center lg:text-center text-stone-600">
                Our products are based on traditional home-style recipes using
                fresh ingredients.
              </p>
            </div>
            <div className="">
              <h1 className="text-xl font-medium sm:text-2xl sm:font-medium lg:text-2xl text-center font-semibold text-orange-500">
                BAKED WITH LOVE
              </h1>
              <p className="text-sm font-normal text-center sm:text-sm sm:font-normal sm:text-center lg:text-center text-stone-600">
                Our passion for baking is poured into every recipe, serving
                smiles on a plate everyday.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src="/bakery.png"
              alt="bakery"
              width={1050}
              height={1000}
              className="hidden sm:hidden lg:block"
            />
          </div>
          <div className="grid gap-y-8">
            <div className="">
              <h1 className="text-xl font-medium sm:text-2xl sm:font-medium lg:text-2xl text-center font-semibold text-orange-500">
                COMMIT TO QUALITY
              </h1>
              <p className="text-sm font-normal text-center sm:text-sm sm:font-normal sm:text-center lg:text-center text-stone-600">
                From our ingredients to our kitchen operations & guest services,
                we always prioritize quality.
              </p>
            </div>
            <div className="">
              <h1 className="text-xl font-medium sm:text-2xl sm:font-medium lg:text-2xl text-center font-semibold text-orange-500">
                HONESTLY PRICED
              </h1>
              <p className="text-sm font-normal text-center sm:text-sm sm:font-normal sm:text-center lg:text-center text-stone-600">
                We constantly strive to offer the best products at the right
                prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
