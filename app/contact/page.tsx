import ContactForm from "@/components/contact/contact-form";

export default function Contact() {
  return (
    <div className="grid place-items-center">
      <ContactForm />

      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.738943429718!2d32.571641173492296!3d0.36141726395854123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbaf3aa556421%3A0xb3fbb1f628fc02a7!2sChristian%20Freedom%20Church%20Ministries!5e0!3m2!1sen!2sug!4v1735329351613!5m2!1sen!2sug"
          width="1200"
          height="450"
        //   style="border:0;"
        //   allowfullscreen=""
          loading="lazy"
        //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
