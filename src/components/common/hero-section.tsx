import HeroContainer from "../design/hero/hero-container";

function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
    >
      <HeroContainer
        hero_img={"/src/assets/images/illustration-intro.png"}
        hero_img_alt={"intro-pic"}
        hero_h1={"All your files in one secure location, assessible anywhere."}
        hero_p={
          "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers"
        }
        hero_btn={"Get Started"}
      />
    </section>
  );
}
export default HeroSection;
