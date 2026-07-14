import Breadcrumb from "../components/Breadcrumb";
import CtaSection from "../components/sections/CtaSection";
import ContactFormSection from "../components/ui/ContactFormSection";
import ContactInfoCards from "../components/ui/ContactInfoCards";
// import FaqSection from "../components/ui/FaqSection";

function Contact () {
  return (
    <>
      <Breadcrumb
          title="Contact Us"
          subtitle="Reach out to our team for appointments, questions, or support."
          imageSrc="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1000&q=80"
          currentPage="Contact"
        />
      <ContactInfoCards />

      <ContactFormSection
        onSubmit={() => {}}
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