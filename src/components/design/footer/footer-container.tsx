import EmailPhoneFooter from "./email-phone";
import FooterMenu from "./footer-menu";
import FooterSocial from "./footer_social";

function FooterContainer() {
  return (
    <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
      {/* <!-- Email & Phone --> */}
      <EmailPhoneFooter
        footer_phone_icon_img={"/src/assets/images/icon-phone.svg"}
        footer_phone_icon_img_alt={"icon-phone"}
        footer_phone_number={"+1-543-123-4567"}
        footer_email_icon_img={"/src/assets/images/icon-email.svg"}
        footer_email_icon_img_alt={"email-icon"}
        footer_email_id={"example@fylo.com"}
      />

      {/* <!-- Menus --> */}
      <FooterMenu
        about={"About"}
        about_href={"#"}
        jobs={"Jobs"}
        jobs_href={"#"}
        press={"Press"}
        press_href={"#"}
        blog={"Blog"}
        blog_href={"#"}
        contact_us={"Contact Us"}
        contact_us_href={"#"}
        terms={"Terms"}
        terms_href={"#"}
        privacy={"Privacy"}
        privacy_href={"#"}
      />

      {/* <!-- Social --> */}
      <FooterSocial />
    </div>
  );
}
export default FooterContainer;
