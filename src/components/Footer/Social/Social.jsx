import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Social = (props) => {
  return (
    <div className="flex gap-5">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/DentalClinicBatumi"
      >
        <ImFacebook2 className="text-white text-[40px]" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/batumidentalclinic/"
      >
        <BsInstagram className="text-white text-[40px]" />
      </a>
    </div>
  );
};

export default Social;
