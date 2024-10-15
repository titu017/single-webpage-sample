interface Props {
  content_header: String;
  content_p1: String;
  content_p2: String;
}
function Content({ content_header, content_p1, content_p2 }: Props) {
  return (
    <div className="flex flex-col space-y-5">
      <h4 className="max-w-md text-xl font-bold md:text-4xl">
        {content_header}
      </h4>
      <p className="text-md md:text-lg">{content_p1}</p>

      <p className="text-md md:text-lg">{content_p2}</p>
    </div>
  );
}
export default Content;
