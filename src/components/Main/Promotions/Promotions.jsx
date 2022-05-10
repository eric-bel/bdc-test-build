import PromotionsComp from "./PromotionsComp/PromotionsComp";
import prom1 from "../../../assets/promotionsImg/prom1.jpg";
import prom2 from "../../../assets/promotionsImg/prom2.jpg";
import prom3 from "../../../assets/promotionsImg/prom3.jpg";
import prom4 from "../../../assets/promotionsImg/prom4.jpg";
import prom5 from "../../../assets/promotionsImg/prom5.png";
import prom6 from "../../../assets/promotionsImg/prom6.jpg";
import prom7 from "../../../assets/promotionsImg/prom7.jpg";
import prom8 from "../../../assets/promotionsImg/prom8.jpg";
import prom9 from "../../../assets/promotionsImg/prom9.jpg";
import prom10 from "../../../assets/promotionsImg/prom10.jpg";
import prom11 from "../../../assets/promotionsImg/prom11.jpg";
import prom12 from "../../../assets/promotionsImg/prom12.jpg";

const promotionsList = [
  {
    title: "Подготовь улыбку к лету!",
    content:
      "AMAZING WHITE Premium (USA)-новейшая клиническая система⭐️⭐️⭐️Только в апреле всего 200 лари!",
    img: prom1,
    id: 1,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "AMAZING WHITE Premium (USA)-новейшая клиническая система⭐️⭐️⭐️Только в апреле всего 200 лари!",
    img: prom2,
    id: 2,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "AMAZING WHITE Premium (USA)-новейшая клиническая система⭐️⭐️⭐️Только в апреле всего 200 лари!",
    img: prom3,
    id: 3,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "Скидка 10% на все стоматологические услуги всем членам Вашей семьи! Акция длится до 15.09.2021",
    img: prom4,
    id: 4,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "Скидка 10% на все стоматологические услуги всем членам Вашей семьи! Акция длится до 15.09.2021",
    img: prom5,
    id: 5,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "Скидка 10% на все стоматологические услуги всем членам Вашей семьи! Акция длится до 15.09.2021",
    img: prom6,
    id: 6,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "Скидка 10% на все стоматологические услуги всем членам Вашей семьи! Акция длится до 15.09.2021",
    img: prom7,
    id: 7,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "Скидка 10% на все стоматологические услуги всем членам Вашей семьи! Акция длится до 15.09.2021",
    img: prom8,
    id: 8,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "Скидка 10% на все стоматологические услуги всем членам Вашей семьи! Акция длится до 15.09.2021",
    img: prom9,
    id: 9,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "Скидка 10% на все стоматологические услуги всем членам Вашей семьи! Акция длится до 15.09.2021",
    img: prom10,
    id: 10,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "Скидка 10% на все стоматологические услуги всем членам Вашей семьи! Акция длится до 15.09.2021",
    img: prom11,
    id: 11,
  },
  {
    title: "Подготовь улыбку к лету!",
    content:
      "Скидка 10% на все стоматологические услуги всем членам Вашей семьи! Акция длится до 15.09.2021",
    img: prom12,
    id: 12,
  },
];

const Promotions = () => {
  return (
    <div className="main_container text-center py-20">
      <h1 className="text-red-700 font-bold text-2xl">НАШИИ АКЦИИ</h1>
      <div className="text-left w-3/4 mx-auto my-5">
        Текскт-заголовок для раздела "Акции" Текскт-заголовок для раздела
        "Акции" Текскт-заголовок для раздела "Акции" Текскт-заголовок для
        раздела "Акции"
      </div>
      <PromotionsComp promotionsList={promotionsList} />
    </div>
  );
};

export default Promotions;
