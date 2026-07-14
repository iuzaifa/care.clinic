import Breadcrumb from "../components/Breadcrumb";
import CtaSection from "../components/sections/CtaSection";
import ContactFormSection from "../components/ui/ContactFormSection";
import ContactInfoCards from "../components/ui/ContactInfoCards";
// import FaqSection from "../components/ui/FaqSection";

function Contact () {
  return (
    <>
      <Breadcrumb
        title="We're Here To Help, Anytime You Need"
        subtitle="Reach out to our team for appointments, questions, or support. We usually respond within 24 hours."
        imageSrc="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1480&q=80"
        navigationPath="#"
        btnText="Book Appointment"
      />

      <ContactInfoCards />

      <ContactFormSection
        onSubmit={(data) => console.log("Form submitted:", data)}
      />


      <CtaSection
        title="Still Have Questions?"
        subtitle="Our support team is available around the clock to assist you with anything you need."
        buttonText="Call Us Now"
      />
    </>
  )
}

export default Contact;