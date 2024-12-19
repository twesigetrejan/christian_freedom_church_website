"use client";

import React, { useState } from "react";
import { ArrowRight, Play, PlayCircle } from "lucide-react";
import Image from "next/image";

const WelcomeMessage = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const Video = () => {
    return (
      <div className="relative w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          controls
          poster="Images/welcome.jpg"
          preload="none"
          autoPlay={isPlaying}
        >
          <source src="Videos/welcome_video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center gap-20 px-[60px]">
      {/* content section */}
      <div className="py-[117px] flex flex-col items-start">
        <h2 className="pb-8 font-Montserrat text-[40px] font-semibold w-[580px] h-auto text-dark">
          Welcome to Christian Freedom Church!
        </h2>
        <div className="flex flex-col gap-4 pb-8 max-w-[496px]">
          <p className="text-xl">
            Join a community where we uplift, support and grow together in faith
            Welcome to freedom!
          </p>
          <p className="text-xl">
            Our doors are open, our hearts are full, and our mission is clear:
            to share God's love and walk in his freedom.
          </p>
        </div>
        <button className="btn flex items-center">
          Join us
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
      {/* video section */}
      <div className="relative w-[500px] h-[500px] rounded-2xl">
        {isPlaying ? (
          <Video />
        ) : (
          <div className="w-full relative isolate">
            <div className="absolute z-50 w-full h-full grid place-items-center">
              <button
                className="bg-primary hover:scale-105 duration-300 transition-all hover:bg-primary-100 h-16 w-16 rounded-full grid place-items-center"
                onClick={() => setisPlaying(true)}
              >
                <Play fill="#ffff" strokeWidth={0} className="h-6 w-6" />
              </button>
            </div>
            <Image
              src={"/Images/welcome.jpg"}
              alt={"Sunday second service welcome message"}
              width={500}
              height={500}
              className="w-full object-cover object-center rounded-md h-[500px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeMessage;
