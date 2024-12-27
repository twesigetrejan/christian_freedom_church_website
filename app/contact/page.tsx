import ContactForm from "@/components/contact/contact-form";
import MapLoccation from "@/components/contact/google-maps";
import Inquiries from "@/components/contact/inquiries";
import Container from "@/components/container";

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-col gap-10 mt-20">
        <div className="flex">
          <ContactForm />
          <Inquiries />
        </div>
        <MapLoccation />
      </div>
    </Container>
  );
}
