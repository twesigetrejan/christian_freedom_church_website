import { leadershipTeam } from "@/constants";
import Image from "next/image";

const TeamGrid = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 w-full">
        {leadershipTeam.map((leader) => (
          <div className="flex flex-col" key={leader.id}>
            <div className="relative w-full overflow-hidden">
              <Image
                src={leader.img}
                alt={`${leader.leaderName} - ${leader.title}`}
                className="object-cover rounded-2xl"
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
