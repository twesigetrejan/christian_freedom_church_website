"use client";
import { useState, useEffect } from "react";
import Logo from "./logo";
import { navlinks } from "@/contants";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-2 bg-opacity-10" : "py-4 bg-opacity-50"
        } bg-white backdrop-blur-md`}
      >
        <div className="flex justify-between items-center px-10">
          <div className="flex">
            <Logo />
          </div>
          <div className="flex gap-[44px] justify-center items-center font-sans">
            {navlinks &&
              navlinks.map((navlink) => (
                <Link className="" key={navlink.id} href={navlink.route}>
                  <p className="">{navlink.title}</p>
                </Link>
              ))}
          </div>
          <div className="rounded-[14px] bg-primary flex px-5 py-[6px] justify-center text-white hover:text-primary hover:bg-white">
            <button className="">Donate</button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className={isScrolled ? "h-[48px]" : "h-[72px]"} />
    </>
  );
};

export default Navbar;
