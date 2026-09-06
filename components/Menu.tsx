const cakes = [
  {
    name: "Chocolate Truffle",
    description: "Rich chocolate with creamy ganache",
    price: "₹699",
    image: "/images/img2.jpg",
  },
  {
    name: "Red Velvet",
    description: "Soft velvet cake with cream cheese",
    price: "₹799",
    image: "/images/img1.jpg",
  },
  {
    name: "Strawberry Bliss",
    description: "Fresh strawberries & whipped cream",
    price: "₹749",
    image: "/images/img3.jpg",
  },
  {
    name: "Black Forest",
    description: "Classic chocolate & cherry cake",
    price: "₹699",
    image: "/images/img4.png",
  },
];
function getWhatsAppLink(cake: string) {
  const message = encodeURIComponent(
    `Hi Sweet Crumbs! 🍰

I would like to order: ${cake}

Please share the available options.`
  );
  return `https://wa.me/919876543210?text=${message}`;
}
export default function Menu() {
  return (
    <section className="section menu-section" id="cakes">
      <div className="section-heading">
        <div>
          <p className="section-label">OUR SPECIALS</p>
          <h2>
            Made For Your <span>Sweet Moments.</span>
          </h2>
        </div>
        <p>
          Freshly baked cakes made with premium ingredients
          and a whole lot of love.
        </p>
      </div>
      <div className="cake-grid">
        {cakes.map((cake) => (
          <div className="cake-card" key={cake.name}>
            <div className="cake-image">
              <img src={cake.image} alt={cake.name} />

              <span className="popular">Fresh</span>
            </div>
            <div className="cake-info">
              <h3>{cake.name}</h3>
              <p>{cake.description}</p>
              <div className="cake-bottom">
                <strong>{cake.price}</strong>
                <a
                  href={getWhatsAppLink(cake.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}