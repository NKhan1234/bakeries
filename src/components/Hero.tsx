import Image from "next/image";
import { useState } from "react";

const images: string[] = ["/cakes.png", "/cup-cake.png", "/small-cake.png"];
export default function Hero() {
  const [currentindex, setCurrentindex] = useState<number>(0);
  const handlePrev = () => {
    setCurrentindex((currentindex) =>
      currentindex === 0 ? images.length - 1 : currentindex - 1
    );
  };
  const handleNext = () => {
    setCurrentindex((currentindex) =>
      currentindex === images.length - 1 ? 0 : currentindex + 1
    );
  };
  return (
    <div className="w-full h-full grid items-center justify-center gap-y-6">
      <div className="mt-16 flex items-center justify-center">
        <Image
          src={images[currentindex]}
          alt="images"
          width={900}
          height={400}
          className="w-[300px] h-[280px] lg:rounded lg:w-[900px] lg:h-[380px] md:w-[700px] md:h-[350px] sm:w-[550px] sm:h-[320px]"
        />
      </div>
      <div className="flex items-center justify-evenly">
        <p onClick={handlePrev}>
          <i className="ri-arrow-left-s-line text-2xl font-bold text-white w-[30px] h-[30px] p-2 rounded bg-orange-600"></i>
        </p>
        <div className="flex items-center justify-center mb-12">
          {currentindex === 0 && (
            <p>
              <i className="ri-cake-2-line text-3xl font-bold text-orange-600"></i>
            </p>
          )}
          {currentindex === 1 && (
            <p>
              <i className="ri-cake-3-line text-3xl font-bold text-orange-600"></i>
            </p>
          )}
          {currentindex === 2 && (
            <p>
              <i className="ri-cup-line text-3xl font-bold text-orange-600"></i>
            </p>
          )}
        </div>
        <p onClick={handleNext}>
          <i className="ri-arrow-right-s-line text-2xl font-bold text-white w-[30px] h-[30px] p-2 rounded bg-orange-600"></i>
        </p>
      </div>
    </div>
  );
}
