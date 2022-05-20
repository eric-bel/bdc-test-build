const ListWrapper = (props) => {
  return (
    <div className="w-[47%] mob:w-full mob:m-x-auto tab:w-4/5 tab:m-x-auto">
      {props.children}
    </div>
  );
};

export default ListWrapper;
