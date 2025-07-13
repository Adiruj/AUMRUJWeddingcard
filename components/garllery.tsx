"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function GalleryCarousel() {

  const images = [
    "/gallery/01.jpeg",
    "/gallery/02.jpeg",
    "/gallery/03.jpeg",
    "/gallery/04.jpeg",
    "/gallery/05.jpeg",
    "/gallery/06.jpg",
    "/gallery/07.jpeg",
    "/gallery/08.jpg",
    "/gallery/09.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
    "/gallery/13.jpg",
    "/gallery/14.jpg",
    "/gallery/15.jpg",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
    "/gallery/18.jpg",
    "/gallery/19.jpg",
    "/gallery/20.jpg",
    "/gallery/21.jpg",
    "/gallery/22.jpg",
    "/gallery/23.jpg",
    "/gallery/24.jpg",
  ];

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full">
            <img
              src={src}
              alt={`img-${index}`}
              className="w-full h-auto max-h-[500px] object-contain rounded-xl"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
