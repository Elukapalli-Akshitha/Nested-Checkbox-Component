import React, { useMemo, useState } from "react";

const ImageWithFallback = ({ src, fallback, alt, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallback)}
      loading="lazy"
      {...rest}
    />
  );
};

const ProductGallery = ({ images = [], fallbackImages = [] }) => {
  const gallery = useMemo(() => {
    // pair each desired image with a stable fallback
    const fallbacks =
      fallbackImages.length >= images.length
        ? fallbackImages
        : [...fallbackImages, ...Array(images.length - fallbackImages.length).fill("https://picsum.photos/seed/honey-fallback/900/900")];
    return images.map((src, i) => ({ src, fallback: fallbacks[i] }));
  }, [images, fallbackImages]);

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((p) => (p - 1 + gallery.length) % gallery.length);
  const next = () => setIndex((p) => (p + 1) % gallery.length);

  return (
    <div className="gallery">
      <div className="main">
        <button className="nav prev" aria-label="Previous image" onClick={prev}>
          ‹
        </button>

        <div className="main-img-wrap">
          <ImageWithFallback
            src={gallery[index].src}
            fallback={gallery[index].fallback}
            alt={`Product view ${index + 1}`}
            className="main-img"
          />
        </div>

        <button className="nav next" aria-label="Next image" onClick={next}>
          ›
        </button>
      </div>

      <div className="thumbs" role="listbox" aria-label="Image thumbnails">
        {gallery.map((img, i) => (
          <button
            key={i}
            className={`thumb ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Show image ${i + 1}`}
          >
            <ImageWithFallback
              src={img.src}
              fallback={img.fallback}
              alt={`Thumbnail ${i + 1}`}
              className="thumb-img"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
