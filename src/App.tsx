import FeatureSection from "./components/common/feature-section";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import HeroSection from "./components/common/hero-section";
import ProductiveSection from "./components/common/productive-section";
import SubscribeSection from "./components/common/subscribe-section";
import TestimonialSection from "./components/common/testimonial-section";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <ProductiveSection />
      <FeatureSection />
      <ProductiveSection />
      <TestimonialSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
