import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t to-transparent  z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/devSahinur/ishop/main/src/images/3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/devSahinur/ishop/main/src/images/1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/devSahinur/ishop/main/src/images/2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.ibb.co/bdqZwjq/pay.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.ibb.co/qyPyMGp/200x1200-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.ibb.co/Nyn2zfY/ros.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;


