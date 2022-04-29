import FooterPhoneNumbers from "../FooterPhoneNumbers/FooterPhoneNumbers";
import Social from "../Social/Social";

const FooterFirstRow = (props) => {
  return (
    <div className="flex justify-between">
      <Social />
      <FooterPhoneNumbers />
    </div>
  );
};

export default FooterFirstRow;
