import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, DollarSign, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import { 
  ReikiIcon, 
  YouthReikiIcon, 
  AngelIcon, 
  YouthAngelIcon 
} from '../components/Icons';
import { assetUrl } from '../utils/assets';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const services = [
    {
      title: "Adult Reiki",
      price: "95 / $135",
      duration: "60 or 90 Minutes",
      description: "A professional energy healing treatment designed to promote deep relaxation, reduce stress, and restore energetic balance. The 90-minute option allows for a deeper restorative process and extended debrief.",
      features: [
        "Pre-session intake & intention setting",
        "Full body energy scan & assessment",
        "Targeted chakra balancing & clearing",
        "Post-session grounding & restorative debrief",
        "Detailed discussion of experiences & insights",
        "Complimentary high-vibrational water"
      ],
      recommended: true,
      unit: "treatment",
      icon: <ReikiIcon className="w-8 h-8 text-sage-700" />
    },
    {
      title: "Youth Reiki",
      price: "95",
      duration: "Varies (approx 45-60 min)",
      description: "Gentle, non-invasive energy treatments specifically for ages 10–21. Designed to support emotional regulation, academic focus, and relaxation for young minds and bodies.",
      features: [
        "Guardian participation & presence required",
        "Age-appropriate energy scan & scan review",
        "Gentle chakra alignment & balancing",
        "Grounding techniques for youth to use at home",
        "Adaptive restorative debrief for young clients",
        "Adaptable duration based on client comfort"
      ],
      recommended: false,
      unit: "treatment",
      icon: <YouthReikiIcon className="w-8 h-8 text-sage-700" />
    },
    {
      title: "Adult Angel Guidance",
      price: "95",
      duration: "30 Minutes (Min)",
      description: "Spiritual guidance sessions connecting you with angelic support and intuitive clarity. These sessions offer affirming guidance for life's transitions and personal growth.",
      features: [
        "Focused intuitive inquiry & discussion",
        "Connection with supportive angelic energies",
        "Affirming spiritual guidance and advising",
        "Actionable insights for grounded growth",
        "Recorded summary of key session takeaways",
        "Follow-up summary notes provided via email"
      ],
      recommended: false,
      unit: "session",
      icon: <AngelIcon className="w-8 h-8 text-sage-700" />
    },
    {
      title: "Youth Angel Guidance",
      price: "95",
      duration: "30 Minutes (Min)",
      description: "Grounded, age-appropriate spiritual guidance sessions to help young people feel supported, understood, and emotionally balanced as they navigate their world.",
      features: [
        "Guardian presence & supportive involvement",
        "Gentle connection to angelic guidance",
        "Supportive advising focused on youth needs",
        "Simple, empowering spiritual tools",
        "Recorded audio summary for the client & guardian",
        "Vibrant and affirming communication style"
      ],
      recommended: false,
      unit: "session",
      icon: <YouthAngelIcon className="w-8 h-8 text-sage-700" />
    }
  ];

  return (
    <div className="bg-ivory min-h-screen py-16 sm:py-24">
      <SEO 
        title="Services" 
        description="Explore spiritual services including Adult and Youth Reiki treatments and Angel Guidance advising sessions. Professional energy work for balanced restoration in Huron, SD."
        keywords="reiki for adults huron sd, youth reiki treatments, angel guidance sessions for adults, youth angel guidance, reiki session pricing south dakota, energy healing services"
      />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Services & Investment</h1>
          <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-800 max-w-2xl mx-auto text-lg mb-4">
            Transparent pricing for your peace of mind. All in-person treatments and sessions take place in a calm, private setting in Huron, SD, or designated travel locations.
          </p>
          <p className="text-stone-700 font-medium max-w-2xl mx-auto">
            Reiki treatments are offered in-person. Angel Guidance sessions are available in-person or virtually.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const isDark = index % 2 === 0;
            const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
            const isExpanded = expandedService === index;

            return (
              <motion.div 
                key={index}
                id={serviceId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: isDark 
                    ? "0 12px 24px -10px rgba(0, 0, 0, 0.3)" 
                    : "0 12px 24px -10px rgba(44, 57, 47, 0.12)"
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  y: { duration: 0.2, ease: "easeOut" }
                }}
                className={`rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl border transition-all duration-300 flex flex-col relative overflow-hidden ${
                  isDark 
                    ? 'bg-stone-900 border-stone-800 text-ivory' 
                    : 'bg-white border-sage-700/30 hover:border-sage-700/50 text-stone-800'
                }`}
              >
                {service.recommended && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-sage-700 text-ivory text-[10px] font-bold px-6 py-1.5 rounded-bl-2xl uppercase tracking-widest shadow-sm">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Unified Premium Badge Container */}
                <div className={`mb-6 w-16 h-16 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                  isDark 
                    ? 'bg-white border border-sage-100 ring-4 ring-white/10' 
                    : 'bg-ivory border border-sage-100/30 ring-4 ring-sage-50/10'
                }`}>
                  {service.icon}
                </div>

                <h3 className={`font-serif text-3xl mb-3 ${isDark ? 'text-ivory' : 'text-stone-900'}`}>{service.title}</h3>
                <div className="flex items-baseline mb-6">
                  <span className={`text-4xl font-bold ${isDark ? 'text-ivory' : 'text-stone-900'}`}>${service.price}</span>
                  <span className={`${isDark ? 'text-stone-400' : 'text-stone-500'} ml-2 text-base`}>/ {service.unit || 'session'}</span>
                </div>
                <div className={`flex items-center text-base mb-8 ${isDark ? 'text-sage-400' : 'text-sage-700'} font-medium`}>
                  <Clock size={18} className="mr-2" />
                  {service.duration}
                </div>
                <p className={`mb-8 flex-grow text-lg leading-relaxed ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>{service.description}</p>
                
                <button 
                  onClick={() => toggleService(index)}
                  className={`flex items-center justify-between w-full p-4 mb-6 rounded-2xl border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 ${
                    isDark 
                      ? 'border-stone-700 hover:bg-stone-800' 
                      : 'border-sage-100 hover:bg-sage-50'
                  }`}
                  aria-expanded={isExpanded}
                  aria-controls={`service-features-${index}`}
                  id={`service-toggle-${index}`}
                >
                  <span className="font-serif font-bold text-lg">What's included</span>
                  {isExpanded ? <ChevronUp size={20} className={isDark ? 'text-sage-400' : 'text-sage-700'} /> : <ChevronDown size={20} className={isDark ? 'text-sage-400' : 'text-sage-700'} />}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden mb-6"
                      id={`service-features-${index}`}
                      role="region"
                      aria-labelledby={`service-toggle-${index}`}
                    >
                      <ul className="space-y-4 pt-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className={`flex items-start text-base ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                            <Check size={18} className={`${isDark ? 'text-sage-400' : 'text-sage-700'} mr-3 mt-1 flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link 
                  to="/contact#inquiry-form" 
                  className={`w-full text-center py-4 rounded-full font-medium transition-all transform hover:scale-[1.02] shadow-md mt-auto ${
                    isDark 
                      ? 'bg-ivory text-stone-900 hover:bg-sage-100' 
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  Submit Inquiry
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-white border-sage-700/30 p-10 md:p-16 rounded-[3.5rem] border shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-sage-700"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-[0.04] rotate-12">
              <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-stone-100 pb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sage-50 flex items-center justify-center border border-sage-100 shadow-sm">
                  <Info className="w-7 h-7 text-sage-700" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-stone-900">Important Notes</h3>
                  <p className="text-stone-500 text-sm uppercase tracking-widest font-medium mt-1">Policies & Guidelines</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-10">
                <div className="group">
                  <h4 className="font-serif text-2xl text-sage-800 mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-sage-700 rounded-full"></span>
                    Session Formats
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-lg pl-4 border-l border-sage-100">
                    Reiki treatments are exclusively <span className="font-bold text-stone-900 uppercase text-sm tracking-wide">In-Person</span>. Angel Guidance sessions offer the flexibility of <span className="font-bold text-stone-900 uppercase text-sm tracking-wide">In-Person or Virtual</span> formats.
                  </p>
                </div>
                <div className="group">
                  <h4 className="font-serif text-2xl text-sage-800 mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-sage-700 rounded-full"></span>
                    Youth Services
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-lg pl-4 border-l border-sage-100">
                    Specifically designed for <span className="text-sage-700 font-bold italic underline decoration-sage-200 underline-offset-4">ages 10–21</span>. We strictly require parent or legal guardian consent and presence throughout the entire treatment or session.
                  </p>
                </div>
              </div>
              <div className="space-y-10">
                <div className="group">
                  <h4 className="font-serif text-2xl text-sage-800 mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-sage-700 rounded-full"></span>
                    Medical Disclaimer
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-lg pl-4 border-l border-sage-100">
                    These are <span className="font-medium text-stone-800 italic">complementary therapies</span>. They are intended to support wellness and do not replace professional medical diagnosis or treatment.
                  </p>
                </div>
                <div className="group">
                  <h4 className="font-serif text-2xl text-sage-800 mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-sage-700 rounded-full"></span>
                    Cancellation
                  </h4>
                  <div className="pl-4 border-l border-sage-100">
                    <p className="text-stone-900 leading-relaxed font-bold mb-3">Minimum 24-hour notice required.</p>
                    <div className="bg-sage-50/50 p-4 rounded-xl border border-sage-100/50">
                      <p className="text-stone-500 text-sm italic">
                        Example: For a 2:00 PM Tuesday session, notify us by 2:00 PM Monday. A <span className="text-sage-700 font-bold">$25 cancellation fee</span> may apply for late notices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
