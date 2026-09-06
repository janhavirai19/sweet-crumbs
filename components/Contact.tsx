export default function Contact() {
  const whatsapp =
    "https://wa.me/919876543210?text=Hi%20Sweet%20Crumbs!%20I%20would%20like%20to%20place%20an%20order.";

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <p className="section-label">LET'S MAKE IT SWEET</p>
        <h2>
          Have A Celebration
          <br />
          Coming <span>Up?</span>
        </h2>
        <p>
          Tell us what you are looking for and we'll help
          you create the perfect cake.
        </p>
        <a
          href={whatsapp}
          target="_blank"
          className="contact-btn"
        >
          💬 Order on WhatsApp →
        </a>
      </div>
      <div className="contact-details">
        <div>
          <span>📍</span>
          <div>
            <strong>Visit Us</strong>
            <p>Pune, Maharashtra</p>
          </div>
        </div>
        <div>
          <span>🕐</span>
          <div>
            <strong>Opening Hours</strong>
            <p>10:00 AM – 9:00 PM</p>
          </div>
        </div>
        <div>
          <span>📞</span>
          <div>
            <strong>Call Us</strong>
            <p>+91 9876000000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
