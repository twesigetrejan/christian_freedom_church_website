import Image from "next/image";
import Container from "@/components/container";
import { ServiceCardProps } from "@/contants";

const ServiceSection = () => {
  return (
    <Container>
      <div className="py-[52px]">
        <h2 className="pb-10 font-Montserrat text-[40px] font-semibold text-dark flex justify-center">
          Our Services
        </h2>
        <div className="grid grid-cols-3 gap-[120px] rounded-2xl relative ">
          {ServiceCardProps &&
            ServiceCardProps.map((ServiceCardProp) => (
              <div className="relative" key={ServiceCardProp.id}>
                <Image
                  src={ServiceCardProp.image}
                  alt="service image"
                  className="object-contain rounded-2xl"
                  width={320}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white w-[86px] h-[80px] flex justify-center items-center rounded-tl-lg">
                  <p className="text-[15px] font-sans p-[10px]">
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
