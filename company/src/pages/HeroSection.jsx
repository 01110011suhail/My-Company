const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-[#05070F] text-white overflow-hidden px-4">

      {/* GLOBAL LIGHT SYSTEM (not decorative, structural) */}
      <div className="absolute inset-0">
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-500/10 blur-[160px]" />
        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-fuchsia-500/10 blur-[180px]" />
      </div>

      {/* SUBTLE GRID (adds structure like Stripe/Linear) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* BADGE */}
      <div className="relative mt-28 px-[1px] rounded-full bg-gradient-to-r from-white/10 via-white/5 to-white/10">
        <div className="px-6 py-2 rounded-full bg-[#05070F]">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/50">
            Product Studio · Design · Engineering · AI Systems
          </p>
        </div>
      </div>

      {/* HEADLINE */}
      <h1 className="relative mt-10 text-4xl md:text-[72px] leading-[1.05] font-light max-w-5xl">
        We build
        <span className="block bg-gradient-to-b from-white via-white/80 to-white/30 text-transparent bg-clip-text">
          digital products that scale.
        </span>
      </h1>

      {/* SUBTEXT */}
      <p className="relative mt-6 max-w-2xl text-white/50 text-sm md:text-base leading-relaxed">
        A product engineering studio designing and building high-performance web apps, SaaS platforms,
        and AI systems for modern companies.
      </p>

      {/* CTA */}
      <div className="relative mt-10 flex gap-4">
        <button className="px-6 py-3 rounded-full bg-white text-black text-sm hover:bg-white/90 transition">
          Start a project
        </button>

        <button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition">
          View work
        </button>
      </div>

      {/* SIGNATURE VISUAL (this is what was missing) */}
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px]">
        <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 blur-[120px] opacity-30 animate-pulse" />
      </div>

      {/* FLOATING ENERGY LINE (subtle motion identity) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </div>
  );
};

export default HeroSection;