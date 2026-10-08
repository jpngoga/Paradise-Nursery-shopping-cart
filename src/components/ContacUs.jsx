function ContactUs() {
  return (
    <main className="page">
      <h1>Contact Us</h1>

      <p>
        Have a question about our plants or your order?
        We'd love to hear from you.
      </p>

      <div className="contact-info">
        <p>📧 Email: info@paradisenursery.com</p>
        <p>📞 Phone: +250 700 000 000</p>
        <p>📍 Location: Kigali, Rwanda</p>
      </div>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="6"
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </main>
  );
}

export default ContactUs;