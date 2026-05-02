const TeamSection = () => {
  return (
    <div className="px-4 py-28">

      <div className="w-full max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-white/10 bg-[#0C0414]">

        {/* soft SaaS ambient glow (signature background feel) */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/20 blur-[140px]" />
          <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[300px] bg-pink-500/10 blur-[120px]" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-16 py-20">

          {/* TEXT */}
          <div className="flex-1 text-center md:text-left">

            <p className="text-xs tracking-[0.25em] uppercase text-white/40">
              Building modern software systems
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight max-w-xl">
              A small, focused team building high-performance digital products.
            </h2>

            <p className="mt-5 text-sm md:text-base text-white/50 max-w-lg leading-relaxed">
              We design and engineer web and mobile platforms for startups and companies
              that expect reliability, speed, and long-term scalability.
            </p>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <button className="bg-white text-black px-6 py-3 rounded-full text-sm hover:bg-white/90 transition">
                Work with us
              </button>

              <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full text-sm hover:bg-white/10 transition">
                Careers
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 relative">

            {/* subtle image glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-violet-500/20 via-transparent to-pink-500/10 blur-3xl" />

            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/team/team-meeting-image.png"
              alt="team"
              className="relative w-full max-w-[520px] mx-auto rounded-2xl shadow-2xl border border-white/10"
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>
      </div>
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px]">
        <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 blur-[120px] opacity-30 animate-pulse" />
      </div>

      {/* FLOATING ENERGY LINE (subtle motion identity) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
    
  );
};

export default TeamSection;