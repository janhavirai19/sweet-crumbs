export default function Hero() {
  const whatsapp =
    "https://wa.me/919876543210?text=Hi%20Sweet%20Crumbs!%20I%20want%20to%20order%20a%20cake.";
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="small-title">WELCOME TO SWEET CRUMBS</p>
        <h1>
          Made With Love,
          <br />
          Baked With <span>Joy.</span>
        </h1>
        <p className="hero-text">
          Delicious handmade cakes crafted specially for
          your sweetest moments.
        </p>
        <div className="hero-buttons">
          <a href="#cakes" className="btn primary">
            Explore Cakes →
          </a>
          <a
            href={whatsapp}
            target="_blank"
            className="btn secondary"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
      <div className="hero-badge">
        <span>♡</span>
        <strong>Freshly Baked</strong>
        <small>Every Single Day</small>
      </div>
      <div className="scroll-down">
        ↓
      </div>
    </section>
  );
}