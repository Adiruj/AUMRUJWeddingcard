"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function GalleryCarousel() {
  const images = [
    "/gallery/01.JPEG",
    "/gallery/02.JPEG",
    "/gallery/03.JPEG",
    "/gallery/04.JPEG",
    "/gallery/05.JPEG",
    "/gallery/06.JPG",
    "/gallery/07.JPEG",
    "/gallery/08.JPG",
    "/gallery/09.JPG",
    "/gallery/10.JPG",
    "/gallery/11.JPG",
    "/gallery/12.JPG",
    "/gallery/13.JPG",
    "/gallery/14.JPG",
    "/gallery/15.JPG",
    "/gallery/16.JPG",
    "/gallery/17.JPG",
    "/gallery/18.JPG",
    "/gallery/19.JPG",
    "/gallery/20.JPG",
    "/gallery/21.JPG",
    "/gallery/22.JPG",
    "/gallery/23.JPG",
    "/gallery/24.JPG",
  ];

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <Carousel
        autoPlay={true}
        dynamicHeight={false}
        emulateTouch={true}
        infiniteLoop={true}
        interval={4000}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full">
            <img
              src={src}
              className="w-full h-auto sm:max-h-[500px] md:max-h-[900px] object-contain rounded-xl"
              alt={`img-${index}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
