import React, { useRef } from "react";
const WorldMapSection = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen min-h-screen bg-[#060912] text-white">

      {/* ================= WORLD MAP SECTION ================= */}
      <div className="w-screen min-h-screen flex items-center justify-center relative overflow-hidden px-6">

        {/* 🌍 WORLD MAP BACKGROUND */}
        <div className="absolute inset-0 opacity-30">
          <svg viewBox="0 0 1200 600" className="w-full h-full object-cover" fill="none">
            <path d="M200,300 C250,150 400,120 500,200 C600,280 650,100 800,180 C950,260 1000,200 1100,250"
              stroke="#1e3a8a" strokeWidth="2" />

            <path d="M150,400 C300,350 400,500 550,420 C700,340 850,520 1000,400"
              stroke="#1d4ed8" strokeWidth="2" />

            <path d="M250,200 C350,300 450,180 550,250 C650,320 750,220 850,300"
              stroke="#2563eb" strokeWidth="2" />
          </svg>
        </div>

        {/* 🌐 CONNECTION LINES */}
        <svg className="absolute inset-0 w-full h-full">
          <line x1="20%" y1="40%" x2="70%" y2="30%" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="6" />
          <line x1="30%" y1="60%" x2="80%" y2="50%" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="6" />
          <line x1="15%" y1="30%" x2="60%" y2="70%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6" />
        </svg>

        {/* 📍 NODES */}
        <div className="absolute w-3 h-3 bg-blue-400 rounded-full top-[35%] left-[20%] animate-ping" />
        <div className="absolute w-3 h-3 bg-indigo-400 rounded-full top-[30%] left-[70%] animate-ping" />
        <div className="absolute w-3 h-3 bg-sky-400 rounded-full top-[60%] left-[40%] animate-ping" />
        <div className="absolute w-3 h-3 bg-purple-400 rounded-full top-[50%] left-[80%] animate-ping" />

        {/* 🧠 CONTENT */}
        <div className="relative z-10 w-[80%] max-md:w-full text-center">

          <h2 className="text-3xl md:text-5xl font-bold">
            Global Network Infrastructure
          </h2>

          <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-6" />

          <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
            Our systems operate across continents with real-time data flow,
            connecting engineering hubs, cloud infrastructure, and enterprise
            clients worldwide.
          </p>

          {/* 📊 STATS */}
          <div className="grid grid-cols-3 gap-8 mt-12">

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">5</h3>
              <p className="text-xs text-slate-400">Global Hubs</p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">99.9%</h3>
              <p className="text-xs text-slate-400">Uptime</p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">24/7</h3>
              <p className="text-xs text-slate-400">Monitoring</p>
            </div>

          </div>

          {/* 🔘 VIEW MORE BUTTON */}
          <button
            onClick={scrollToAbout}
            className="mt-12 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full font-semibold"
          >
            View More
          </button>

        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div ref={aboutRef} className="w-full py-24 px-6 bg-[#05070f]">

        <div className="max-w-6xl mx-auto space-y-20">

          {/* 🧑‍💼 CEO MESSAGE */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">CEO Message</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              “We are building a global ecosystem where technology connects
              people, systems, and intelligence seamlessly. Our mission is to
              empower enterprises with scalable, secure, and intelligent
              infrastructure.”
            </p>
            <p className="mt-4 text-blue-400 font-semibold">— CEO, Company Name</p>
          </div>

          {/* 🚀 WHAT WE DO */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h3 className="text-3xl font-bold mb-4">What We Do</h3>
              <p className="text-slate-300 leading-relaxed">
                We design and operate high-performance digital infrastructure,
                cloud systems, and AI-powered platforms that help businesses
                scale globally. From real-time analytics to secure enterprise
                networks, we deliver end-to-end solutions.
              </p>
            </div>

            <div className="bg-blue-900/20 p-8 rounded-xl border border-blue-800">
              <ul className="space-y-3 text-slate-200">
                <li>✔ Cloud Infrastructure Solutions</li>
                <li>✔ AI & Data Engineering</li>
                <li>✔ Enterprise Security Systems</li>
                <li>✔ Global Network Architecture</li>
              </ul>
            </div>

          </div>

          {/* 🌟 VISION */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              To become a world-leading technology infrastructure company that
              powers the digital transformation of every industry through
              innovation, reliability, and intelligence.
            </p>
          </div>

          {/* 🏢 COMPANY / SERVICES STYLE SECTION */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 bg-[#0b1020] rounded-xl border border-slate-800">
              <h4 className="font-bold text-xl mb-2">Engineering</h4>
              <p className="text-slate-400 text-sm">
                Building scalable backend systems and distributed architectures.
              </p>
            </div>

            <div className="p-6 bg-[#0b1020] rounded-xl border border-slate-800">
              <h4 className="font-bold text-xl mb-2">Cloud & AI</h4>
              <p className="text-slate-400 text-sm">
                AI-driven solutions and cloud-native platforms for modern enterprises.
              </p>
            </div>

            <div className="p-6 bg-[#0b1020] rounded-xl border border-slate-800">
              <h4 className="font-bold text-xl mb-2">Security</h4>
              <p className="text-slate-400 text-sm">
                Enterprise-grade security systems protecting global infrastructure.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default WorldMapSection;