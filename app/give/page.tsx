import Image from "next/image";
import Container from "@/components/container";

const Give = () => {
  return (
    <Container>
      <div className="py-10">
        <div className="relative w-full h-[200px] sm:h-[320px] rounded-2xl overflow-hidden px-4 sm:px-0">
          <Image
            src={"/Images/give/give-hero.png"}
            alt={"hero image"}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px"
          />
        </div>

        <div className="py-10 gap-10 flex justify-center items-center flex-col">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-h2 pb-5 font-semibold">2 Corinthians 9:11</h2>
            <p className="text-p1 max-w-[485px] text-center">
              “You will be enriched in every way so that you can be generous on
              every occasion, and through us your generosity will result in
              thanksgiving to God.”
            </p>
          </div>
          <div className="gap-14 lg:flex ">
            <div className="flex flex-col gap-5 items-center justify-center">
              <Image
                width={225}
                height={225}
                className=""
                src="/Images/give/airtel.png"
                alt="airtel logo"
              />
              <p className="text-dark text-p1">+256 752 566 228</p>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
              <Image
                width={225}
                height={225}
                className=""
                src="/Images/give/mtn.png"
                alt="mtn logo"
              />
              <p className="text-dark text-p1">+256 752 566 228</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Give;
