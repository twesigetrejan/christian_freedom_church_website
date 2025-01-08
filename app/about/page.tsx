"use client";
import Image from "next/image";
import MissionVision from "@/components/about/mission-vision";
import TeamGrid from "@/components/about/teamCard";
import MinistryLeadership from "@/components/about/ministry-leadership";
import { JoinCfc } from "@/components/about/joinUs";
import Container from "@/components/container";

const About = () => {
  return (
    <Container>
      <div className="py-10 flex flex-col items-center justify-center">
        <div className="flex justify-center pt-8 sm:pt-[52px] pb-8 sm:pb-[60px] w-full">
          <div className="relative w-full h-[200px] sm:h-[320px] rounded-2xl overflow-hidden">
            <Image
              src={"/Images/about/about-hero2.png"}
              alt={"hero image"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px"
            />
          </div>
        </div>
        <MissionVision />

        <MinistryLeadership />

        <TeamGrid />

        <JoinCfc />
      </div>
    </Container>
  );
};

export default About;
