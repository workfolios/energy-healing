import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { assetUrl } from '../utils/assets';

const About = () => {
  return (
    <div className="bg-ivory min-h-screen">
      <SEO 
        title="Meet the Practitioner" 
        description="Discover the journey of Kathy Curr, a certified Reiki practitioner and former special education teacher dedicated to offering compassionate energy healing and intuitive angel guidance."
        keywords="kathy curr, certified reiki practitioner, energy healing background, spiritual advisor south dakota, reiki master huron sd, special education background healing"
      />
      <div className="container max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 opacity-[0.08]">
            <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain" />
          </div>
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Hello, I'm Kathy.</h1>
          <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-12"></div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-stone-600 italic text-2xl leading-relaxed">
              "I believe that everyone has the capacity to heal when given the space to pause. 
              My role is simply to hold that space for you."
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-full overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-stone-200">
               <img 
                src={assetUrl('KEH_Photo_Headshot_Avatar_Square_WarmIvory_v04.webp')} 
                alt="Kathy Curr" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-lg text-stone-800 leading-relaxed"
          >
            <p>
              My journey into energy healing began after a dedicated career as a special education educator. 
              For years, I worked with students who needed patience, understanding, and a calm presence. 
              I learned that true connection comes not just from words, but from the energy we bring into a room.
            </p>
            <p>
              Upon retiring, I felt a calling to continue serving others in a new way. I discovered Reiki 
              as a powerful tool for finding inner peace and balance. It resonated deeply with my desire 
              to help people feel safe, seen, and supported.
            </p>
            <p>
              Today, I provide Reiki treatments with a grounded, compassionate approach. I don't believe in flashy 
              miracles or complicated jargon. I believe in the simple, profound power of relaxation and 
              intention. Whether you are an adult carrying the weight of the world, or a young person 
              navigating the complexities of growing up, my goal is to provide a quiet space for you to rest.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-stone-900 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-sage-700"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-ivory">A Professional Presence</h2>
              <p className="text-stone-300 text-lg leading-relaxed">
                Every detail of Kathy's practice is designed to convey the same grounded, 
                intentional energy she brings to her treatments. From her certifications 
                to her professional brand, everything is rooted in a commitment to your healing journey.
              </p>
            </div>
            <div className="relative">
              <div className="bg-stone-800 p-4 rounded-2xl border border-stone-700 shadow-inner">
                <img 
                  src={assetUrl('KEH_PrimarySymbol_ArchTree_SageOnCharcoal_v03.webp')} 
                  alt="Kathy's Brand Identity" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10">
                <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
