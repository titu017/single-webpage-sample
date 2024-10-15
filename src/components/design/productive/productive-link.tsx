interface Props {
  link_href: String;
  link_title: String;
  link_img: String;
  link_alt: String;
}
function ProductiveLink({ link_href, link_title, link_img, link_alt }: Props) {
  return (
    <div className="block mt-4">
      <a
        href={"" + link_href}
        className="border-b border-accentCyan text-accentCyan"
      >
        {link_title}
        <img src={"" + link_img} alt={"" + link_alt} className="inline pb-2" />
      </a>
    </div>
  );
}
export default ProductiveLink;
