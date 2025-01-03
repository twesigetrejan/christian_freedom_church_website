import { leadershipTeam } from "@/constants";
import Image from "next/image";
import Container from "../container";

const TeamGrid = () => {
  return (
    <Container>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40">
          {leadershipTeam.map((leader) => (
            <div className="max-w-[320px] flex flex-col" key={leader.id}>
              <div className="relative w-full  overflow-hidden">
                <Image
                  src={leader.img}
                  alt={`${leader.leaderName} - ${leader.title}`}
                  className="object-cover"
                  width={320}
                  height={400}
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-h3 font-semibold">{leader.leaderName}</h3>
                <p className="text-dark text-p1">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TeamGrid;
