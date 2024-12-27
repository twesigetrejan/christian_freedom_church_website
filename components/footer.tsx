import { navlinks } from "@/constants";
import Link from "next/link";
import SocialLinks from "./social-links";

const Footer = () => {
  const filteredNavlinks = navlinks.filter(
    (link) => !["Contact", "About"].includes(link.title, link.id)
  );

  return (
    <footer className="bg-dark w-full">
      <div className="w-full bg-dark text-white px-4 sm:px-10 py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
          <div className="flex flex-col gap-4 w-full sm:max-w-[260px]">
            <h3 className="text-sm font-['Open_Sans'] font-bold">About</h3>
            <p className="text-xs font-sans font-normal opacity-65 ">
              Christian Freedom Church is a community-based life transformation
              center led by our senior Pastor Godfrey Musisi
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <h3 className="text-sm font-['Open_Sans'] font-bold">
              Quick links
            </h3>
            <div className="flex flex-col gap-[14px]">
              {filteredNavlinks.map((navlink) => (
                <Link
                  key={`footer-nav-${navlink.id}`}
                  href={navlink.route || "#"}
                >
                  <p className="text-xs font-sans font-normal opacity-65">
                    {navlink.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <h3 className="text-sm font-['Open_Sans'] font-bold">
              Get in touch
            </h3>
            <div className="gap-[14px] flex flex-col">
              <p className="text-xs font-sans font-normal opacity-65">
                Location : Kawempe-Tula Road
              </p>
              <p className="text-xs font-sans font-normal opacity-65">
                Email : cfcministriesug@gmail.com
              </p>
              <p className="text-xs font-sans font-normal opacity-65">
                Phone : +256 752 569228
              </p>
              <div className="flex pt-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center border-t border-dashed py-[10px]">
        <p className="text-xs font-sans font-normal text-white opacity-65">
          © copyrights 2024 - Christian Freedom Church
        </p>
      </div>
    </footer>
  );
};

export default Footer;
