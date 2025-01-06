import ContactForm from "@/components/contact/contact-form";
import MapLoccation from "@/components/contact/google-maps";
import Inquiries from "@/components/contact/inquiries";
import Container from "@/components/container";
import Image from "next/image";

export default function Contact() {
  return (
    <Container>
      <div className="pt-10 ">
        <div className="flex justify-center pt-8 sm:pt-[52px] pb-8 sm:pb-[60px] w-full">
                  <div className="relative w-full h-[200px] sm:h-[320px] rounded-2xl overflow-hidden">
                    <Image
                      src={"/Images/contact-hero.png"}
                      alt={"hero image"}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px"
                    />
                  </div>
                </div>
      </div>
      <div className="flex flex-col justify-center mt-10">
        <div className="lg:flex justify-center gap-20 pb-10 md:flex">
          <ContactForm />
          <Inquiries />
        </div>
        <MapLoccation />
      </div>
    </Container>
  );
}
