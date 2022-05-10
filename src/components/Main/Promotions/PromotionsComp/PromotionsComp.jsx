const PromotionsComp = ({ promotionsList }) => {
  return (
    <div className="flex flex-wrap gap-1 mob:flex-col">
      {promotionsList.map((promotion) => {
        return (
          <ul className="my-4 hover:shadow-xl border border-gray-400 w-2/5 mx-auto rounded mob:w-4/5 tab:3/4">
            <li key={promotion.id}>
              <p className="font-bold text-xl">{promotion.title}</p>
              <p className="mb-4">{promotion.content}</p>
              <img
                className="w-full"
                src={promotion.img}
                alt="promotion"
              ></img>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default PromotionsComp;
