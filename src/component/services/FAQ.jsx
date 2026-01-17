import { useState } from "react";
import faqData from "../../data/faqData";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium"
            >
              {faq.question}
              <span className="text-xl">
                {activeId === faq.id ? "−" : "+"}
              </span>
            </button>

            {activeId === faq.id && (
              <div className="px-6 pb-4 text-slate-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
