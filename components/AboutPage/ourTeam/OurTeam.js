import SingleTeam from "./SingleTeam/SingleTeam";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurTeam() {
  // const data=[
  //   {id:1,image:'/img/team-1.jpg',name:'Jane Cooper',status:'Founder',fbLink:'#',insLink:'#',twiLink:'#'},
  //   {id:2,image:'/img/team-2.jpg',name:'Esther Howard',status:'Team Leader',fbLink:'#',insLink:'#',twiLink:'#'},
  //   {id:3,image:'/img/team-3.jpg',name:'Kristin Wastson',status:'Senior Officer',fbLink:'#',insLink:'#',twiLink:'#'},
  //   {id:4,image:'/img/team-4.jpg',name:'Ariene McCoy',status:'Marketing Officer',fbLink:'#',insLink:'#',twiLink:'#'},
  // ]

  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/827zNs3/team-1.jpg",
      name: "Jane Cooper",
      status: "Founder",
      fbLink: "#",
      insLink: "#",
      twiLink: "#",
    },
    {
      id: 2,
      image: "https://i.ibb.co/tYQgkjT/team-2.jpg",
      name: "Esther Howard",
      status: "Team Leader",
      fbLink: "#",
      insLink: "#",
      twiLink: "#",
    },
    {
      id: 3,
      image: "https://i.ibb.co/W24xZvB/team-3.jpg",
      name: "Kristin Wastson",
      status: "Senior Officer",
      fbLink: "#",
      insLink: "#",
      twiLink: "#",
    },
    {
      id: 4,
      image: "https://i.ibb.co/Bzy1w0F/team-4.jpg",
      name: "Ariene McCoy",
      status: "Marketing Officer",
      fbLink: "#",
      insLink: "#",
      twiLink: "#",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
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
        {data?.map(({ id, image, name, status, fbLink, insLink, twiLink }) => (
          <SingleTeam
            key={id}
            id={id}
            image={image}
            name={name}
            status={status}
            fbLink={fbLink}
            insLink={insLink}
            twiLink={twiLink}
          />
        ))}
      </Slider>
    </section>
  );
}

export default OurTeam;
