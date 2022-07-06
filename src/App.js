import FeatureSection from './components/featureSection/FeatureSection';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Testimonials from './components/testimonials/Testimonials';
import CtaSection from './components/ctaSection/CtaSection';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
