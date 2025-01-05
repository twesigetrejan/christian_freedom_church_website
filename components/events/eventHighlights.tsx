import { eventHighlights } from "@/constants";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const EventHighlights = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto relative">
      <h3 className="font-semibold text-center mb-10 text-h2">
        Events highlights
      </h3>

      <div className="px-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {eventHighlights?.map((highlight) => (
              <CarouselItem
                key={highlight.id}
                className="sm:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="w-full max-w-[300px] mx-auto">
                  <Image
                    src={highlight.img}
                    alt={highlight.eventName}
                    width={300}
                    height={300}
                    className="object-cover w-full aspect-square rounded-2xl"
                  />
                  <h4 className="mt-4 font-semibold text-p2">
                    {highlight.eventName}
                  </h4>
                  <p className="text-p3 mt-2">{highlight.details}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-6 top-40" />
          <CarouselNext className="hidden md:flex -right-6 top-40" />
        </Carousel>
      </div>
    </div>
  );
};

export default EventHighlights;
