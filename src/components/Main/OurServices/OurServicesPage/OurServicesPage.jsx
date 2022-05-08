import PageHeader from "../../CustomTemplates/PageHeader/PageHeader";
import servicesPageHeader from "../../../../assets/pageHeaderImg/ph1.jpg";

const OurServicesPage = () => {
  return (
    <>
      <PageHeader img={servicesPageHeader} />
      <div className="main_container">
        <h1 className="text-center text-white font-bold text-2xl h-[1900px] bg-emerald-900">
          Наши услуги
        </h1>
      </div>
    </>
  );
};

export default OurServicesPage;
