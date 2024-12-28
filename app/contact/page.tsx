import ContactForm from "@/components/contact/contact-form";
import MapLoccation from "@/components/contact/google-maps";
import Inquiries from "@/components/contact/inquiries";
import Container from "@/components/container";
import Image from "next/image";

export default function Contact() {
  return (
    <Container>
      <div className="pt-10 ">
        <Image
          src={"/Images/contact-hero.png"}
          alt={"contact page hero image"}
          width={1200}
          height={298}
        />
      </div>
      <div className="flex flex-col justify-center mt-10">
        <div className="flex justify-center gap-20 pb-10">
          <ContactForm />
          <Inquiries />
        </div>
        <MapLoccation />
      </div>
    </Container>
  );
}
