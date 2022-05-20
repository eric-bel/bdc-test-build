// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import rev1 from "../../../../assets/reviewsimg/1.jpeg";
import rev2 from "../../../../assets/reviewsimg/2.jpeg";
import rev3 from "../../../../assets/reviewsimg/3.jpeg";
import rev4 from "../../../../assets/reviewsimg/4.jpeg";
import rev5 from "../../../../assets/reviewsimg/5.jpeg";
import rev6 from "../../../../assets/reviewsimg/6.jpeg";
import rev7 from "../../../../assets/reviewsimg/7.jpeg";
import rev8 from "../../../../assets/reviewsimg/8.jpeg";
import rev9 from "../../../../assets/reviewsimg/9.png";
import rev10 from "../../../../assets/reviewsimg/10.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper";

const reviewsImgs = [
  { img: rev1, id: 1 },
  { img: rev2, id: 2 },
  { img: rev3, id: 3 },
  { img: rev4, id: 4 },
  { img: rev5, id: 5 },
  { img: rev6, id: 6 },
  { img: rev7, id: 7 },
  { img: rev8, id: 8 },
  { img: rev9, id: 9 },
  { img: rev10, id: 10 },
];

const ReviewsCarousel = () => {
  return (
    <>
      <div className="mob:hidden">
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
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          {/* {reviewsImgs.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                className="rounded-md shadow-lg m-4"
                src={img.img}
                alt="ReviewsImg"
                key={img.id}
              ></img>
            </SwiperSlide>
          ))} */}
          <SwiperSlide>
            <img src={reviewsImgs[0].img} alt="ReviewsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reviewsImgs[1].img} alt="ReviewsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reviewsImgs[2].img} alt="ReviewsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reviewsImgs[4].img} alt="ReviewsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reviewsImgs[5].img} alt="ReviewsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reviewsImgs[6].img} alt="ReviewsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reviewsImgs[7].img} alt="ReviewsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reviewsImgs[8].img} alt="ReviewsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reviewsImgs[9].img} alt="ReviewsImg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ReviewsCarousel;
