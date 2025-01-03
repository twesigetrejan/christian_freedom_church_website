import Image from "next/image";

export const Give = () => {
  return (
    <div className="py-10">
      <div className="relative w-full flex justify-center">
        <Image
          src="/Images/give/give-hero.png"
          alt="About Hero Image"
          layout="responsive"
          width={1280}
          height={345}
          className="object-cover"
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
        <div className="flex gap-14">
          <div className="flex flex-col gap-5 items-center justify-center">
            <Image
              width={225}
              height={225}
              className=""
              src="/Images/give/mtn.png"
              alt="mtn logo"
            />
            <p className="text-p1 text-blue-600">+256 752 566 228</p>
          </div>

          <div className="flex flex-col gap-5 items-center justify-center">
            <Image
              width={225}
              height={225}
              className=""
              src="/Images/give/airtel.png"
              alt="airtel logo"
            />
            <p className="text-p1 text-red-600">+256 752 566 228</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Give;
