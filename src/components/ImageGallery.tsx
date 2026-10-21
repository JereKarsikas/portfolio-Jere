import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

type ImageGalleryProps = {
  images: string[];
  title: string;
};

function ImageGallery({ images, title }: ImageGalleryProps) {
  const [imageIndex, setImageIndex] = useState(-1);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = images.map((image) => ({
    src: `/images/${image}`,
  }));

  if (images.length === 0) return null;

  return (
    <div className="project-gallery">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <button
              type="button"
              className="gallery-image-button"
              onClick={() => setImageIndex(index)}
              aria-label={`Open ${title} screenshot ${index + 1}`}
            >
              <img
                src={`/images/${image}`}
                alt={`${title} screenshot ${index + 1}`}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && (
        <div className="gallery-navigation">
          <button
            type="button"
            className="gallery-nav-button"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={activeSlide === 0}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="gallery-pagination">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                className={`gallery-dot ${
                  activeSlide === index ? "active" : ""
                }`}
                onClick={() => swiperRef.current?.slideTo(index)}
                aria-label={`Go to image ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="gallery-nav-button"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={activeSlide === images.length - 1}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      {imageIndex >= 0 && (
        <Lightbox
          open={true}
          close={() => setImageIndex(-1)}
          index={imageIndex}
          slides={slides}
        />
      )}
    </div>
  );
}

export default ImageGallery;
