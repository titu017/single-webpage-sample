interface Props {
  subscribe_title_header: String;
  subscribe_p: String;
  subscribe_email_placeholder: string;
  subscribe_btn_title: String;
}
function SubscribeContainer({
  subscribe_title_header,
  subscribe_p,
  subscribe_email_placeholder,
  subscribe_btn_title,
}: Props) {
  return (
    <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
      <h5 className="text-2xl font-bold">{subscribe_title_header}</h5>
      <p className="text-sm">{subscribe_p}</p>
      {/* <!-- Input & Button Container --> */}
      <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="w-full md:flex-1">
          <input
            type="text"
            className="w-full px-10 py-3 rounded-full focus:outline-none"
            placeholder={subscribe_email_placeholder}
          />
        </div>

        <button className="w-full p-3 px-6 rounded-full bg-accentBlue md:w-56 hover:scale-95">
          {subscribe_btn_title}
        </button>
      </div>
    </div>
  );
}
export default SubscribeContainer;
