import ReviewsCarousel from "./ReviewsCarousel/ReviewsCarousel";

const Reviews = () => {
  return (
    <div className="main_container">
      <h4
        className="text-[#091D3E] text-[40px] font-semibold mt-20 mb-20	
        mob:text-[16px] mob:font-bold mob:text-center
        tab:text-[18px] tab:font-bold
        md:text-[20px] md:font-bold
        "
      >
        Отзывы
      </h4>
      <div className="my-20 px-8 tab:px-[0px]">
        <ReviewsCarousel />
      </div>
    </div>
  );
};

export default Reviews;
