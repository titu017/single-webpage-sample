interface Props {
  quote_img: String;
  quote_img_alt: String;
}
function QuotesImage({ quote_img, quote_img_alt }: Props) {
  return (
    <img
      src={"" + quote_img}
      alt={"" + quote_img_alt}
      className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
    />
  );
}
export default QuotesImage;
