import Image from "next/image";
import Container from "@/components/container";
import JoinCfc from "@/components/about/joinUs";
import { UpcomingEvents } from "@/components/events/upcomingEvents";
import { EventHighlights } from "@/components/events/eventHighlights";

export default function Events() {
  return (
    <Container>
      <div className="py-10 flex flex-col gap-10 items-center justify-center">
        <div className="flex justify-center pt-8 sm:pt-[52px] pb-8 sm:pb-[60px] w-full">
          <div className="relative w-full h-[200px] sm:h-[320px] rounded-2xl overflow-hidden px-4 sm:px-0">
            <Image
              src={"/Images/events/events-hero.png"}
              alt={"hero image"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px"
            />
          </div>
        </div>
        <UpcomingEvents />
        <EventHighlights />
        <JoinCfc />
      </div>
    </Container>
  );
}
