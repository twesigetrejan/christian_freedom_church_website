"use client";
import { useRouter } from "next/navigation";

export const JoinCfc = () => {
  const router = useRouter();

  const Join = () => {
    router.push("/contact");
  };

  return (
    <div className="py-10 flex flex-col gap-5 items-center justify-center">
      <h2 className="text-h2">Join us today</h2>
      <h3 className="text-h3 max-w-[866px]">
        Romans 15:7 "Therefore, accept each other just as Christ has accepted
        you so that God will be given glory” Become part of the great family and
        draw closer to God we welcome you
      </h3>
      <button onClick={Join} className="btn flex items-center">
        Join us
      </button>
    </div>
  );
};

export default JoinCfc;
