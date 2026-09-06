const images = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80",
];
export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-heading center">
        <p className="section-label">OUR GALLERY</p>
        <h2>A Glimpse of Our <span>Sweet World.</span></h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Cake gallery ${index + 1}`} />
            <div className="gallery-overlay">♡</div>
          </div>
        ))}
      </div>
    </section>
  );
}