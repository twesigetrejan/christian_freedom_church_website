import Image from "next/Image";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Hero = () => {
  return (
    <div className="">
      <div className="items-center flex justify-center pt-[52px] pb-[15px]">
        <Image
          src={"/Images/hero-image.png"}
          alt={"hero image"}
          width={1200}
          height={320}
          className="object-cover "
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-dark font-sans font-bold">
          Become part of something great
        </h1>

        <div className="flex justify-center items-center gap-[37px]">
          <h1 className="text-dark font-sans font-bold">
            today, cfc welcomes you
          </h1>
          <button className="btn">
            Get started
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
