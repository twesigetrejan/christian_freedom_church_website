"use client";
import Container from "@/components/container";
import React, { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WelcomeMessage = () => {
  const router = useRouter();
  const [isPlaying, setisPlaying] = useState(false);

  const JoinUs = () => {
    router.push("/contact");
  };
  const Video = () => {
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
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
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        {/* video section */}
        <div className="relative w-full md:w-[600px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
          {isPlaying ? (
            <Video />
          ) : (
            <div className="w-full h-full relative isolate">
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
                width={600}
                height={400}
                className="w-full object-cover object-center rounded-md h-full"
              />
            </div>
          )}
        </div>

        {/* content section */}
        <div className="py-8 md:py-[117px] flex flex-col items-start">
          <h3 className="pb-6 md:pb-8  md:text-h3 font-semibold max-w-full md:max-w-[580px] ">
            Welcome to Christian Freedom Church!
          </h3>
          <div className="flex flex-col gap-4 pb-6 md:pb-8 max-w-full md:max-w-[496px] text-dark">
            <p className="text-p1">
              Join a community where we uplift, support and grow together in
              faith Welcome to freedom!
            </p>
            <p className="text-p1">
              Our doors are open, our hearts are full, and our mission is clear:
              to share God&apos;s love and walk in his freedom.
            </p>
          </div>
          <button onClick={JoinUs} className="btn flex items-center">
            Join us
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default WelcomeMessage;
