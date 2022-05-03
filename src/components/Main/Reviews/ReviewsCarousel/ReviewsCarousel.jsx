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
    <>
      <div className="mob:hidden">
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
            <img className="rounded" src={rev1} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev2} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev3} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev4} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev5} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev6} alt="ReviewsImg"></img>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden mob:block">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img className="rounded-md" src={rev1} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev2} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev3} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev4} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev5} alt="ReviewsImg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-md" src={rev6} alt="ReviewsImg"></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ReviewsCarousel;
