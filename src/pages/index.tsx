import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import localFont from "next/font/local";
import About from "../components/About";
import Product from "../components/Product";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  );
}
