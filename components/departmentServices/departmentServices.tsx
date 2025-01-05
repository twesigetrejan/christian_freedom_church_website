"use client";
import { departmentServices } from "@/constants";
import Image from "next/image";
import { Clock } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const DepartmentServices = () => {
  const router = useRouter();
  const JoinUs = () => {
    router.push("/contact");
  };

  return (
    <div className="container mx-auto py-10">
      {departmentServices &&
        departmentServices.map((service, index) => (
          <div
            className={`flex ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            } justify-center items-center gap-8 py-10`}
            key={service.id}
          >
            <Image
              className="object-contain w-[345px] h-[500px] rounded-2xl"
              src={service.img}
              alt={service.service_name}
              width={345}
              height={500}
            />
            <div
              className={`max-w-[893px] w-full p-4 gap-10 flex flex-col bg-greyer ${
                index % 2 !== 0
                  ? "mr-[-56px] rounded-l-2xl"
                  : "ml-[-56px] rounded-r-2xl"
              }`}
            >
              <div className="flex gap-12 items-center">
                <h3 className="text-h3 font-semibold">
                  {service.service_name}
                </h3>
                <div className="flex gap-[10px] items-center">
                  <Clock className="w-4 h-4 text-primary" />
                  <div className="flex gap-[8px]">
                    {service.times.map((time, index) => (
                      <p
                        className="text-greener text-p2 font-medium"
                        key={index}
                      >
                        {time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-[50px] gap-y-10">
                {service.sessions.map((session) => (
                  <div
                    className="flex flex-col w-full max-w-[360px] gap-5"
                    key={session.id}
                  >
                    <h3 className="text-p1 font-semibold">
                      {session.sessionName}
                    </h3>
                    <p className="text-p2">{session.sessionDetails}</p>
                  </div>
                ))}
                <div className="">
                  <button onClick={JoinUs} className="btn flex items-center">
                    Join us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
