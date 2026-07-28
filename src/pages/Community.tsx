import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, BookOpen, MessageSquare, Mic, Heart, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';
import { assetUrl } from '../utils/assets';

const Community = () => {
  const pillars = [
    {
      title: "Mentorship for Advisors",
      icon: <GraduationCap className="w-8 h-8 text-sage-700" />,
      desc: "Kathy offers dedicated mentorship for up-and-coming spiritual advisors, helping them harness their abilities and build a grounded practice.",
      details: "Whether you're in your 20s or 30s and just discovering your path, Kathy provides the wisdom of a retired educator and experienced healer."
    },
    {
      title: "Collaborative Projects",
      icon: <Users className="w-8 h-8 text-sage-700" />,
      desc: "Kathy actively engages as a thought partner for community projects, editorial work, and collaborative spiritual initiatives.",
      details: "She believes in the power of collective energy and is always open to discussing how she can contribute to meaningful projects."
    },
    {
      title: "Podcast & Media",
      icon: <Mic className="w-8 h-8 text-sage-700" />,
      desc: "A frequent guest on spiritual and intuitive podcasts, Kathy shares her insights on energy healing and emotional regulation.",
      details: "She is available for interviews and guest appearances to discuss reiki, angel guidance, and the intersection of education and energy."
    }
  ];

  return (
    <div className="bg-ivory min-h-screen py-16 sm:py-24">
      <SEO 
        title="Community" 
        description="Join our spiritual community focused on mentorship for advisors and collective wisdom. Explore Kathy's commitment to collaboration and growth in the healing arts."
        keywords="spiritual mentorship, community collaboration healing, mentoring spiritual advisors, collective healing wisdom, professional spiritual partnership"
      />
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 opacity-[0.08]">
            <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">Community & Mentorship</h1>
          <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Kathy is more than a practitioner; she is a teacher at heart. She is dedicated to fostering a supportive network for spiritual advisors and collaborators worldwide.
          </p>
        </div>

        {/* Mentorship Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block bg-sage-100 text-sage-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">
              Giving Back
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
              Guiding the Next Generation of <span className="text-sage-700 italic">Spiritual Advisors</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              With a Master's degree in Education and a lifetime of teaching, Kathy brings a unique pedagogical approach to spiritual mentorship. She understands that "harnessing" one's abilities can be overwhelming, especially for those in their early 20s and 30s.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Her mentorship is designed to provide a safe, grounded framework for up-and-coming advisors to explore their gifts, establish professional boundaries, and build a practice rooted in integrity and compassion.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact#inquiry-form" 
                className="bg-stone-900 text-ivory px-10 py-4 rounded-full font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-3"
              >
                Inquire about Mentorship
              </Link>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-square bg-sage-50 rounded-[4rem] border border-sage-100 flex items-center justify-center p-12 shadow-inner">
              <img 
                src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} 
                alt="Kathy's Energy Healing Symbol" 
                className="w-full h-full object-contain opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-10 rounded-3xl shadow-2xl border border-stone-100 max-w-sm transform -rotate-2">
                   <Heart className="text-sage-700 w-12 h-12 mb-6" />
                   <p className="font-serif text-2xl text-stone-900 mb-4">"Kathy's guidance was the anchor I didn't know I needed."</p>
                   <p className="text-stone-500 font-medium">— Mentee, Age 28</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars of Engagement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 12px 24px -10px rgba(44, 57, 47, 0.12)" 
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: idx * 0.1,
                y: { duration: 0.2, ease: "easeOut" }
              }}
              className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-sage-700/30 hover:border-sage-700/50 shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Normalized Circle Badge Container */}
                <div className="mb-8 bg-ivory border border-sage-100/30 ring-4 ring-sage-50/10 w-16 h-16 rounded-full flex items-center justify-center shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-2xl text-stone-900 mb-4">{pillar.title}</h3>
                <p className="text-stone-600 font-light mb-6 text-sm md:text-base leading-relaxed">{pillar.desc}</p>
              </div>
              <p className="text-stone-500 font-serif italic text-xs md:text-sm mt-auto border-t border-stone-100 pt-4">{pillar.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Global Network Callout */}
        <div className="bg-stone-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-sage-700"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-5 rotate-12">
            <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-8">A Global Network of Support</h2>
          <p className="text-stone-300 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            From Google Meet video calls to international podcast series, Kathy connects with a vibrant community of women and spiritual advisors across the globe. She is always looking for new ways to engage, share, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact#inquiry-form" 
              className="bg-ivory text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all shadow-lg"
            >
              Propose a Collaboration
            </Link>
            <Link 
              to="/podcast" 
              className="bg-transparent border border-stone-700 text-ivory px-10 py-4 rounded-full font-medium hover:bg-stone-800 transition-all"
            >
              Listen to Podcast Appearances
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
