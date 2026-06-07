import React from 'react';
import './Destinations.scss';

const Destinations = () => {
  return (
    <section className="destinations-section" id="packages">
      <div className="destinations-header">
        <h4 className="subtitle">Curated Escapes</h4>
        <h2 className="title">Popular Destinations</h2>
      </div>

      <div className="bento-grid">
        {/* Card 1: Large Feature */}
        <div className="bento-card feature-card">
          <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop" alt="Bali Retreat" />
          <div className="card-overlay">
            <div className="card-content">
              <h3>Bali, Indonesia</h3>
              <p>Tropical serenity and cultural immersion.</p>
              {/* Button removed from here! */}
            </div>
          </div>
        </div>

        {/* Card 2: Wide Card */}
        <div className="bento-card wide-card">
          <img src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1000&auto=format&fit=crop" alt="Swiss Alps" />
          <div className="card-overlay">
            <div className="card-content">
              <h3>Swiss Alps</h3>
              <p>Alpine majesty.</p>
            </div>
          </div>
        </div>

        {/* Card 3: Standard Square */}
        <div className="bento-card square-card">
          <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop" alt="London" />
          <div className="card-overlay">
            <div className="card-content">
              <h3>London</h3>
              <p>Historic elegance.</p>
            </div>
          </div>
        </div>

        {/* Card 4: Standard Square */}
        <div className="bento-card square-card">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" alt="Dubai" />
          <div className="card-overlay">
            <div className="card-content">
              <h3>Dubai</h3>
              <p>Modern luxury.</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Global action button below the grid */}
      <div className="destinations-action">
        <button className="view-all-btn">
          <span>Explore all destinations</span>
        </button>
      </div>
    </section>
  );
};

export default Destinations;