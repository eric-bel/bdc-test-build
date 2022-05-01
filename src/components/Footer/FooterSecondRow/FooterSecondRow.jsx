import FooterAdress from "../FooterAdress/FooterAdress";
import FooterEmail from "../FooterEmail/FooterEmail";

const FooterSecondRow = (props) => {
  return (
    <div className="flex flex-col justify-start gap-1">
      <FooterAdress />
      <FooterEmail />
    </div>
  );
};

export default FooterSecondRow;
