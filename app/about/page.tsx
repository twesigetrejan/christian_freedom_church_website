import Image from "next/image";
import MissionVision from "@/components/about/mission-vision";
import { Leadership } from "@/components/about/leadership";
import MinistryLeadership from "@/components/about/ministry-leadership";

export const About = () => {
  return (
    <div className="py-10 flex flex-col gap-10 items-center justify-center">
      <div className="relative w-full">
        <Image
          height={345}
          width={1280}
          className="object-cover"
          src={"/Images/about/about-hero.png"}
          alt={"About Hero Image"}
        />
      </div>
      <MissionVision />
      {/* <Leadership /> */}
      <MinistryLeadership />
    </div>
  );
};

export default About;
