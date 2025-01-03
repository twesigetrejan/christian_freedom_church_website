import Image from "next/image";

export const About = () => {
  return (
    <div className="py-10">
      <Image
        height={345}
        width={1280}
        className=""
        src={"/Images/about/about-hero.png"}
        alt={"About Hero Image"}
      />
    </div>
  );
};

export default About;
