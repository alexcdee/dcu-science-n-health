import "./Gallery.css";

const TILE_COUNT = 6;

function Gallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <span className="section-label">Moments</span>
        <h2 className="section-heading">From our events</h2>
        <p className="section-sub">Photos coming soon.</p>

        <div className="gallery-grid">
          {Array.from({ length: TILE_COUNT }).map((_, index) => (
            <div key={index} className="gallery-tile gallery-placeholder" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
