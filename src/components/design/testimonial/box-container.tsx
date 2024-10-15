import QuotesImage from "./quotes-image";
import ReviewBox from "./review-box";

function BoxContainer() {
  return (
    <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
      {/* <!-- Quotes Image --> */}
      <QuotesImage
        quote_img={"/src/assets/images/bg-quotes.png"}
        quote_img_alt={"quote-image"}
      />

      {/* <!-- Box 1 --> */}
      <ReviewBox
        review_content_p={
          "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
        review_customer_img={"/src/assets/images/profile-1.jpg"}
        review_customer_img_alt={"customer-avatar"}
        review_customer_name={"Satish Patel"}
        review_customer_position={"Founder & CEO. Huddle"}
      />

      {/* <!-- Box 2 --> */}
      <ReviewBox
        review_content_p={
          "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
        review_customer_img={"/src/assets/images/profile-2.jpg"}
        review_customer_img_alt={"customer-avatar"}
        review_customer_name={"Bruce McKenzie"}
        review_customer_position={"Founder & CEO. Huddle 2"}
      />

      {/* <!-- Box 3 --> */}
      <ReviewBox
        review_content_p={
          "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
        review_customer_img={"/src/assets/images/profile-3.jpg"}
        review_customer_img_alt={"customer-avatar"}
        review_customer_name={"Eva Boyd"}
        review_customer_position={"Founder & CEO. Huddle 3"}
      />
    </div>
  );
}
export default BoxContainer;
