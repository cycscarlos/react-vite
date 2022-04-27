import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/img/avatar1.jpg";
import AVTR2 from "../../assets/img/avatar2.jpg";
import AVTR3 from "../../assets/img/avatar3.jpg";
import AVTR4 from "../../assets/img/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>Ernestina Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quia, facilis cumque dolore odio ratione commodi ipsum. Dolorum
            repellendus ad et quae possimus culpa tempore porro quisquam,
            facere, quos corrupti.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5>Joseph Key</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quia, facilis cumque dolore odio ratione commodi ipsum. Dolorum
            repellendus ad et quae possimus culpa tempore porro quisquam,
            facere, quos corrupti.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5>Arthur Taylor</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quia, facilis cumque dolore odio ratione commodi ipsum. Dolorum
            repellendus ad et quae possimus culpa tempore porro quisquam,
            facere, quos corrupti.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5>Juliette Aznard</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quia, facilis cumque dolore odio ratione commodi ipsum. Dolorum
            repellendus ad et quae possimus culpa tempore porro quisquam,
            facere, quos corrupti.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
