interface Props {
  hero_img: String;
  hero_img_alt: String;
  hero_h1: String;
  hero_p: String;
  hero_btn: String;
}

function HeroContainer({
  hero_img,
  hero_img_alt,
  hero_h1,
  hero_p,
  hero_btn,
}: Props) {
  return (
    <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
      <img
        src={"" + hero_img}
        // /src/assets/images/illustration-intro.png
        alt={"" + hero_img_alt}
        className="mx-auto"
      />
      <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
        {/* All your files in one secure location, assessible anywhere. */}
        {hero_h1}
      </h1>
      <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
        {hero_p}
      </p>
      <button className="p-3 rounded-full w-52 bg-accentBlue hover:scale-95">
        {/* Get Started */}
        {hero_btn}
      </button>
    </div>
  );
}
export default HeroContainer;
