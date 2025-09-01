import React from "react";
import ProductGallery from "./ProductGallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NestedCheckbox from "../NestedCheckbox/NestedCheckbox";
import "./ProductPage.css";

const ProductPage = () => {
  const product = {
    name: "Manuka Honey UMF 24+ MGO 1122+",
    description: `
      Experience the rarest and most potent form of Manuka Honey,
      harvested exclusively from the untouched forests of New Zealand.
      With its exceptionally high UMF® 24+ / MGO 1122+ rating,
      this premium honey is known for its unparalleled antibacterial
      properties and therapeutic benefits.
      
      Whether taken by the spoon, drizzled on food, or added to your
      wellness routine, it supports your immune system, aids digestion,
      and promotes natural energy. Every jar is tested and certified
      for authenticity and quality.
    `,
    highlights: [
      "UMF® 24+ / MGO 1122+ – one of the rarest grades worldwide",
      "Laboratory tested for purity, potency, and authenticity",
      "Harvested sustainably from New Zealand’s native Manuka bush",
      "Rich, smooth taste with natural antibacterial properties",
      "Supports immunity, gut health, skin healing, and overall wellness",
      "Perfect for daily health rituals or luxury gifting",
    ],
    weight: "250g Premium Glass Jar",
    price: 149.0,
    subscriptionPrice: 129.0,
    rating: 4.9,
    reviews: 486,
    images: [
      "/images/honey-1.jpg",
      "/images/honey-2.jpg",
      "/images/honey-3.jpg",
      "/images/honey-4.jpg",
      "/images/honey-5.jpg",
      "/images/honey-6.jpg",
    ],
    fallbackImages: [
      "https://picsum.photos/seed/honey-1/900/900",
      "https://picsum.photos/seed/honey-2/900/900",
      "https://picsum.photos/seed/honey-3/900/900",
      "https://picsum.photos/seed/honey-4/900/900",
      "https://picsum.photos/seed/honey-5/900/900",
      "https://picsum.photos/seed/honey-6/900/900",
    ],
    bundleText: "🔥 Beauty Bundle: Save 10% when buying 3 jars",
  };

  return (
    <main className="page">
      {/* Header / Navbar */}
      <header className="site-header">
        <div className="brand">NZHC UMF/MGO</div>
        <nav className="nav">
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Product Section */}
      <section className="product">
        <ProductGallery
          images={product.images}
          fallbackImages={product.fallbackImages}
        />

        <div className="info">
          {/* Title & Rating */}
          <h1 className="title">{product.name}</h1>

          <div className="rating-row">
            <span className="stars" aria-label={`${product.rating} out of 5 stars`}>
              ★★★★★
            </span>
            <span className="rating-text">
              {product.rating} / 5.0 ({product.reviews} reviews)
            </span>
          </div>

          {/* Weight */}
          <p className="subtitle">{product.weight}</p>

          {/* Price */}
          <div className="price-row">
            <div className="price">${product.price.toFixed(2)} USD</div>
            <div className="sub-price">
              Subscribe & save{" "}
              <strong>${product.subscriptionPrice.toFixed(2)}</strong>
            </div>
          </div>

          {/* Description */}
          <p className="desc">{product.description}</p>

          {/* Highlights */}
          <ul className="highlights">
            {product.highlights.map((h, i) => (
              <li key={i}>• {h}</li>
            ))}
          </ul>

          {/* Bundle Offer */}
          <div className="bundle-card">{product.bundleText}</div>

          {/* Custom Checkbox */}
          <NestedCheckbox />

          {/* CTA Buttons */}
          <div className="cta">
            <button className="btn btn-buy">Buy Now</button>
            <button className="btn btn-cart">Add to Cart</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
