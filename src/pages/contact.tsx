import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const subject: string[] = [
  "Choose you subject",
  "Order",
  "Careers",
  "Feedback",
];
export default function Contact() {
  const [showtext, setShowtext] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setShowtext(true);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <Navbar />
      <div className="grid  justify-center py-[120px] px-[10%]">
        <div className="text-center">
          <h1 className="text-4xl font-smibold mb-8">Contact Us</h1>
          <p>
            We would love to hear from you. Share your thoughts and queries with
            us!
          </p>
        </div>
        <div className="flex justify-center mt-12 gap-x-12">
          <div className="">
            <form onSubmit={handleSubmit} className="grid items-center gap-y-6">
              <div className="flex gap-x-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-none w-[240px] border-none py-2 px-2 rounded text-md font-normal placeholder:text-black focus:border-2-blue-500 focus-within:shadow-2xl focus-visible:ring"
                />
                <input
                  type="text"
                  placeholder="Contact no."
                  className="outline-none w-[240px] border-none py-2 px-2 rounded placeholder:text-black focus:border-2-blue-500 focus-within:shadow-2xl focus-visible:ring"
                />
              </div>
              <div className="flex gap-x-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none w-[240px] border-none py-2 px-2 rounded placeholder:text-black focus:border-2-blue-500 focus-within:shadow-2xl focus-visible:ring"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="outline-none w-[240px] border-none py-2 px-2 rounded placeholder:text-black focus:border-2-blue-500 focus-within:shadow-2xl focus-visible:ring"
                />
              </div>
              <div className="">
                <select className="outline-none w-[505px] border-none py-2 px-2 rounded placeholder:text-black focus:border-2-blue-500 focus-within:shadow-2xl focus-visible:ring">
                  {subject.map((sub, idx) => (
                    <option
                      key={idx}
                      className="outline-none w-[240px] border-none py-2 px-2 rounded placeholder:text-black focus:border-2-blue-500 focus-within:shadow-2xl focus-visible:ring"
                    >
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <textarea
                  name=""
                  cols={59}
                  rows={5}
                  className="textarea p-2 outline-none rounded focus:border-2-blue-500 placeholder:text-black focus-within:shadow-2xl focus-visible:ring"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn12 tracking-wide inline w-[20%] text-white px-6 py-2 bg-orange-400"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="">
            <div className="">
              <h2 className="text-black text-2xl font-semibold mb-2 tracking-wide">
                Contact Detail
              </h2>
            </div>
            <div className="">
              <div className="mb-2">
                <p>
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>{" "}
                  +91-8777982882
                </p>
                <p>
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>{" "}
                  mamabakery@gmail.com
                </p>
              </div>
              <div className="grid gap-y-2 mt-4">
                <p className="text-md font-bold tracking-wide tracking-wide pl-2">
                  Sign up for updates
                </p>
                {showtext ? (
                  "Thank you for subscribing!"
                ) : (
                  <form className="flex" onSubmit={handleForm}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email.."
                      className="px-4 py-2 outline-none border border-solid border-orange-500 rounded-full text-sm font-normal tracking-wide placeholder:text-orange-500 text-orange-500 focus:border-2-orange-400 focus-within:shadow-xl  "
                    />
                    <button className="btn10 flex items-center justify-center outline-none border border-solid border-orange-500 rounded-full px-4 py-2 text-orange-500 bg-white text-sm font-bold">
                      SIGN UP
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
