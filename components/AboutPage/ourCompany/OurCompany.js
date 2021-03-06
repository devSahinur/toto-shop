import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function OurCompany() {
  const data = [
    { id: 1, image: "https://i.ibb.co/6Y2SqSD/brand1.png" },
    { id: 2, image: "https://i.ibb.co/zsNYfy7/brand2.png" },
    { id: 3, image: "https://i.ibb.co/KmHLk11/brand3.png" },
    { id: 4, image: "https://i.ibb.co/QFyrJ7Y/brand4.png" },
    { id: 5, image: "https://i.ibb.co/6Y2SqSD/brand1.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="px-2 md:px-0">
      <h1 className="uppercase text-center font-medium text-2xl md:text-3xl">
        Meet with our team
      </h1>

      <Slider
        {...settings}
        className="pt-8 flex items-center max-w-6xl overflow-x-scroll"
        id="scrollBarHide"
      >
        {data?.map(({ id, image }) => (
          <div key={id} className="max-w-fit mx-auto">
            <Image
              src={image}
              width={300}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default OurCompany;
