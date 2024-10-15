import FeatureRow from "./feature-row";

function FeatureContainer() {
  return (
    <div className="container mx-auto px-6 pb-32">
      {/* <!-- First Row --> */}
      <FeatureRow />
      {/* <!-- Second Row --> */}
      <FeatureRow />
    </div>
  );
}
export default FeatureContainer;
