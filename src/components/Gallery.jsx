import "./Gallery.css";

const photoModules = import.meta.glob("../assets/event-photos/*.jpg", {
  eager: true,
  import: "default",
});

const PHOTOS = Object.entries(photoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)
  .slice(0, 6);

function Gallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <span className="section-label">Moments</span>
        <h2 className="section-heading">From our events</h2>
        <p className="section-sub">A few snapshots from our events this year.</p>

        <div className="gallery-grid">
          {PHOTOS.map((src, index) => (
            <div key={src} className="gallery-tile">
              <img
                src={src}
                alt={`DCU Science & Health Society event photo ${index + 1}`}
                loading="lazy"
                className="gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
