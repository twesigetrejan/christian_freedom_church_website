"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/container";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const JoinUs = () => {
    router.push("/contact");
  };
  return (
    <Container>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-center pt-8 sm:pt-[52px] pb-8 sm:pb-[60px] w-full">
          <div className="relative w-full h-[200px] sm:h-[320px] rounded-2xl overflow-hidden">
            <Image
              src={"/Images/hero-image.png"}
              alt={"hero image"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px"
            />
          </div>
        </div>

        <div className="flex flex-col items-start sm:gap-6">
          <h1 className="text-dark font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight">
            Become part of something great
          </h1>

          <div className="flex flex-col sm:flex-row gap-y-4 items-start sm:items-center gap-x-4 sm:gap-[38px] w-full">
            <h1 className="text-dark font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight">
              today, CFC welcomes you
            </h1>
            <button
              onClick={JoinUs}
              className="btn flex items-center whitespace-nowrap"
            >
              Get started
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
