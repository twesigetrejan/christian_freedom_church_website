import Image from "next/image";
import { DepartmentServices } from "@/components/departmentServices/departmentServices";

import Container from "@/components/container";
export const Services = () => {
  return (
    <Container>
      <div className="py-10 flex flex-col items-center justify-center">
        <div className="relative w-full h-[200px] sm:h-[320px] rounded-2xl overflow-hidden px-4 sm:px-0">
          <Image
            src={"/Images/services/service-hero.png"}
            alt={"hero image"}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px"
          />
        </div>
      </div>

      <DepartmentServices />
    </Container>
  );
};

export default Services;
