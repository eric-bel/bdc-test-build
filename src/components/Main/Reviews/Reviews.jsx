import ReviewsCarousel from "./ReviewsCarousel/ReviewsCarousel";

const Reviews = (props) => {
  return (
    <div className="main_container my-20">
      <h3 className="text-center mb-5">Отзывы</h3>
      <ReviewsCarousel />
    </div>
  );
};

export default Reviews;
