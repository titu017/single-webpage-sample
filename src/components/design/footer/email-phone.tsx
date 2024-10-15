interface Props {
  footer_phone_icon_img: String;
  footer_phone_icon_img_alt: String;
  footer_phone_number: String;
  footer_email_icon_img: String;
  footer_email_icon_img_alt: String;
  footer_email_id: String;
}
function EmailPhoneFooter({
  footer_phone_icon_img,
  footer_phone_icon_img_alt,
  footer_phone_number,
  footer_email_icon_img,
  footer_email_icon_img_alt,
  footer_email_id,
}: Props) {
  return (
    <div className="mt-10 space-y-6">
      <div className="flex items-center space-x-3 md:-mt-10">
        <div className="w-6">
          <img
            src={"" + footer_phone_icon_img}
            alt={"" + footer_phone_icon_img_alt}
            className="scale-10"
          />
        </div>
        <div>{footer_phone_number}</div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-6">
          <img
            src={"" + footer_email_icon_img}
            alt={"" + footer_email_icon_img_alt}
            className="scale-10"
          />
        </div>
        <div>{footer_email_id}</div>
      </div>
    </div>
  );
}
export default EmailPhoneFooter;
