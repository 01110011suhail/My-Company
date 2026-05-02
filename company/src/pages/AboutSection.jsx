import { useRef } from "react";

const AboutSection = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen bg-[#05060A] text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6">

        <div className="max-w-5xl mx-auto">

          <p className="text-xs tracking-[0.4em] uppercase text-white/40">
            Global Technology & Advisory
          </p>

          <h1 className="mt-8 text-4xl md:text-6xl font-light leading-[1.1] tracking-tight">
            We design and deliver systems that power modern enterprises.
          </h1>

          <p className="mt-8 text-white/50 text-sm md:text-base leading-relaxed max-w-2xl">
            A focused engineering organization building secure, scalable, and resilient digital platforms
            for global enterprises operating at high complexity.
          </p>

          <div className="mt-12 flex items-center gap-10 text-sm text-white/50">

            <div>
              <p className="text-white text-lg font-light">30+</p>
              <p className="text-xs text-white/40 mt-1">Countries</p>
            </div>

            <div>
              <p className="text-white text-lg font-light">100+</p>
              <p className="text-xs text-white/40 mt-1">Enterprise Systems</p>
            </div>

            <div>
              <p className="text-white text-lg font-light">24/7</p>
              <p className="text-xs text-white/40 mt-1">Global Coverage</p>
            </div>

          </div>

          <button
            onClick={scrollToAbout}
            className="mt-14 text-sm text-white border-b border-white/30 hover:border-white transition"
          >
            Explore our capabilities
          </button>

        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section ref={aboutRef} className="py-28 px-6 bg-[#04060A]">

        <div className="max-w-5xl mx-auto space-y-24">

          {/* PRINCIPLE */}
          <div>

            <p className="text-xs tracking-[0.4em] uppercase text-white/40">
              Approach
            </p>

            <h2 className="mt-6 text-3xl md:text-4xl font-light leading-tight">
              Engineering clarity into complex enterprise systems.
            </h2>

            <p className="mt-6 text-white/50 leading-relaxed max-w-2xl">
              We operate at the intersection of design, systems engineering, and large-scale infrastructure,
              focusing on long-term stability rather than short-term iteration cycles.
            </p>

          </div>

          {/* CAPABILITIES (EDITORIAL LIST STYLE) */}
          <div className="space-y-10">

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-lg font-light">Enterprise Architecture</h3>
              <p className="text-white/50 text-sm mt-2 max-w-2xl">
                Distributed systems designed for resilience, performance, and predictable scaling under enterprise workloads.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-lg font-light">Cloud Infrastructure</h3>
              <p className="text-white/50 text-sm mt-2 max-w-2xl">
                Multi-region cloud systems across AWS, Azure, and hybrid environments with high availability design patterns.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-lg font-light">AI & Data Systems</h3>
              <p className="text-white/50 text-sm mt-2 max-w-2xl">
                Enterprise-grade AI pipelines, data infrastructure, and automation systems integrated into core business workflows.
              </p>
            </div>

          </div>

          {/* INDUSTRY FOOTPRINT */}
          <div className="border-t border-white/10 pt-10">

            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-6">
              Industry Coverage
            </p>

            <p className="text-white/50 text-sm leading-relaxed max-w-3xl">
              Financial services, healthcare systems, industrial manufacturing, retail platforms,
              telecommunications infrastructure, and public sector technology ecosystems.
            </p>

          </div>

        </div>
        

      </section>

      {/* SIGNATURE VISUAL (this is what was missing) */}
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px]">
        <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 blur-[120px] opacity-30 animate-pulse" />
      </div>

      {/* FLOATING ENERGY LINE (subtle motion identity) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </div>    
    
  );
};

export default AboutSection;