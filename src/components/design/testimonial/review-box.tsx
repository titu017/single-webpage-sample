interface Props {
  review_content_p: String;
  review_customer_img: String;
  review_customer_img_alt: String;
  review_customer_name: String;
  review_customer_position: String;
}
function ReviewBox({
  review_content_p,
  review_customer_img,
  review_customer_img_alt,
  review_customer_name,
  review_customer_position,
}: Props) {
  return (
    <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
      <p className="text-sm leading-5 md:text-lg">{review_content_p}</p>
      {/* <!-- Customer Info --> */}
      <div className="flex space-x-4">
        <img
          src={"" + review_customer_img}
          alt={"" + review_customer_img_alt}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h5 className="text-sm font-semibold">{review_customer_name}</h5>
          <p className="text-xs font-extralight">{review_customer_position}</p>
        </div>
      </div>
    </div>
  );
}
export default ReviewBox;
