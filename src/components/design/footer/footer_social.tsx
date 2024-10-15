import FooterSocialItem from "./footer-social-item";

function FooterSocial() {
  return (
    // facebook
    <div className="flex justify-center pb-10 space-x-3">
      <FooterSocialItem
        social_href={"#"}
        social_img={"/src/assets/images/facebook.svg"}
        social_img_alt={"facebook"}
      />
      {/* twitter */}
      <FooterSocialItem
        social_href={"#"}
        social_img={"/src/assets/images/twitter.svg"}
        social_img_alt={"twitter"}
      />
      {/* instagram */}
      <FooterSocialItem
        social_href={"#"}
        social_img={"/src/assets/images/instagram.svg"}
        social_img_alt={"instagram"}
      />
    </div>
  );
}
export default FooterSocial;
