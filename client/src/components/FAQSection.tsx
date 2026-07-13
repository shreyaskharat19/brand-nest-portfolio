import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How long does a website project typically take?',
      answer:
        'Most website projects take 4-8 weeks depending on complexity and scope. We provide a detailed timeline during the initial consultation.',
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer:
        'Yes, we can help with hosting setup and domain registration. We work with reliable hosting providers and ensure smooth deployment.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer:
        'Absolutely! We specialize in website redesigns. We analyze your current site and create a modern, improved version that better serves your goals.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, bank transfers, and PayPal. We also offer flexible payment plans for larger projects.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer:
        'Yes, we provide ongoing support and maintenance after launch. We offer different support packages based on your needs.',
    },
    {
      question: 'What is your revision policy?',
      answer:
        'We include multiple rounds of revisions in our packages. We work closely with you until you\'re completely satisfied with the final result.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with Brand Nest.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 md:px-8 md:py-6 flex items-center justify-between bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 md:px-8 md:py-6 bg-blue-50 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-in fade-in duration-700 delay-500">
          <p className="text-lg text-muted-foreground mb-6">
            Didn't find your answer?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
