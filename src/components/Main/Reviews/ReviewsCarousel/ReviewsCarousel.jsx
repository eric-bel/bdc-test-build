// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
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

const reviewsImgs = [
  { img: rev1, id: 1 },
  { img: rev2, id: 2 },
  { img: rev3, id: 3 },
  { img: rev4, id: 4 },
  { img: rev5, id: 5 },
  { img: rev6, id: 6 },
];

// onSlideChange={() => console.log("slide change")}
// onSwiper={(swiper) => console.log(swiper)}

const ReviewsCarousel = () => {
  return (
    <>
      <div className="mob:hidden">
        <h4
          className="text-[#091D3E] text-[40px] font-semibold mt-20 mb-20	
      mob:text-[16px] mob:font-bold
      tab:text-[18px] tab:font-bold
      md:text-[20px] md:font-bold
      "
        >
          Отзывы
        </h4>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
        >
          {reviewsImgs.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                className="rounded-md shadow-xl"
                src={img.img}
                alt="ReviewsImg"
                key={img.id}
              ></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden mob:block">
        <h4
          className="text-[#091D3E] text-[40px] font-semibold mb-7	
      mob:text-[16px] mob:font-bold
      tab:text-[18px] tab:font-bold
      md:text-[20px] md:font-bold
      "
        >
          Отзывы
        </h4>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
        >
          {reviewsImgs.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                className="rounded-md shadow-lg"
                src={img.img}
                alt="ReviewsImg"
                key={img.id}
              ></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ReviewsCarousel;
