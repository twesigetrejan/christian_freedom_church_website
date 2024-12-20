import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/container";

const Hero = () => {
  return (
    <Container >
      <div className="items-center flex justify-center pt-[52px] pb-[60px] w-full">
        <Image
          src={"/Images/hero-image.png"}
          alt={"hero image"}
          width={1280}
          height={320}
          className="object-cover "
        />
      </div>
      <div className="flex flex-col items-start ">
        <h1 className="text-dark font-bold text-[64px] font-Montserrat">
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
    </Container>
  );
};

export default Hero;
