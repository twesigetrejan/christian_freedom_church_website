"use client";
import Image from "next/image";
import MissionVision from "@/components/about/mission-vision";
import TeamGrid from "@/components/about/teamCard";
import MinistryLeadership from "@/components/about/ministry-leadership";
import { JoinCfc } from "@/components/about/joinUs";
import Container from "@/components/container";
export const About = () => {
  return (
    <Container>
      <div className="py-10 flex flex-col items-center justify-center">
        <div className="max-w-[1200px] pb-10">
          <Image
            layout=""
            height={345}
            width={1200}
            className="object-cover rounded-2xl"
            src={"/Images/about/about-hero2.png"}
            alt={"About Hero Image"}
          />
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
