interface Props {
  social_href: String;
  social_img: String;
  social_img_alt: String;
}
function FooterSocialItem({ social_href, social_img, social_img_alt }: Props) {
  return (
    <div>
      <a href={"" + social_href}>
        <img
          src={"" + social_img}
          alt={"" + social_img_alt}
          className="p-2 bg-darkBlue rounded-full ficon"
        />
      </a>
    </div>
  );
}
export default FooterSocialItem;
