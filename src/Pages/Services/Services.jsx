import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { id: 1, title: "Web Development", description: "Building responsive and modern websites.", icon: "🌐" },
  { id: 2, title: "Backend Development", description: "Secure and scalable backend solutions.", icon: "⚙️" },
  { id: 3, title: "UI/UX Design", description: "User-friendly and visually appealing designs.", icon: "🎨" },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 mt-0 px-6 md:px-16 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-400 text-center mb-10 uppercase tracking-wider">
          My Services
        </h2>
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="p-6">
              <div className="bg-[var(--bg-color-2)] backdrop-blur-xl p-6 rounded-xl shadow-lg border border-transparent hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-teal-500/50 text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-teal-300">{service.title}</h3>
                <p className="text-gray-400 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
