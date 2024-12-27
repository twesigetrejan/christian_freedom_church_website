import ContactForm from "@/components/contact/contact-form";
import MapLoccation from "@/components/contact/google-maps";
import Inquiries from "@/components/contact/inquiries";
import Container from "@/components/container";

export default function Contact() {
  return (
    <Container>
      
      <div className="flex flex-col justify-center mt-20">
        <div className="flex justify-center gap-20 pb-10">
          <ContactForm />
          <Inquiries />
        </div>
        <MapLoccation />
      </div>
    </Container>
  );
}
