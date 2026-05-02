import React from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqsData = [
    {
      question: "What does your company specialize in?",
      answer:
        "We design and build full-scale digital products including web applications, SaaS platforms, internal tools, and AI-driven systems. Our focus is performance, scalability, and long-term product stability — not just UI delivery."
    },
    {
      question: "Is your platform suitable for enterprise use?",
      answer:
        "Yes. Our architecture is built for enterprise-grade systems with high availability, distributed scaling, and strong fault tolerance."
    },
    {
      question: "How do you ensure security and compliance?",
      answer:
        "We implement layered security across infrastructure, application, and data levels with encryption, access control, and continuous monitoring."
    },
    {
      question: "Can your systems scale with business growth?",
      answer:
        "Yes. Our cloud-native architecture supports seamless scaling from early-stage products to high-traffic global systems."
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "We provide continuous monitoring, updates, and system optimization across production environments."
    }
  ];

  return (
    <section className="w-full py-28 bg-[#060912] text-white px-4 relative overflow-hidden">

      {/* background glow system */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[400px] bg-pink-500/10 blur-[140px]" />

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-white/40">
          Documentation
        </p>

        <h2 className="text-4xl md:text-5xl font-light mt-5">
          Built for clarity at scale
        </h2>

        <p className="text-white/50 mt-6 text-sm md:text-base">
          Everything you need to understand how our systems are designed, built, and operated.
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto mt-16 space-y-4">

        {faqsData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 border
              ${isOpen
                ? "border-indigo-500/40 bg-white/[0.05]"
                : "border-white/10 bg-white/[0.02]"
              } backdrop-blur-xl`}
            >

              {/* glow line when active */}
              {isOpen && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-transparent to-pink-500/10 blur-xl opacity-60" />
              )}

              {/* QUESTION */}
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="relative w-full flex items-center justify-between p-6 text-left group"
              >

                <span className="text-base md:text-lg font-light text-white/90">
                  {faq.question}
                </span>

                {/* 🔥 upgraded interaction indicator */}
                <div className="relative flex items-center justify-center">

                  <div
                    className={`w-7 h-7 rounded-full border transition-all duration-300
                    ${isOpen
                      ? "border-indigo-400 scale-110"
                      : "border-white/20 group-hover:border-white/40"
                    }`}
                  />

                  <div
                    className={`absolute w-2 h-2 rounded-full transition-all duration-300
                    ${isOpen ? "bg-indigo-400 scale-125" : "bg-white/40"}`}
                  />

                </div>

              </button>

              {/* ANSWER */}
              <div
                className={`relative px-6 overflow-hidden transition-all duration-500 ease-in-out
                ${isOpen ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-sm text-white/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          );
        })}

      </div>
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px]">
        <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 blur-[120px] opacity-30 animate-pulse" />
      </div>

      {/* FLOATING ENERGY LINE (subtle motion identity) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
    
    
  );
};

export default FaqSection;