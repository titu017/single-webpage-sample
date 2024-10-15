import SubscribeContainer from "../design/subscribe/subscribe-container";

function SubscribeSection() {
  return (
    <section
      id="early-access"
      className="relative px-6 dark:bg-darkBlue2 md:px-0"
    >
      <SubscribeContainer
        subscribe_title_header={"Get early access today"}
        subscribe_p={
          "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
        }
        subscribe_email_placeholder={"example@example.com"}
        subscribe_btn_title={"Get Started For Free"}
      />
    </section>
  );
}
export default SubscribeSection;
