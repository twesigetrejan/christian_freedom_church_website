"use client";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
export const JoinCfc = () => {
  const router = useRouter();

  const Join = () => {
    router.push("/contact");
  };

  return (
    <div className="py-10 flex flex-col gap-5 items-center justify-center">
      <h2 className="text-h3 font-bold">Join us today</h2>
      <div className=" max-w-[866px] items-center justify-center flex flex-col ">
        <h3 className="text-p1 font-semibold text-center">Romans 15:7</h3>
        <h3 className="text-p1 text-center">
          "Therefore, accept each other just as Christ has accepted you so that
          God will be given glory” Become part of the great family and draw
          closer to God we welcome you
        </h3>
      </div>
      <button onClick={Join} className="btn flex items-center">
        Join us
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export default JoinCfc;
