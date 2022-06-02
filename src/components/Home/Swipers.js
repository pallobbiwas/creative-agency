import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../images/carousel-1.png";
import img2 from "../../images/carousel-2.png";
import img3 from "../../images/carousel-3.png";
import img4 from "../../images/carousel-4.png";
import img5 from "../../images/carousel-5.png";

const Swipers = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img className="w-96 h-96" src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-96 h-96" src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-96 h-96" src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-96 h-96" src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-96 h-96" src={img5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
