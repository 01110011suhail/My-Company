import React from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqsData = [
    {
      question: "What does your company specialize in?",
      answer:
        "We specialize in building scalable digital infrastructure, cloud-native platforms, and AI-driven enterprise solutions that help businesses operate globally with high reliability and performance."
    },
    {
      question: "Is your platform suitable for enterprise use?",
      answer:
        "Yes. Our systems are designed for enterprise-grade workloads with high availability, strong security layers, and global scalability across distributed environments."
    },
    {
      question: "How secure is your infrastructure?",
      answer:
        "We implement multi-layer security including encryption at rest and in transit, role-based access control, continuous monitoring, and compliance-ready architecture for enterprise standards."
    },
    {
      question: "Can your solutions scale with business growth?",
      answer:
        "Absolutely. Our architecture is built on cloud-native principles, allowing seamless horizontal scaling, load balancing, and real-time performance optimization as your business grows."
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes. Our engineering and support teams operate 24/7 across multiple regions to ensure continuous monitoring, rapid incident response, and uninterrupted service delivery."
    }
  ];

  return (
    <>
      {/* Global Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="w-full py-20 bg-gradient-to-b from-white to-slate-50 px-4">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-indigo-600 tracking-wide uppercase">
            Support & Information
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold mt-2 text-slate-900">
            Frequently Asked Questions
          </h1>

          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Everything you need to know about our platform, infrastructure,
            security, and enterprise solutions — all in one place.
          </p>
        </div>

        {/* FAQ CONTAINER */}
        <div className="max-w-3xl mx-auto mt-10 space-y-4">

          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              
              {/* QUESTION */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm md:text-base font-medium text-slate-800">
                  {faq.question}
                </span>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#4F46E5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* ANSWER */}
              <div
                className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default FaqSection;