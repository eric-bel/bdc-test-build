import PageHeader from "../../CustomTemplates/PageHeader/PageHeader";
import servicesPageHeader from "../../../../assets/pageHeaderImg/ph2.jpg";
import OurServicesCollapse from "./OurServicesCollapse/OurServicesCollapse";
import kinder from "../../../../assets/servicesPage/kinder.jpg";

const OurServicesPage = () => {
  return (
    <>
      <PageHeader img={servicesPageHeader} />
      <div className="main_container bg-[#091D3E] pb-14">
        <h1 className="text-white font-bold text-2xl ">
          <OurServicesCollapse />
        </h1>
        <img src={kinder} alt="kinder" className="rounded w-1/2 my-14 mx-auto" />
      </div>
    </>
  );
};

export default OurServicesPage;
