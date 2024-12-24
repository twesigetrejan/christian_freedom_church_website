import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="py-[14px] flex items-center justify-center">
      <div className="">
        <Link href="/">
          <Image
            src="/Images/cfc_logo1.png"
            alt="Christian Freedom Church logo"
            width={67}
            height={43}
          />
        </Link>
      </div>
      <p className="font-Montserrat hidden sm:flex md:flex lg:hidden">CFC</p>
    </div>
  );
};

export default Logo;
