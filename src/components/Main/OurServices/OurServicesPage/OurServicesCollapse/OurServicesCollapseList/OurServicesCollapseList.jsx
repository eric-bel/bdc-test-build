const OurServicesCollapseList = ({ listOfServices }) => {
  return (
    <ul className="text-center">
      {listOfServices.map(({ id, service }) => {
        return <li key={id}>{service} <hr></hr> </li>;
      })}
    </ul>
  );
};

export default OurServicesCollapseList;
