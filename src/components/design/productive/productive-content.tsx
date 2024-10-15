import Content from "./content";
import ProductiveLink from "./productive-link";

function ProductiveContent() {
  return (
    <div className="flex flex-col items-start md:w-1/2">
      <Content
        content_header={"Stay productive, wherever you are"}
        content_p1={
          "Never let location be an issue when accessing your files. Fylo has  you covered for all your file storage needs."
        }
        content_p2={
          "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required"
        }
      />

      {/* <!-- Link --> */}
      <ProductiveLink
        link_href={"href"}
        link_title={"See how Flyo works"}
        link_img={"/src/assets/images/icon-arrow.svg"}
        link_alt={"arrow-icon"}
      />
    </div>
  );
}
export default ProductiveContent;
