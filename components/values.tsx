import React from "react";
import Container from "@/components/container";
import { ValuesProps } from "@/contants";

const Values = () => {
  return (
    <Container>
      <div className=" flex flex-col gap-10">
        <div className="max-w-2xl mx-auto text-center pt-[52px]">
          <h1 className="text-4xl font-bold mb-4 font-Montserrat text-dark ">
            Our Values
          </h1>
          <p className="text-lg text-gray-600">
            Timeless guiding principles that reflect our faith, shape our
            mission and inspire us to serve with love and purpose
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-[52px]">
          {ValuesProps?.map((valueProp) => {
            const IconComponent = valueProp.icon;

            return (
              <div
                key={valueProp.id}
                className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
              >
                <div className="border-2 border-dark-30 w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ease-in-out transform group-hover:rotate-[360deg] group-hover:border-purple-500">
                  <IconComponent
                    className="w-5 h-5 text-secondary"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-[15px] font-bold font-sans">
                    {valueProp.value}
                  </h3>
                  <p className="text-dark leading-relaxed text-[14px]">
                    {valueProp.value_explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Values;
