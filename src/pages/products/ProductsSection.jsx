const ProductsSection = (props) => {
  return (
    <section className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 justify-items-center content-around gap-10 gap-y-16 mt-20">
      {props.children}
    </section>
  );
};

export default ProductsSection;
