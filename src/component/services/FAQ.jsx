import { useState } from "react";
import faqData from "../../data/faqData";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq) => {
          const isOpen = activeId === faq.id;

          return (
            <div
              key={faq.id}
              className="bg-white border rounded-xl overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setActiveId(isOpen ? null : faq.id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-slate-800"
              >
                {faq.question}
                <span
                  className={`text-xl transition-transform ${
                    isOpen ? "rotate-45 text-primary" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
