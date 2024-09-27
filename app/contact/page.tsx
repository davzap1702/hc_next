import { ContactForm } from '@/components/contact-form/ContactForm';

const Contact = () => {
  return (
    <main>
      <section className="contact-page__hero">
        <h1>Contact Us</h1>
        <p>Let's get in touch.</p>
      </section>

      <section className="contact-form-section container">
        <div className="contact-form-section__header">
          <h2>Fill out the information below</h2>
          <p>And we will get back to you as soon as possible</p>
        </div>
      </section>

      <ContactForm />

    </main>
  );
};

export default Contact;
