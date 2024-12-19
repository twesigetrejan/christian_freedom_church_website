import Image from "next/image";
import Container from "@/components/container";
import { ServiceCardProps } from "@/contants";

const ServiceSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-[120px]">
        {ServiceCardProps &&
          ServiceCardProps.map((ServiceCardProp) => (
            <div className="" key={ServiceCardProp.id}>
              <Image
                src={ServiceCardProp.image}
                alt={"service image"}
                className="object-contain rounded-2xl"
                width={320}
                height={500}
              />
              <p className=""></p>
            </div>
          ))}
      </div>
      ;
    </Container>
  );
};
export default ServiceSection
