import Container from "@/components/container";
import { navlinks } from "@/contants";
import Link from "next/link";
import SocialLinks from "./social-links";
const Footer = () => {
  return (
    <Container>
        <div className="bg-dark text-white">

      <div className="grid grid-cols-3 ">
        {/* about */}
        <div className="flex flex-col gap-6">
          <h3 className="">About</h3>
          <p className="">
            Christian Freedom Church is a life transformation center
          </p>
        </div>
        {/* quick links */}
        <div className="flex flex-col gap-6">
          <h3 className="">Quick links</h3>
          <div className="flex flex-col gap-[14px]">
            {navlinks &&
              navlinks.map((navlink) => (
                <Link key={navlink.id} href={navlink.route} className="">
                  <p className="">{navlink.title}</p>
                </Link>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="">Get in touch</h3>
          <div className="">
            <p className="">Location : Kawempe-Tula Road</p>
            <p className="">Email : cfcministriesug@gmail.com </p>
            <p className="">Phone : +256 752 569228</p>
            <div className="flex gap-6">
                <SocialLinks/>

            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <p className=""> © copyrights 2024 - Christian Freedom Church</p>
      </div>

        </div>
    </Container>
  );
};

export default Footer;
