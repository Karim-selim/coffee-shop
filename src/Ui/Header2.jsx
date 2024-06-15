const Header2 = (props) => {
  return (
    <h2
      className={`text-4xl font-semibold mb-5 leading-[3rem] ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export default Header2;
