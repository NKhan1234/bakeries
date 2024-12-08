import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type TestimonialType = {
  id: number;
  heading: string;
  para: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    heading:
      "I love all Mama's bakery products but the chocolate overload brownie has been my all-time favourite and truly justifies its name with its rich chocolate gooeyness. Theobroma is truly one of our favourite places!",
    para: "Ashish Kumar, Bhopal",
  },
  {
    id: 2,
    heading:
      "Always a delight coming here for pastries. This Mama's outlet may not be very spacious but their pastries are lip-smacking good. Loved hazelnut pastry among the ones I tried. Value for money and a must-visit place!",
    para: "Manish Gupta, Pune",
  },
  {
    id: 3,
    heading:
      "Mama's bakery is an outlet which will always top our priority list. Scrumptious warm brownies that melt in your mouth leaving you a heavenly sensation - exactly what visiting Mama's bakery feels like.",
    para: "Sanjay Mehra, Delhi",
  },
];

export default function Testimonial() {
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  const handlePrev = () => {
    setTestimonialIndex((testimonialIndex) =>
      testimonialIndex === 0 ? testimonials.length - 1 : testimonialIndex - 1
    );
  };

  const handleNext = () => {
    setTestimonialIndex((testimonialIndex) =>
      testimonialIndex === testimonials.length - 1 ? 0 : testimonialIndex + 1
    );
  };

  useGSAP(() => {
    gsap.fromTo(
      ".tag",
      { y: -10 },
      {
        y: 10,
        duration: 1,
        yoyo: true,
        repeat: -1,
      }
    );
  });

  return (
    <div className="relative px-[10%] py-[60px] grid items-center justify-center gap-y-6 bg-white">
      <div>
        <h1 className="text-3xl font-semibold tracking-wider text-orange-700 text-center">
          TESTIMONIALS
        </h1>
      </div>
      <div className="grid items-center justify-center gap-y-6">
        <div>
          <div className="grid items-center justify-center text-center">
            <p className="text-stone-900">
              {testimonials[testimonialIndex].heading}
            </p>
            <h3 className="text-xl font-semibold text-orange-900">
              {testimonials[testimonialIndex].para}
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <p onClick={handlePrev}>
            <i className="ri-arrow-left-s-line text-2xl font-bold text-black"></i>
          </p>
          <p onClick={handleNext}>
            <i className="ri-arrow-right-s-line text-2xl font-bold text-black"></i>
          </p>
        </div>
      </div>
      <div className="w-[60px] absolute top-[14%] right-[8%]">
        <p
          className={`${
            testimonialIndex >= 0
              ? "tag-rotate tag text-orange-500"
              : "tag text-orange-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 3C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.455L2 22.5V4C2 3.44772 2.44772 3 3 3H21ZM20 5H4V18.385L5.76333 17H20V5ZM10.5153 7.4116L10.9616 8.1004C9.29402 9.0027 9.32317 10.4519 9.32317 10.7645C9.47827 10.7431 9.64107 10.7403 9.80236 10.7553C10.7045 10.8389 11.4156 11.5795 11.4156 12.5C11.4156 13.4665 10.6321 14.25 9.66558 14.25C9.12905 14.25 8.61598 14.0048 8.29171 13.6605C7.77658 13.1137 7.5 12.5 7.5 11.5052C7.5 9.75543 8.72825 8.18684 10.5153 7.4116ZM15.5153 7.4116L15.9616 8.1004C14.294 9.0027 14.3232 10.4519 14.3232 10.7645C14.4783 10.7431 14.6411 10.7403 14.8024 10.7553C15.7045 10.8389 16.4156 11.5795 16.4156 12.5C16.4156 13.4665 15.6321 14.25 14.6656 14.25C14.1291 14.25 13.616 14.0048 13.2917 13.6605C12.7766 13.1137 12.5 12.5 12.5 11.5052C12.5 9.75543 13.7283 8.18684 15.5153 7.4116Z"></path>
          </svg>
        </p>
      </div>
    </div>
  );
}
