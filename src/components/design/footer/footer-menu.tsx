interface Props {
  about: String;
  about_href: String;
  jobs: String;
  jobs_href: String;
  press: String;
  press_href: String;
  blog: String;
  blog_href: String;
  contact_us: String;
  contact_us_href: String;
  terms: String;
  terms_href: String;
  privacy: String;
  privacy_href: String;
}
function FooterMenu({
  about,
  about_href,
  jobs,
  jobs_href,
  press,
  press_href,
  blog,
  blog_href,
  contact_us,
  contact_us_href,
  terms,
  terms_href,
  privacy,
  privacy_href,
}: Props) {
  return (
    <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
      <div className="flex flex-col space-y-3">
        <a href={"" + about_href}>{about}</a>
        <a href={"" + jobs_href}>{jobs}</a>
        <a href={"" + press_href}>{press}</a>
        <a href={"" + blog_href}>{blog}</a>
      </div>
      <div className="flex flex-col space-y-3">
        <a href={"" + contact_us_href}>{contact_us}</a>
        <a href={"" + terms_href}>{terms}</a>
        <a href={"" + privacy_href}>{privacy}</a>
      </div>
    </div>
  );
}
export default FooterMenu;
