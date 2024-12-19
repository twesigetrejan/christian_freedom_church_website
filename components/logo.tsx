import Image from "next/image";

const Logo = () => {
  return (
    <div className="py-[14px]">
      <Image
        src={"/Images/cfc_logo1.png"}
        alt={"Christian Freedom Church logo"}
        width={67}
        height={43}
      />
    </div>
  );
};

export default Logo;
