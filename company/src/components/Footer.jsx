import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#04060C] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-12 gap-12">

          {/* COMPANY */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-medium tracking-wide">
              YourCompany Global
            </h2>

            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-md">
              A global technology solutions company delivering enterprise software,
              AI systems, cloud infrastructure, and digital transformation
              across 30+ countries.
            </p>

            {/* GLOBAL FOOTPRINT */}
            <div className="mt-6 text-xs text-white/40 space-y-1">
              <p>🌐 Operations: North America • Europe • Middle East • APAC</p>
              <p>🏢 Headquarters: Global Delivery Network</p>
              <p>⚙️ 24/7 Engineering & Support Centers</p>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div className="md:col-span-2">
            <h3 className="text-sm text-white/80 mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="hover:text-white transition">Enterprise Software</li>
              <li className="hover:text-white transition">Cloud & DevOps</li>
              <li className="hover:text-white transition">AI & Data Platforms</li>
              <li className="hover:text-white transition">Cybersecurity</li>
              <li className="hover:text-white transition">Digital Transformation</li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div className="md:col-span-2">
            <h3 className="text-sm text-white/80 mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="hover:text-white transition">Banking & Finance</li>
              <li className="hover:text-white transition">Healthcare</li>
              <li className="hover:text-white transition">Retail & E-commerce</li>
              <li className="hover:text-white transition">Manufacturing</li>
              <li className="hover:text-white transition">Government</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="md:col-span-2">
            <h3 className="text-sm text-white/80 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Leadership</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Newsroom</li>
              <li className="hover:text-white transition">Investors</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-2">
            <h3 className="text-sm text-white/80 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="hover:text-white transition">Global Offices</li>
              <li className="hover:text-white transition">Support</li>
              <li className="hover:text-white transition">Partnerships</li>
              <li className="hover:text-white transition">Media</li>
            </ul>
          </div>
        </div>

        {/* CERTIFICATIONS STRIP */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-6 text-xs text-white/40">
            <span>ISO 27001 Certified</span>
            <span>• SOC 2 Type II</span>
            <span>• GDPR Compliant</span>
            <span>• ISO 9001 Quality Management</span>
            <span>• AWS / Azure / GCP Partner</span>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} YourCompany Global. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-white/40">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms of Use
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Cookie Policy
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;