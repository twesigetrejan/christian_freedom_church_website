import Image from "next/image";
import Container from "@/components/container";
import JoinCfc from "@/components/about/joinUs";
import { UpcomingEvents } from "@/components/events/upcomingEvents";
import { EventHighlights } from "@/components/events/eventHighlights";
export default function Events() {
  return (
    <Container>
      <div className="py-10 flex flex-col gap-10 items-center justify-center">
        <div className="max-w-[1200px]">
          <Image
            layout=""
            height={345}
            width={1200}
            className="object-cover rounded-2xl"
            src={"/Images/events/events-hero.png"}
            alt={"About Hero Image"}
          />
        </div>
        <UpcomingEvents />
        <EventHighlights />
        <JoinCfc />
      </div>
    </Container>
  );
}
