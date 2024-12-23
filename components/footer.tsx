import Container from "@/components/container";
import { navlinks } from "@/contants";
import Link from "next/link";
import SocialLinks from "./social-links";

const Footer = () => {
  // Filter out Contact and About links
  const filteredNavlinks = navlinks.filter(
    (link) => !["Contact", "About"].includes(link.title, link.id)
  );

  return (
    <footer className="bg-dark">
      <Container>
        <div className="bg-dark text-white px-10">
          <div className="flex justify-between py-10">
            {/* about */}
            <div className="flex flex-col gap-4 max-w-[260px] p-1">
              <h3 className="text-sm font-['Open_Sans'] font-bold">About</h3>
              <p className="text-xs font-sans font-normal opacity-65">
                Christian Freedom Church is a community based life
                transformation center led by our senior Pastor Godfrey Musisi
              </p>
            </div>

            {/* quick links */}
            <div className="flex flex-col gap-4 p-1">
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

            {/* contact info */}
            <div className="flex flex-col gap-4 p-1">
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
      </Container>
      <div className="flex items-center justify-center border-t border-dashed py-[10px] mx-10">
        <p className="text-xs font-sans font-normal text-white opacity-65">
          © copyrights 2024 - Christian Freedom Church
        </p>
      </div>
    </footer>
  );
};

export default Footer;
