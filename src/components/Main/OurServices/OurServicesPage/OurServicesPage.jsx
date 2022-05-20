import PageHeader from "../../CustomTemplates/PageHeader/PageHeader";
import OurServicesCollapse from "./OurServicesCollapse/OurServicesCollapse";
import dentalcare from "../../../../assets/servicesPage/dentalcare.jpg";

const OurServicesPage = () => {
  return (
    <>
      <PageHeader img={dentalcare} />
      <div className="bg-[#091D3E] pb-40 min1920:mx-auto min1920:max-w-[1780px]">
        <OurServicesCollapse />
      </div>
    </>
  );
};

export default OurServicesPage;
