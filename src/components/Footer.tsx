import { useState, useEffect } from "react";

export default function Footer() {
  const [moveup, setMoveup] = useState<boolean>(false);
  const [showtext, setShowtext] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setShowtext(true);
  }

  useEffect(() => {
    const handleMove = () => {
      setMoveup(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleMove);

    return () => {
      window.removeEventListener("scroll", handleMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center px-4 py-10 bg-stone-200 text-black gap-8">
      <div className="relative text-stone-500 mr-0 lg:mr-8">
        <h1 className="logo-h1 text-6xl font-bold">Mama&apos;s</h1>
        <p className="absolute top-[75%] right-0">Bakery</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <p className="footer-p text-md font-semibold">OUR STORY</p>
            <p className="footer-p text-md font-semibold">OUR PRODUCTS</p>
            <p className="footer-p text-md font-semibold">SPECIALITY</p>
            <p className="footer-p text-md font-semibold">WHY US</p>
          </div>

          <div className=" flex flex-col gap-2">
            <p className="footer-p text-md font-semibold">REFUND POLICY</p>
            <p className="footer-p text-md font-semibold">PRIVACY POLICY</p>
            <p className="footer-p text-md font-semibold">ORDER POLICY</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-6">
            <div>
              <p>
                <i className="ri-phone-line text-sm"></i> +44 8436328322
              </p>
              <p>
                <i className="ri-mail-line text-sm"></i> contact@mamabakery.in
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-4 ">
            <i className="icon ri-youtube-line w-[30px] h-[30px] p-4 flex items-center justify-center rounded-full border border-solid border-orange-500 text-orange-500 text-lg font-semibold"></i>
            <i className="icon ri-instagram-line w-[30px] h-[30px] p-4 flex items-center justify-center rounded-full border border-solid border-orange-500 text-orange-500 text-lg font-semibold"></i>
            <i className="icon ri-facebook-fill w-[30px] h-[30px] p-4 flex items-center justify-center rounded-full border border-solid border-orange-500 text-orange-500 text-lg font-semibold"></i>
          </div>

          <div className="mt-4">
            <p className="text-md font-normal tracking-wide ml-2">
              Sign up for updates
            </p>
            {showtext ? (
              <p>Thank you for subscribing!</p>
            ) : (
              <form className="flex mt-2" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email.."
                  className="px-2 sm:px-4 py-2 border border-orange-500 rounded-l-full text-sm text-orange-500 focus:outline-none focus-within:shadow-lg"
                />
                <button
                  type="submit"
                  className="btn10 px-2 text-sm sm:px-4 py-2 border border-orange-500 text-normal rounded-r-full text-orange-500 font-bold bg-white"
                >
                  SIGN UP
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {moveup && (
        <div
          className="fixed bottom-8 right-4 cursor-pointer"
          onClick={scrollToTop}
        >
          <i className="ri-arrow-up-s-line w-10 h-10 p-3 bg-white rounded-full shadow-md text-stone-500 text-2xl"></i>
        </div>
      )}
    </div>
  );
}
