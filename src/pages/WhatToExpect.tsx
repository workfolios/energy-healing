import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Wind, Sun, Moon } from 'lucide-react';
import SEO from '../components/SEO';
import { assetUrl } from '../utils/assets';

const WhatToExpect = () => {
  const steps = [
    {
      title: "Arrival & Welcome",
      icon: <Coffee className="w-8 h-8 text-sage-700" />,
      desc: "You'll be greeted in a calm, private space. We'll briefly discuss your intentions for the treatment or session and any specific areas of focus."
    },
    {
      title: "Getting Comfortable",
      icon: <Wind className="w-8 h-8 text-sage-700" />,
      desc: "You will lie fully clothed on a comfortable massage table. Soft music and dim lighting help set a relaxing atmosphere."
    },
    {
      title: "The Treatment or Session",
      icon: <Sun className="w-8 h-8 text-sage-700" />,
      desc: "I will place my hands lightly on or just above your body. You may feel warmth, tingling, or simply deep relaxation. It is common to drift into a light sleep."
    },
    {
      title: "Closing & Grounding",
      icon: <Moon className="w-8 h-8 text-sage-700" />,
      desc: "We'll slowly bring you back to awareness. I'll offer water and we can briefly discuss any experiences or sensations that arose."
    }
  ];

  return (
    <div className="bg-ivory min-h-screen py-16 sm:py-24">
      <SEO 
        title="What to Expect" 
        description="Learn what happens during a Reiki treatment or Angel Guidance session with Kathy Curr. Understand the process, atmosphere, and aftercare for energy healing."
        keywords="reiki session process, angel guidance session what to expect, energy healing atmosphere, reiki aftercare tips, preparing for a spiritual session"
      />
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-stone-900 mb-6">What to Expect</h1>
          <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Reiki is a gentle, non-invasive treatment. Whether it's your first time or your fiftieth, 
            my goal is to ensure you feel safe, informed, and comfortable every step of the way.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
          {steps.map((step, index) => {
            const isDark = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline status indicator */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sage-50 text-sage-800 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-500 group-hover:bg-sage-100">
                  <span className="font-serif text-sm font-bold">{index + 1}</span>
                </div>
                
                {/* Process Card */}
                <motion.div 
                  whileHover={{ 
                    y: -4,
                    boxShadow: isDark 
                      ? "0 12px 24px -10px rgba(0, 0, 0, 0.3)" 
                      : "0 12px 24px -10px rgba(44, 57, 47, 0.12)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-10 rounded-[2.5rem] border shadow-xl transition-all duration-300 flex flex-col items-center text-center ${
                    isDark 
                      ? 'bg-stone-900 border-stone-800 text-ivory' 
                      : 'bg-white border-sage-700/30 hover:border-sage-700/50 text-stone-800'
                  }`}
                >
                  {/* White/Ivory Circle BADGE rhythm from Screenshot */}
                  <div className={`mb-6 w-16 h-16 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                    isDark 
                      ? 'bg-white border border-sage-100 ring-4 ring-white/10' 
                      : 'bg-ivory border border-sage-100/30 ring-4 ring-sage-50/10'
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Modern uppercase label */}
                  <h3 className={`font-sans font-bold tracking-[0.2em] text-xs uppercase mb-4 text-center ${
                    isDark ? 'text-white' : 'text-sage-800'
                  }`}>
                    {step.title}
                  </h3>
                  
                  {/* Centered italic serif body text */}
                  <p className={`text-base font-serif italic leading-relaxed max-w-sm ${
                    isDark ? 'text-stone-300' : 'text-stone-600'
                  }`}>
                    "{step.desc}"
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-white border-sage-700 p-10 md:p-16 rounded-[3rem] border shadow-2xl relative overflow-hidden transform hover:-translate-y-1 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-2 bg-sage-700"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-[0.06] -rotate-12">
              <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </div>
            <h2 className="font-serif text-4xl text-stone-900 mb-12 text-center">Virtual Sessions</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl text-sage-700 mb-4">How does distance healing work?</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Energy is not bound by physical proximity. Just as we can send love or prayers to someone far away, 
                  Reiki energy can be directed intentionally across any distance.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-sage-700 mb-4">How to prepare for your session?</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Find a quiet place where you won't be disturbed. We will connect via 
                  phone or video call at the start, then disconnect during the energy transmission, and reconnect 
                  afterwards to debrief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;
