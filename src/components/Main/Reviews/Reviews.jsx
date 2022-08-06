import ReviewsCarousel from "./ReviewsCarousel/ReviewsCarousel";
import { withTranslation } from "react-i18next";

const Reviews = ({ t }) => {
  return (
    <div className="main_container">
      <h4
        className="text-[#091D3E] text-[40px] font-semibold mt-20 mb-20
        mob:text-[16px] mob:font-bold mob:text-center mob:mb-5 mob:mt-10
        tab:text-[18px] tab:font-bold
        md:text-[20px] md:font-bold
        "
      >
        {t("reviews")}
      </h4>
      <div className="my-20 p-8 rounded tab:px-[0px] mob:px-[15px] mob:mt-6 bg-slate-200">
        <ReviewsCarousel />
      </div>
    </div>
  );
};

export default withTranslation()(Reviews);
