import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [showproducts, setShowproducts] = useState<boolean>(false);
  const [shownav, setShownav] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showproducts) {
      gsap.from(".product", {
        opacity: 0,
        x: 20,
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [showproducts]);

  const handleShownav = () => {
    setShownav((prev) => !prev);
  };
  const handleEnter = () => {
    setShowproducts(true);
  };

  const handleLeave = () => {
    setShowproducts(false);
  };
  useEffect(() => {
    if (shownav) {
      gsap.from(".nav", {
        opacity: 0,
        x: 30,
        duration: 1,
      });
    }
  }, [shownav]);
  useEffect(() => {
    const handleRemoveNav = () => {
      setShownav(false);
    };
    if (shownav) {
      document.body.addEventListener("mousedown", handleRemoveNav);
    }
    return () => {
      document.body.removeEventListener("mousedown", handleRemoveNav);
    };
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navRef.current?.classList.add("navbar");
        setShownav(false);
      } else {
        navRef.current?.classList.remove("navbar");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={navRef}
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-stone-200 text-black z-50"
      >
        <div className="grid items-right justify-center relative leading-3">
          <h1 className="logo-h1 text-5xl font-bold">Mama&apos;s</h1>
          <p className="absolute bottom-[-2px] right-0">Bakery</p>
        </div>

        <div className="hidden sm:hidden lg:flex items-center justify-between gap-x-8 ">
          <p className="font-semibold">
            <Link href="/about">ABOUT US</Link>
          </p>
          <p
            onMouseOver={handleEnter}
            onMouseOut={handleLeave}
            className="font-semibold relative"
          >
            <Link href="/order">PRODUCTS</Link>{" "}
            <span>
              {showproducts ? (
                <i className="ri-arrow-down-s-line"></i>
              ) : (
                <i className="ri-arrow-up-s-line"></i>
              )}
            </span>
          </p>
          {showproducts && (
            <div
              onMouseOver={handleEnter}
              onMouseOut={handleLeave}
              id="products"
              className="product absolute top-[65%] border border-solid border-orange-500 z-50 w-[270px] right-[25%] bg-white text-orange-500 rounded px-6 py-4 flex items-center justify-between"
            >
              <div className="grid gap-y-2">
                <p className="product">
                  <Link href="/order">Cakes</Link>
                </p>
                <p className="product">
                  <Link href="/order">Cookies</Link>
                </p>
                <p className="product">
                  <Link href="/order">Tea Cookies</Link>
                </p>
                <p className="product">
                  <Link href="/order">Brownies</Link>
                </p>
                <p className="product">
                  <Link href="/order">Brownies</Link>
                </p>
                <p className="product">
                  <Link href="/order">Pastries</Link>
                </p>
              </div>
            </div>
          )}
          <p className="font-semibold">
            <Link href="/contact">CONTACT US</Link>{" "}
          </p>
          <button className="btn px-6 py-4 bg-stone-600 text-white outline-none border-none font-semibold text-sm tracking-wide">
            <Link href="/order">ORDER ONLINE</Link>
          </button>
        </div>

        {shownav && (
          <div className="nav absolute top-[80%] py-[40px] w-[200px] md:absolute top-[80%] py-[40px] right-[5%] grid items-center justify-center gap-y-8 lg:hidden bg-white w-[300px] ">
            <p className="font-semibold">
              <Link href="/about">ABOUT US</Link>
            </p>
            <p
              onMouseOver={handleEnter}
              onMouseOut={handleLeave}
              className="font-semibold relative"
            >
              <Link href="/order">PRODUCTS</Link>{" "}
              <span>
                {showproducts ? (
                  <i className="ri-arrow-down-s-line"></i>
                ) : (
                  <i className="ri-arrow-up-s-line"></i>
                )}
              </span>
            </p>
            {showproducts && (
              <div
                onMouseOver={handleEnter}
                onMouseOut={handleLeave}
                id="products"
                className="product absolute top-[37%] border border-solid border-stone-500 z-50 w-[180px] right-[-50px] bg-white text-orange-500 rounded px-3 py-2 flex items-center justify-between"
              >
                <div className="grid">
                  <p className="product">
                    <Link href="/order">Cakes</Link>
                  </p>
                  <p className="product">
                    <Link href="/order">Cookies</Link>
                  </p>
                  <p className="product">
                    <Link href="/order">Tea Cookies</Link>
                  </p>
                  <p className="product">
                    <Link href="/order">Brownies</Link>
                  </p>
                  <p className="product">
                    <Link href="/order">Brownies</Link>
                  </p>
                  <p className="product">
                    <Link href="/order">Pastries</Link>
                  </p>
                </div>
              </div>
            )}
            <p className="font-semibold">
              <Link href="/contact">CONTACT US</Link>{" "}
            </p>
            <button className="btn px-6 py-4 bg-stone-600 text-white outline-none border-none font-semibold text-sm tracking-wide">
              <Link href="/order">ORDER ONLINE</Link>
            </button>
          </div>
        )}

        <div className="md:block lg:hidden" onClick={handleShownav}>
          <p className="">
            <i className="ri-menu-line p-2 bg-stone-600 text-white"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
