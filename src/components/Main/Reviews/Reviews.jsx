import ReviewsCarousel from "./ReviewsCarousel/ReviewsCarousel";

const Reviews = (props) => {
  return (
    <>
      <div className="main_container flex justify-evenly mb-20 mt-24">
        <ReviewsCarousel />
      </div>
    </>
  );
};

export default Reviews;
