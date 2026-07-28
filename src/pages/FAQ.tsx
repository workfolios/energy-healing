import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { assetUrl } from '../utils/assets';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);
    
    if (!isOpen) {
      // Small delay to allow some animation to start, then scroll
      setTimeout(() => {
        faqRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  };

  const faqs = [
    {
      question: "What is Reiki?",
      answer: "Reiki is a Japanese energy healing technique that promotes relaxation, reduces stress, and supports the body's natural healing abilities. The word 'Reiki' comes from the Japanese words 'rei' (universal) and 'ki' (life energy). During a treatment, the practitioner channels this energy to the client through gentle touch or by placing hands just above the body."
    },
    {
      question: "What should I wear to a session?",
      answer: "Please wear comfortable, loose-fitting clothing. You will remain fully clothed throughout the entire treatment or session (shoes are typically removed). Layers are recommended as body temperature can fluctuate during energy work."
    },
    {
      question: "Do you work with children?",
      answer: "Yes, I offer specialized youth treatments and sessions for ages 10–21. These offerings are shorter and adapted to be more engaging for younger clients. A parent or legal guardian must be present for the duration of the treatment or session."
    },
    {
      question: "Do parents/guardians need to attend youth sessions?",
      answer: "Yes. For any client under the age of 18, a parent or legal guardian is required to be present in the room during the entire treatment or session. This ensures the child feels safe and supported."
    },
    {
      question: "Are virtual sessions available?",
      answer: "Yes, I offer virtual distance angel guidance sessions. Energy is not limited by physical space, so these sessions can be just as effective as in-person work. We connect via phone or video call."
    },
    {
      question: "How do I start an inquiry?",
      answer: "You can submit an inquiry through the Contact page on this website. I will get back to you within 24–48 hours to confirm availability and discuss your treatment or session."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I kindly ask for at least 24 hours notice if you need to cancel or reschedule your appointment. This allows me to offer the time slot to another client who may need it."
    },
    {
      question: "Are these services a replacement for medical care?",
      answer: "No. Reiki and angel guidance are complementary therapies. They do not diagnose, treat, cure, or prevent any disease. They are not a substitute for professional medical or psychiatric care. If you have a medical concern, please consult a licensed healthcare professional."
    }
  ];

  return (
    <div className="bg-ivory min-h-screen py-16 sm:py-24">
      <SEO 
        title="FAQ" 
        description="Frequently asked questions about Reiki, Angel Guidance, and how energy healing sessions can support your personal journey to wellness."
        keywords="reiki faq, angel guidance questions, energy healing frequency, spiritual session preparation, what to wear for reiki"
      />
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Frequently Asked Questions</h1>
          <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Common questions about my practice and what to expect.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                ref={(el) => {
                  faqRefs.current[index] = el;
                }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: isOpen ? "0 12px 24px -10px rgba(0, 0, 0, 0.3)" : "0 12px 24px -10px rgba(44, 57, 47, 0.12)" 
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`rounded-[2.5rem] overflow-hidden border transition-all duration-300 shadow-md ${
                  isOpen ? 'bg-stone-900 border-stone-800' : 'bg-white border-sage-700/30 hover:border-sage-700/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-8 md:p-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-[2.5rem] transition-colors group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className={`font-serif text-2xl md:text-3xl transition-colors duration-300 ${isOpen ? 'text-ivory' : 'text-stone-900'} font-medium pr-8`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className={`shrink-0 ${isOpen ? 'text-sage-400' : 'text-sage-700'}`}
                  >
                    <ChevronDown size={32} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }}
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="px-8 md:px-10 pb-10 text-stone-300 text-lg md:text-xl leading-relaxed border-t border-stone-800 pt-8 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
          <div className="bg-white border-sage-700/30 p-12 rounded-[3rem] shadow-2xl border text-center transition-all duration-500 relative overflow-hidden group hover:shadow-sage-200/40">
            <div className="absolute top-0 left-0 w-full h-2 bg-sage-700"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-[0.06] rotate-12">
              <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif text-4xl text-stone-900 mb-6">Ready to begin your healing journey?</h3>
            <p className="text-stone-600 text-xl mb-10">I'm happy to chat or help you start an inquiry that fits your schedule.</p>
            <Link 
              to="/contact#inquiry-form" 
              className="inline-block bg-stone-900 text-ivory px-12 py-4 rounded-full font-medium hover:bg-stone-800 hover:scale-[1.02] transition-all shadow-xl hover:shadow-2xl transform duration-300"
            >
              Submit Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
