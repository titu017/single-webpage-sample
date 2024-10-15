import FeatureItem from "./feature-item";

function FeatureRow() {
  return (
    <div className="flex flex-col space-y-24 mb-28 text-center md:flex-row md:space-y-0">
      {/* <!-- Item 1 --> */}
      <FeatureItem
        item_img={"/src/assets/images/icon-access-anywhere.svg"}
        item_header={"Access your file from anywhere"}
        item_alt={"access"}
        item_p={
          "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        }
      />

      {/* <!-- Item 2 --> */}
      <FeatureItem
        item_img={"/src/assets/images/icon-security.svg"}
        item_header={"Security you can trust"}
        item_alt={"security"}
        item_p={
          "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        }
      />
    </div>
  );
}
export default FeatureRow;
