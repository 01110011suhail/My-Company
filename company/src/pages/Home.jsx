import Navbar from "../components/Navbar";
import TeamSection from "./TeamSection";
import Testimonal from "./Testimonal";
import PromotionBnr from "./PromotionBnr";
import Owner from "./Owner";
import AboutSection from "./AboutSection";
import FaqSection from "./FaqSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">

      {/* NAVBAR (hero can stay full height if needed) */}
      <section className="w-full min-h-screen">
        <Navbar />
      </section>

      {/* TEAM */}
      <section className="w-full py-24">
        <TeamSection />
      </section>

      {/* TESTIMONIAL */}
      <section className="w-full py-24 bg-slate-50">
        <Testimonal />
      </section>

      {/* PROMOTION */}
      <section className="w-full py-24">
        <PromotionBnr />
      </section>

      {/* OWNER */}
      <section className="w-full py-24 bg-slate-50">
        <Owner />
      </section>

      {/* ABOUT */}
      <section className="w-full py-24">
        <AboutSection />
      </section>

      {/* FAQ */}
      <section className="w-full py-24 bg-white">
        <FaqSection />
      </section>
<section className="w-full">
  <Footer />
</section>
    </div>
  );
};

export default Home;