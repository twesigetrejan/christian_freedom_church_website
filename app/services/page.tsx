import Image from "next/image";
import { DepartmentServices } from "@/components/departmentServices/departmentServices";

import Container from "@/components/container";
export const Services = () => {
  return (
    <Container>
      <div className="py-10 flex flex-col items-center justify-center">
        <div className="max-w-[1200px] pb-10">
          <Image
            layout=""
            height={345}
            width={1200}
            className="object-cover rounded-2xl"
            src={"/Images/services/service-hero.png"}
            alt={"Service Hero Image"}
          />
        </div>
      </div>

      <DepartmentServices />
    </Container>
  );
};

export default Services;
