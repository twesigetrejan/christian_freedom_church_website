import Container from "@/components/container";
import { navlinks } from "@/contants";
import Link from "next/link";
import SocialLinks from "./social-links";

const Footer = () => {
  // Filter out Contact and About links
  const filteredNavlinks = navlinks.filter(
    (link) => !["Contact", "About"].includes(link.title)
  );

  return (
    <div className="bg-dark text-white text-sm px-10 pt-5">
      <div className="grid grid-cols-3 pb-2 place-items-center">
        {/* about */}
        <div className="flex flex-col gap-6 max-w-[320px] p-1">
          <h3 className="text-sm">About</h3>
          <p className="text-sm">
            Christian Freedom Church is a community based life transformation
            center led by our senior Pastor Godfrey Musisi
          </p>
        </div>

        {/* quick links */}
        <div className="flex flex-col gap-6 p-1">
          <h3 className="text-sm">Quick links</h3>
          <div className="flex flex-col gap-[14px]">
            {filteredNavlinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.route}>
                <p className="text-sm">{navlink.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* contact info */}
        <div className="flex flex-col gap-6 p-1">
          <h3 className="text-sm">Get in touch</h3>
          <div className="gap-[14px] flex flex-col">
            <p className="text-sm">Location : Kawempe-Tula Road</p>
            <p className="text-sm">Email : cfcministriesug@gmail.com</p>
            <p className="text-sm">Phone : +256 752 569228</p>
            <div className="flex">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center border-t border-dashed py-[10px]">
        <p className="text-sm">© copyrights 2024 - Christian Freedom Church</p>
      </div>
    </div>
  );
};

export default Footer;
