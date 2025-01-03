import Image from "next/image";

export const MissionVision = () => {
  return (
    <div className="max-w-[748px] mx-auto flex flex-col items-center gap-10">
      {/* mission */}
      <div className="flex flex-col md:flex-row gap-[120px] items-center md:text-left">
        <div className="flex flex-col gap-6 max-w-[238px]">
          <h2 className="text-h3 font-semibold">Our mission</h2>
          <p className="text-p1 ">
            To share the love of Christ, foster spiritual growth, and serve our
            community with compassion and faith.
          </p>
        </div>
        {/* Image section */}
        <div>
          <Image
            src={"/Images/about/mission.png"}
            width={350}
            height={330}
            alt="Mission Image"
          />
        </div>
      </div>
      {/* vission */}
      <div className="flex flex-col md:flex-row gap-[160px] items-center md:text-left">
        {/* Image section */}
        <div>
          <Image
            src={"/Images/about/mission.png"}
            width={350}
            height={330}
            alt="Mission Image"
          />
        </div>

        <div className="flex flex-col gap-6 max-w-[238px]">
          <h2 className="text-h3 font-semibold">Our vision</h2>
          <p className="text-p1 ">
            To build a welcoming and vibrant community where all are inspired to
            grow in faith, find purpose, and make a positive impact on the world
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
