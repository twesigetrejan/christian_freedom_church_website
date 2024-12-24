"use client";
import { useState, useEffect } from "react";
import Logo from "./logo";
import { navlinks } from "@/contants";
import Link from "next/link";
import MobileNavigation from "./mobile-nav";

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
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-0 ${
          isScrolled ? "py-1 px-5 border-2 " : "py-4 px-10"
        } bg-opacity-90 backdrop-blur-md`}
      >
        <div
          className={`flex items-center transition-all duration-1000 ${
            isScrolled ? "gap-3 justify-between" : "gap-[44px] justify-between"
          }`}
        >
          {/* Logo Container */}
          <div
            className={`transition-all duration-1000 ${
              isScrolled ? "w-10 lg:w-10" : "w-16 lg:w-16"
            } sm:w-16`}
          >
            <Logo />
          </div>

          {/* Navigation Links */}
          <div
            className={`sm:flex hidden items-center transition-all duration-1000 ${
              isScrolled ? "text-[14px] gap-2" : "text-sm gap-4 "
            }`}
          >
            {navlinks &&
              navlinks.map((navlink) => (
                <Link
                  key={navlink.id}
                  href={navlink.route}
                  className="transition-all duration-300 hover:text-secondary hover:border-b-[1px] hover:border-secondary"
                >
                  <p className={isScrolled ? "px-2" : "px-3"}>
                    {navlink.title}
                  </p>
                </Link>
              ))}
          </div>

          {/* Donate Button (for large screens) */}
          <div
            className={`hidden lg:flex btn1 rounded transition-all duration-100 ${
              isScrolled
                ? "bg-primary px-2 text-xs "
                : "bg-primary px-5 text-base ml-10"
            } text-white hover:scale-110`}
          >
            <button className="">Donate</button>
          </div>

          {/* Mobile Navigation (for small screens) */}
          <div className="lg:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>

      {/* Spacer for Navbar */}
      <div className={isScrolled ? "h-[30px]" : "h-[72px]"} />
    </>
  );
};

export default Navbar;
