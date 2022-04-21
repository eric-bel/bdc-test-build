import ReviewsCarousel from "./ReviewsCarousel/ReviewsCarousel";

const Reviews = (props) => {
  return (
    <>
      <div className="main_container flex justify-evenly flex-wrap">
        <ReviewsCarousel />
        <ReviewsCarousel />
      </div>
    </>
  );
};

export default Reviews;
