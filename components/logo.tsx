import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="py-[14px]">
      <Link href="/">
        <Image
          src="/Images/cfc_logo1.png"
          alt="Christian Freedom Church logo"
          width={67}
          height={43}
        />
      </Link>
    </div>
  );
};

export default Logo;
