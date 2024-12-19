import Logo from "./logo";
import { navlinks } from "@/contants";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="px-10">
      <div className="flex justify-between items-center">
        <div className="flex">
          <Logo />
        </div>
        <div className=" flex gap-[52px] justify-center items-center font-sans">
          {navlinks &&
            navlinks.map((navlink) => (
              <Link className="" key={navlink.id} href={navlink.route}>
                <p className="">{navlink.title}</p>
              </Link>
            ))}
        </div>
        <div className="rounded-2xl bg-primary flex px-5 py-[6px] justify-center text-white hover:text-primary hover:bg-white">
          <button className="">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
