export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80"
          alt="Beautiful cake"
        />
      </div>
      <div className="about-content">
        <p className="section-label">OUR STORY</p>
        <h2>
          A Little Piece
          <br />
          of <span>Happiness.</span>
        </h2>
        <p>
          At Sweet Crumbs, we believe every celebration deserves
          something special. Our cakes are freshly baked with
          quality ingredients and lots of love.
        </p>
        <p>
          From birthdays to anniversaries, we create sweet
          memories one cake at a time.
        </p>
        <div className="stats">
          <div>
            <strong>5+</strong>
            <span>Years Baking</span>
          </div>
          <div>
            <strong>5K+</strong>
            <span>Happy Customers</span>
          </div>
          <div>
            <strong>100+</strong>
            <span>Cake Designs</span>
          </div>
        </div>
      </div>
    </section>
  );
}