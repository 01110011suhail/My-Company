import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#060912] text-white pt-20 pb-10 px-6 overflow-hidden">

      {/* 🌟 ANIMATED GLOW BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        
        {/* Glow 1 */}
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse" />

        {/* Glow 2 */}
        <div className="absolute w-[350px] h-[350px] bg-indigo-500/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px] animate-pulse" />

        {/* Glow 3 (soft center drift) */}
        <div className="absolute w-[300px] h-[300px] bg-sky-400/10 blur-[140px] rounded-full top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 border-b border-white/10 pb-12">

          <div>
            <h2 className="text-xl font-semibold">YourCompany</h2>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Building scalable cloud infrastructure, AI systems, and enterprise platforms for global businesses.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>About Us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Cloud Infrastructure</li>
              <li>AI Solutions</li>
              <li>Security Systems</li>
              <li>Data Engineering</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-slate-500">

          <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition">Twitter</span>
            <span className="hover:text-white cursor-pointer transition">GitHub</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;