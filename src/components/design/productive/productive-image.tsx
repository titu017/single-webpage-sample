interface Props {
  productive_img: String;
  productive_alt: String;
}
function ProductiveImage({ productive_img, productive_alt }: Props) {
  return (
    <div className="md:w-1/2">
      <img
        src={"" + productive_img}
        alt={"" + productive_alt}
        className="mb-10"
      />
    </div>
  );
}
export default ProductiveImage;
