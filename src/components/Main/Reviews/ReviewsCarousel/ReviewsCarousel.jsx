// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import test from "../../../../assets/employees/marieta.jpg";
import fedor from "../../../../assets/employees/fedor.jpg";
import lela from "../../../../assets/employees/lela.jpg";

// Import Swiper styles
import "swiper/css";

const ReviewsCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className="h-32 p-20">
        <SwiperSlide className="bg-cyan-800">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-yellow-400">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-blue-400">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-cyan-400">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-yellow-800">Slide 4</SwiperSlide>
        <SwiperSlide className="">
          <img src={test} alt="test"></img>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={fedor} alt="test"></img>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={lela} alt="test"></img>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default ReviewsCarousel;
