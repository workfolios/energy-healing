import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Sparkles, GraduationCap, Award, Users, BookOpen, Handshake } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { 
  ReikiIcon, 
  YouthReikiIcon, 
  AngelIcon, 
  YouthAngelIcon, 
  ShirtIcon, 
  RelaxationIcon, 
  SafeSpaceIcon 
} from '../components/Icons';
import { assetUrl } from '../utils/assets';
import { getHomepageTestimonials } from '../data/testimonials';

const Home = () => {
  return (
    <div className="bg-ivory text-stone-800">
      <SEO 
        title="Home" 
        description="Compassionate Reiki energy healing treatments and affirming angel guidance advising sessions for grounded, balanced restoration across the Upper Great Plains region."
        keywords="reiki huron sd, energy healing south dakota, angel guidance huron, spiritual advisor upper great plains, restorative energy treatments, reiki for kids, angel guidance sessions, kathy curr"
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sage-100/30 to-ivory/10 z-0" />
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-stone-900">
              Find Your <span className="text-sage-700 italic">Inner Peace</span> & Healing Energy
            </h1>
            <p className="text-lg md:text-xl text-stone-800 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Through Reiki energy healing treatments and angel guidance sessions, Kathy supports clients who want to feel grounded, clear, and more at peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link 
                to="/services" 
                className="bg-stone-900 text-ivory px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-block"
              >
                View Services
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border border-stone-400 text-stone-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-all inline-block"
              >
                Meet the Practitioner
              </Link>
            </div>
            <div className="pt-10 flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-3 text-sage-700 bg-sage-50/50 px-6 py-3 rounded-full border border-sage-100 shadow-sm">
                <MapPin size={20} className="animate-pulse" />
                <span className="font-bold text-sm md:text-base tracking-[0.15em] uppercase">Serving the Upper Great Plains</span>
              </div>
              <div className="w-full max-w-[420px] h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent mt-4 lg:hidden"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative w-72 h-96 md:w-96 md:h-[32rem] rounded-t-full overflow-hidden shadow-2xl border-4 border-white bg-stone-900">
              <img 
                src={assetUrl('KEH_PrimarySymbol_ArchTree_SageOnCharcoal_v03.webp')} 
                alt="Kathy's Energy Healing Symbol" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[280px] hidden md:block border border-stone-100">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} 
                  alt="" 
                  className="w-8 h-8 opacity-80"
                  aria-hidden="true"
                />
                <span className="h-px w-6 bg-sage-200"></span>
              </div>
              <p className="font-serif italic text-stone-800 text-base leading-relaxed">
                "I believe that everyone has the capacity to heal when given the space to pause."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-stone-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 opacity-[0.05]">
              <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Healing Offerings</h2>
            <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-8"></div>
            <p className="text-stone-700 max-w-2xl mx-auto text-lg">
              Gentle, non-invasive energy work to support your physical, emotional, and spiritual well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            { [
              {
                title: "Adult Reiki",
                desc: "A 60 or 90-minute session to reduce stress, promote relaxation, and restore balance.",
                icon: <ReikiIcon className="w-8 h-8 text-sage-700" />,
                link: "/services"
              },
              {
                title: "Youth Reiki",
                desc: "Gentle energy work for ages 10–21, supporting emotional regulation and calm.",
                icon: <YouthReikiIcon className="w-8 h-8 text-sage-700" />,
                link: "/services"
              },
              {
                title: "Adult Angel Guidance",
                desc: "Spiritual guidance sessions connecting you with angelic support and clarity.",
                icon: <AngelIcon className="w-8 h-8 text-sage-700" />,
                link: "/services"
              },
              {
                title: "Youth Angel Guidance",
                desc: "Age-appropriate spiritual guidance to help young people feel supported and understood.",
                icon: <YouthAngelIcon className="w-8 h-8 text-sage-700" />,
                link: "/services"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ 
                  y: -4, 
                  boxShadow: "0 12px 24px -10px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-stone-900 p-8 md:p-10 rounded-[2.5rem] border border-stone-800 shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md border border-sage-100 ring-4 ring-white/10 group-hover:scale-[1.02] transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl text-ivory mb-3">{service.title}</h3>
                <p className="text-stone-300 font-light mb-6 leading-relaxed text-sm md:text-base">{service.desc}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-sm font-semibold tracking-wider uppercase text-sage-400 hover:text-sage-300 transition-colors duration-300 gap-1.5 group/link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Learn more</span>
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-ivory">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight mb-6">
            From <span className="text-sage-700 italic">Education</span> to <span className="text-sage-700 italic">Energy</span>
          </h2>
          <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-10"></div>
          
          <div className="space-y-6 max-w-3xl mx-auto mb-12">
            <p className="text-stone-600 text-xl leading-relaxed">
              After a fulfilling career as a special education educator, I found a new path in energy healing. 
              Kathy is a dual-practitioner in both reiki energy healing as well as angel spiritual guidance.
            </p>
            <p className="text-stone-600 text-xl leading-relaxed">
              I bring a grounded, nurturing presence to help you find your own sense of calm and clarity, 
              always rooted in compassion and patience.
            </p>
          </div>

          <div className="max-w-lg mx-auto mb-12">
            <div className="bg-white border-sage-700/30 p-10 md:p-14 rounded-[3rem] border shadow-xl transition-all duration-300 text-left relative overflow-hidden hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-2 bg-sage-700"></div>
              <h3 className="font-serif text-4xl text-stone-900 mb-10 text-center">Credentials</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-sage-50 flex items-center justify-center shrink-0 border border-sage-100">
                    <Sparkles className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-xl font-serif">Certified Reiki Practitioner</p>
                    <p className="text-sage-700 text-sm font-medium uppercase tracking-widest mt-1">Level II Certification</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-sage-50 flex items-center justify-center shrink-0 border border-sage-100">
                    <GraduationCap className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-xl font-serif">Retired Special Education Educator</p>
                    <p className="text-sage-700 text-sm font-medium uppercase tracking-widest mt-1">A Career of Service</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-sage-50 flex items-center justify-center shrink-0 border border-sage-100">
                    <Award className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-xl font-serif">Masters in Science in Education</p>
                    <p className="text-sage-700 text-sm font-medium uppercase tracking-widest mt-1">Advanced Academic Achievement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link 
              to="/about" 
              className="inline-block border-b-2 border-stone-800 pb-1 text-stone-900 hover:text-sage-700 hover:border-sage-700 transition-all font-medium text-lg"
            >
              Read my full story
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect Teaser */}
      <section className="py-24 bg-stone-100">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">New to Reiki?</h2>
          <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Fully Clothed",
                desc: "Sessions are non-invasive and you remain fully clothed for your comfort.",
                icon: <ShirtIcon className="w-8 h-8 text-sage-800" />
              },
              {
                title: "Deep Relaxation",
                desc: "Most clients feel a profound sense of calm, warmth, and peace.",
                icon: <RelaxationIcon className="w-8 h-8 text-sage-800" />
              },
              {
                title: "Safe Space",
                desc: "A judgment-free environment to release stress and recharge.",
                icon: <SafeSpaceIcon className="w-8 h-8 text-sage-800" />
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 12px 24px -8px rgba(44, 57, 47, 0.25)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-10 flex flex-col items-center text-center bg-sage-700 rounded-[2.5rem] shadow-xl border border-sage-600/30 group"
              >
                <div className="mb-8 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md ring-8 ring-white/10 group-hover:scale-[1.02] transition-transform duration-500">
                  {benefit.icon}
                </div>
                <h3 className="font-sans font-bold tracking-[0.2em] text-xs uppercase text-ivory mb-4">{benefit.title}</h3>
                <p className="text-ivory/95 font-serif italic text-base leading-relaxed max-w-xs leading-relaxed">"{benefit.desc}"</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16">
            <Link 
              to="/what-to-expect" 
              className="bg-stone-900 text-ivory px-10 py-4 rounded-full text-lg font-medium hover:bg-stone-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-block"
            >
              Learn what happens in a session
            </Link>
          </div>
        </div>
      </section>

      {/* Mentorship & Community Teaser */}
      <section className="py-32 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-sage-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none">
          <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain brightness-0 invert" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-sage-500 uppercase tracking-[0.5em] text-xs font-bold block">Lineage & Wisdom</span>
              <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight">
                Mentoring the Next Phase of <br />
                <span className="text-sage-400 italic font-light">Spiritual Advisors</span>
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-300 text-xl md:text-2xl leading-relaxed font-light max-w-3xl mx-auto"
            >
              As a retired educator, Kathy is dedicated to giving back to the spiritual community through mentorship, collaboration, and shared wisdom.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <Link 
                to="/community" 
                className="inline-flex items-center space-x-4 text-ivory group"
              >
                <span className="text-sm md:text-lg tracking-[0.3em] uppercase border-b border-ivory/20 pb-2 group-hover:border-sage-500 transition-all duration-500">
                  Explore Community & Mentorship
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform text-sage-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {getHomepageTestimonials().length > 0 && (
        <section className="py-24 bg-stone-50 overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 relative">
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Kind Words</h2>
              <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-8"></div>
              <p className="text-stone-700 max-w-2xl mx-auto text-lg italic font-serif">
                "Healing is a quiet journey we take together."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getHomepageTestimonials().map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -4, 
                    boxShadow: "0 12px 24px -10px rgba(44, 57, 47, 0.12)"
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    layout: { duration: 0.3 },
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-stone-100 flex flex-col justify-between relative group hover:shadow-[0_15px_40px_rgba(44,57,47,0.12)] transition-shadow duration-300"
                >
                  <div className="absolute top-6 right-8 text-sage-100 group-hover:text-sage-200 transition-colors">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11H16.017C16.5693 11 17.017 11.4477 17.017 12V14H15.017C13.9124 14 13.017 14.8954 13.017 16V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V11H7.017C7.56929 11 8.017 11.4477 8.017 12V14H6.017C4.91243 14 4.017 14.8954 4.017 16V21H5.017Z" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <p className="text-stone-600 text-lg leading-relaxed mb-8 font-light italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-sage-700 text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-xl ring-1 ring-sage-100">
                        {testimonial.initials}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-md border border-stone-100">
                        <Users size={12} className="text-sage-700 fill-sage-700" />
                      </div>
                    </div>
                    <div>
                      <p className="text-stone-900 font-serif font-bold text-lg">{testimonial.authorDisplayName}</p>
                      <p className="text-sage-700 text-[10px] uppercase tracking-[0.25em] font-bold">{testimonial.serviceType}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-ivory">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-white border-sage-700/30 p-10 md:p-16 rounded-[3rem] border shadow-2xl transition-all duration-500 relative overflow-hidden group hover:shadow-sage-200/40">
            <div className="absolute top-0 left-0 w-full h-2 bg-sage-700"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 text-left space-y-8">
                <h2 className="font-serif text-4xl md:text-6xl text-stone-900 leading-tight">
                  Grounded Support For <span className="text-sage-700 italic">Calm & Clarity</span>
                </h2>
                <p className="text-stone-600 text-xl leading-relaxed max-w-2xl">
                  Reiki treatments are offered in person. Angel guidance sessions are available in person or virtually. Inquiry-led scheduling with a 24–48 hour response time.
                </p>
                <Link 
                  to="/contact#inquiry-form" 
                  className="bg-stone-900 text-ivory px-12 py-5 rounded-full text-xl font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-3"
                >
                  <Calendar size={24} />
                  Submit Inquiry
                </Link>
              </div>
              
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-sage-50 rounded-[3rem] border border-sage-100 flex items-center justify-center p-10 shadow-inner hover:bg-sage-100/50 transition-colors duration-1000">
                  <img 
                    src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} 
                    alt="" 
                    className="w-full h-full object-contain opacity-95 hover:opacity-100 transition-all duration-1000 transform hover:scale-[1.03]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
