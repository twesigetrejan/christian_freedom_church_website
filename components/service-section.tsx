import Image from "next/image";
import Container from "@/components/container";
import { ServiceCardProps } from "@/constants";

const ServiceSection = () => {
  return (
    <Container>
      <div className="py-[52px]">
        <h2 className="pb-10 font-Montserrat text-h2 sm:text-h1  font-semibold  text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[60px] lg:gap-[120px] rounded-2xl relative">
          {ServiceCardProps &&
            ServiceCardProps.map((ServiceCardProp) => (
              <div
                className="relative h-[400px] w-full max-w-[320px] mx-auto"
                key={ServiceCardProp.id}
              >
                <Image
                  src={ServiceCardProp.image}
                  alt="service image"
                  className="object-cover rounded-2xl"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white w-[86px] h-[80px] flex justify-center items-center rounded-tl-lg">
                  <p className="text-p2 font-sans p-[10px]">
                    {ServiceCardProp.schedule}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default ServiceSection;
