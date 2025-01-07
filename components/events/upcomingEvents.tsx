"use client";

import Image from "next/image";
import { upcomingEvents } from "@/constants";
import { ArrowRight, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export const UpcomingEvents = () => {
  const router = useRouter();

  const Join = () => {
    router.push("/contact");
  };

  return (
    <div className="pt-10 flex flex-col gap-10 pb-10">
      <h3 className="font-semibold text-center text-h2">Upcoming events</h3>
      <div className="flex flex-col gap-10">
        {upcomingEvents &&
          upcomingEvents.map((upcomingEvent) => (
            <div className="flex justify-center" key={upcomingEvent.id}>
              <div className="flex flex-col gap-10 w-full max-w-[1200px] px-4 sm:px-0 sm:flex-row">
                {/* Date Block */}
                <div className="flex gap-6 sm:gap-[108px] flex-col sm:flex-row justify-center items-center lg:items-start ">
                  <div className="w-[146px] h-[128px] flex-shrink-0 lg:flex flex-col items-center justify-center border-2 border-greener rounded-2xl hidden ">
                    <div className="w-[88px] h-[88px] flex flex-col items-center justify-center">
                      <p className="text-primary font-semibold">
                        {upcomingEvent.dayOfMonth}
                      </p>
                      <p className="uppercase text-greener font-semibold">
                        {upcomingEvent.month}
                      </p>
                    </div>
                  </div>
                  <Image
                    className="object-cover rounded-2xl"
                    src={upcomingEvent.img}
                    alt={upcomingEvent.eventName}
                    width={278}
                    height={400}
                  />
                </div>
                {/* Content Block */}
                <div className="flex flex-col max-w-[560px] gap-6">
                  <div className="flex gap-5 flex-col justify-center">
                    <h3 className="font-semibold text-h3">
                      {upcomingEvent.eventName}
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="uppercase text-greener text-p2">
                        {upcomingEvent.eventDay}
                      </p>
                      <Clock className="w-3 h-3 text-primary" />
                      <p className="text-greener text-p2">
                        {upcomingEvent.eventTime}
                      </p>
                    </div>
                  </div>
                  <p className="text-p1">{upcomingEvent.details}</p>
                  <div>
                    <button onClick={Join} className="btn flex items-center">
                      Register
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
