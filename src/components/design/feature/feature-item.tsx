interface Props {
  item_img: String;
  item_alt: String;
  item_header: String;
  item_p: String;
}
function FeatureItem({ item_img, item_alt, item_header, item_p }: Props) {
  return (
    <div className="flex flex-col items-center space-y-2 md:w-1/2">
      <div className="flex items-center justify-center h-24 mb-6">
        <img src={"" + item_img} alt={"" + item_alt} />
      </div>
      <h3 className="text-xl font-bold">{item_header}</h3>
      <p className="max-w-md">{item_p}</p>
    </div>
  );
}
export default FeatureItem;
