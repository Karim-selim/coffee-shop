const TextHolder = (props) => {
  return (
    <header className="mb-8 md:mb-20 flex flex-col text-center">
      {props.children}
    </header>
  );
};

export default TextHolder;
