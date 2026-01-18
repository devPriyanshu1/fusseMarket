import PageHero from "../component/layout/PageHero";
import ContactInfo from "../component/contact/ContactInfo";
import ContactForm from "../component/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Let's Connect"
        subtitle="Reach out for digital solutions that make an impact."
        image="/ContactOverlay.webp"
      />

      <section className="max-w-7xl mx-auto px-4 py-20 grid gap-12 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
