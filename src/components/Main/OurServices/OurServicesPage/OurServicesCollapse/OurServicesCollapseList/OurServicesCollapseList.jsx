const OurServicesCollapseList = ({ listOfServices }) => {
  return (
    <ul className="font-medium">
      {listOfServices.map(({ id, service }) => {
        return <ul className="list-disc pl-4"><li key={id}>{service}</li></ul>;
      })}
    </ul>
  );
};

export default OurServicesCollapseList;
