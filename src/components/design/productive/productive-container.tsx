import ProductiveContent from "./productive-content";
import ProductiveImage from "./productive-image";

function ProductiveContainer() {
  return (
    <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
      {/* <!-- Image --> */}
      <ProductiveImage
        productive_img={"/src/assets/images/illustration-stay-productive.png"}
        productive_alt={"stay-productive-image"}
      />
      {/* <!-- Content --> */}
      <ProductiveContent />
    </div>
  );
}
export default ProductiveContainer;
