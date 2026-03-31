import { useState } from "react";

const images = [
  { title: "Misty Mountains", category: "Nature", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" },
  { title: "Urban Geometry", category: "Cities", url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800" },
  { title: "Bengal Tiger", category: "Wildlife", url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800" },
  { title: "Turquoise Cove", category: "Nature", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
  { title: "Night Tokyo", category: "Cities", url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800" },
  { title: "Aurora Borealis", category: "Nature", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800" },
  { title: "Desert Dunes", category: "Nature", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" },
  { title: "Modern Building", category: "Cities", url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800" },
  { title: "Elephant", category: "Wildlife", url: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800" },
  { title: "Ocean Waves", category: "Nature", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
  { title: "Street Lights", category: "Cities", url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800" },
  { title: "Snow Mountains", category: "Nature", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800" },
];

function App() {
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h1>🔥 Wonder World Gallery</h1>

        <div className="buttons">
          {["All", "Nature", "Cities", "Wildlife"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Header */}
      <div className="header">
        <h2>Discover the World ✨</h2>
        <p>Explore stunning places across nature, cities and wildlife</p>
      </div>

      {/* Gallery */}
      <div className="grid">
        {filteredImages.map((img, index) => (
          <div className="card" key={index}>
            <img src={img.url} alt={img.title} loading="lazy" />
            <div className="card-body">
              <h3>{img.title}</h3>
              <p>{img.category}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;