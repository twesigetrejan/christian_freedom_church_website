import { InquireProps } from "@/constants";

const Inquiries = () => {
  return (
    <div className="max-w-[424px] px-4">
      <div className="flex flex-col">
        <p className="text-left text-p1 pb-8 pt-8 ">
          General Inquiries, Have questions about our services, departments or
          events?<br></br> We&apos;re here to help.
        </p>
        <div className="grid grid-cols-2 gap-12">
          {InquireProps &&
            InquireProps.map((InquireProp) => {
              const IconComponent = InquireProp.icon;
              return (
                <div
                  className="flex flex-col items-center justify-center max-w-[116px] "
                  key={InquireProp.id}
                >
                  <IconComponent className="stroke-primary w-11 h-11 p-2 " />
                  <div className="flex flex-col items-center justify-center ">
                    <p className="text-p2 font-sans">
                      {InquireProp.social_used}
                    </p>
                    <p className="text-p3">{InquireProp.value}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
