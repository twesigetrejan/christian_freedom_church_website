import { leadershipTeam } from "@/constants";
import Image from "next/image";
import Container from "../container";

const TeamGrid = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {leadershipTeam.map((leader) => (
          <div className="max-w-[270px] flex flex-col" key={leader.id}>
            <div className="relative w-full  overflow-hidden">
              <Image
                src={leader.img}
                alt={`${leader.leaderName} - ${leader.title}`}
                className="object-cover"
                width={270}
                height={300}
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-p1 font-semibold">{leader.leaderName}</h3>
              <p className="text-dark text-p2">{leader.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
