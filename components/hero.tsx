import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-10">
      <div className="items-center flex justify-center pt-[52px] pb-[60px]">
        <Image
          src={"/Images/hero-image.png"}
          alt={"hero image"}
          width={1200}
          height={320}
          className="object-cover "
        />
      </div>
      <div className="flex flex-col items-start pb-[52px]">
        <h1 className="text-dark font-bold text-[64px] ">
          Become part of something great
        </h1>

        <div className="flex justify-center items-center gap-[37px]">
          <h1 className="text-dark text-[64px] font-bold font-Montserrat">
            today, cfc welcomes you
          </h1>
          <button className="btn flex items-center font-Montserrat">
            Get started
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
