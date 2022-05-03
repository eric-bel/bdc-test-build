// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import rev1 from "../../../../assets/reviewsimg/1.jpeg";
import rev2 from "../../../../assets/reviewsimg/2.jpeg";
import rev3 from "../../../../assets/reviewsimg/3.jpeg";
import rev4 from "../../../../assets/reviewsimg/4.jpeg";
import rev5 from "../../../../assets/reviewsimg/5.jpeg";
import rev6 from "../../../../assets/reviewsimg/6.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ReviewsCarousel = () => {
  return (
    <div className="main_container mob:hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={rev1} alt="test"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rev2} alt="test"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rev3} alt="test"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rev4} alt="test"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rev5} alt="test"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rev6} alt="test"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel;
