import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import Testimonal from "./Testimonal";
import FaqSection from "./FaqSection";
import Footer from "../components/Footer";
import Owner from "./Owner";



const Home = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* HERO */}
      <section id="home" className="min-h-screen">
        <HeroSection />
      </section>


      {/* ABOUT */}
      <section id="about" className="relative">
        <AboutSection />
      </section>


      {/* TEAM */}
      <section id="team" className="relative">
        <TeamSection />
      </section>



      {/* TESTIMONIALS (slight overlap feel) */}
      <section id="testimonials" >
        <Testimonal />
      </section>

      {/* FAQ */}

      <section id="faq">
        <FaqSection />
      </section>

      {/* FOOTER (soft fade out instead of hard cut) */}
      <div className="h-24 bg-gradient-to-b from-black to-gray-950" />
      <Footer />
    </div>
  );
};

export default Home;