"use client";
import Image from "next/image";
import MissionVision from "@/components/about/mission-vision";
import TeamGrid from "@/components/about/teamCard";
import MinistryLeadership from "@/components/about/ministry-leadership";
import { JoinCfc } from "@/components/about/joinUs";

export const About = () => {
  return (
    <div className="py-10 flex flex-col gap-10 items-center justify-center">
      <div className="relative w-full">
        <Image
          layout="responsive"
          height={345}
          width={1280}
          className="object-cover"
          src={"/Images/about/about-hero.png"}
          alt={"About Hero Image"}
        />
      </div>
      <MissionVision />

      <MinistryLeadership />

      <TeamGrid />

      <JoinCfc />
    </div>
  );
};

export default About;
