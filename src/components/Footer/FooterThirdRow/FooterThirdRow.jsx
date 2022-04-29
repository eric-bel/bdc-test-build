import FooterEmail from "../FooterEmail/FooterEmail";

const FooterThirdRow = (props) => {
  return (
    <div className="flex justify-between">
      <FooterEmail />
      <div className="">PAYMENT METHODS</div>
    </div>
  );
};

export default FooterThirdRow;
