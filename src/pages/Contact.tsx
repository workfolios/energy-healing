import React, { useState } from 'react';
import { Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { assetUrl } from '../utils/assets';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrenjbda';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Seeking Guidance',
    purpose: 'General Healing Inquiry',
    location: 'General Inquiry',
    message: '',
    policyAgreement: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    if (name === 'inquiryType') {
      const defaultPurpose = value === 'Seeking Collaboration' ? 'Podcast Guest / Interview' : 'General Healing Inquiry';
      setFormData(prev => ({
        ...prev,
        inquiryType: value,
        purpose: defaultPurpose,
        location: 'General Inquiry'
      }));
    } else if (name === 'purpose') {
      const isReiki = value.includes('Reiki');
      setFormData(prev => ({
        ...prev,
        purpose: value,
        location: (isReiki && prev.location === 'Virtual Session') ? 'East River, South Dakota (Huron)' : prev.location
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: val
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);
    setIsSubmitting(true);

    const isVirtual = formData.location === 'Virtual Session';
    const isReiki = formData.purpose.includes('Reiki');
    const selectedServiceFormat = isReiki ? 'In-Person Only' : (isVirtual ? 'Virtual' : 'In-Person or Virtual');
    const submittedFromPage = 'Contact Page';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          selectedServiceFormat,
          submittedFromPage,
          _subject: `Website Inquiry | ${formData.inquiryType} | ${formData.purpose}`
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setIsError(false);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: 'Seeking Guidance',
          purpose: 'General Healing Inquiry',
          location: 'General Inquiry',
          message: '',
          policyAgreement: false
        });
        // Scroll to form top if needed
        const form = document.getElementById('inquiry-form');
        if (form) form.scrollIntoView({ behavior: 'smooth' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-ivory min-h-screen py-16 sm:py-24">
      <SEO 
        title="Contact" 
        description="Get in touch with Kathy Curr to start an inquiry for Reiki treatments or Angel Guidance sessions."
        keywords="contact kathy curr, reiki inquiry huron sd, angel guidance inquiry sd, spiritual advisor contact, collaboration inquiry spiritual healing"
      />
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Get in Touch</h1>
          <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Have a question or looking to start an inquiry? Fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Contact Info & Note Column */}
          <div className="flex flex-col h-full order-2 lg:order-1">
            <div className="bg-stone-900 p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-800 text-ivory relative overflow-hidden flex-grow flex flex-col">
              <div className="absolute -top-12 -right-12 w-56 h-56 opacity-10 rotate-12">
                <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <h3 className="font-serif text-3xl mb-6">Service Territories</h3>
              <div className="w-16 h-1 bg-sage-700 rounded-full mb-8"></div>
              
              <div className="space-y-10 flex-grow flex flex-col justify-between">
                <div className="flex items-start h-full">
                  <div className="flex flex-col justify-between flex-grow h-full gap-10 md:gap-0 lg:min-h-[600px]">
                    <div>
                      <p className="font-serif text-3xl md:text-4xl mb-4 md:mb-6 text-ivory tracking-wide">East River, South Dakota</p>
                      <div className="text-stone-300 text-lg md:text-xl space-y-3 md:space-y-4 leading-relaxed ml-1 border-l-2 border-sage-700/50 pl-5 md:pl-6">
                        <p><strong className="text-ivory">Huron:</strong> Primary Service Area</p>
                        <p><strong className="text-ivory">Sioux Falls:</strong> Limited Availability</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-serif text-3xl md:text-4xl mb-4 md:mb-6 text-ivory tracking-wide">West River, South Dakota</p>
                      <div className="text-stone-300 text-lg md:text-xl space-y-3 md:space-y-4 leading-relaxed ml-1 border-l-2 border-sage-700/50 pl-5 md:pl-6">
                        <p><strong className="text-ivory">Rapid City:</strong> Limited Availability</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-serif text-3xl md:text-4xl mb-4 md:mb-6 text-ivory tracking-wide">Red River Valley, North Dakota</p>
                      <div className="text-stone-300 text-lg md:text-xl space-y-3 md:space-y-4 leading-relaxed ml-1 border-l-2 border-sage-700/50 pl-5 md:pl-6">
                        <p><strong className="text-ivory">Fargo / Moorhead:</strong> Limited Availability</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-serif text-3xl md:text-4xl mb-4 md:mb-6 text-ivory tracking-wide">Twin Cities, Minnesota</p>
                      <div className="text-stone-300 text-lg md:text-xl space-y-3 md:space-y-4 leading-relaxed ml-1 border-l-2 border-sage-700/50 pl-5 md:pl-6">
                        <p><strong className="text-ivory">Minneapolis / St. Paul:</strong> Limited Availability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-stone-800">
                <div className="bg-white border-sage-700 p-8 rounded-2xl border shadow-lg">
                  <h4 className="font-serif text-2xl text-sage-700 mb-4">Inquiry Timeline</h4>
                  <p className="text-stone-700 text-lg leading-relaxed">
                    I aim to respond to all inquiries within <span className="text-sage-700 font-bold">24-48 hours</span>. Please check your spam folder if you don't see a reply.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="inquiry-form" className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-sage-700 order-1 lg:order-2 relative overflow-hidden transform hover:-translate-y-1 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-2 bg-sage-700"></div>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-4 text-center space-y-8"
                role="status"
                aria-live="polite"
              >
                <div className="w-20 h-20 bg-sage-50 rounded-full flex items-center justify-center mx-auto border border-sage-100 shadow-inner">
                  <CheckCircle2 size={48} className="text-sage-700" />
                </div>
                <div>
                  <h2 className="font-serif text-4xl text-stone-900 mb-4">Inquiry Received</h2>
                  <p className="text-stone-600 text-xl leading-relaxed max-w-md mx-auto">
                    Kathy will review your message and respond to the email address you provided within <span className="font-bold">24–48 hours</span>.
                  </p>
                </div>
                <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 text-left">
                  <h3 className="font-serif text-lg text-stone-900 mb-3">Next Steps:</h3>
                  <ul className="space-y-3 text-stone-600 text-sm">
                    <li className="flex items-start gap-2">
                       <span className="w-5 h-5 rounded-full bg-sage-100 text-sage-800 text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                       <span>Check your email (including spam folder) for our response.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="w-5 h-5 rounded-full bg-sage-100 text-sage-800 text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                       <span>We will discuss scheduling, your healing goals, and answers to any questions you possess.</span>
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-sage-700 font-medium hover:text-sage-900 transition-colors underline decoration-sage-200 underline-offset-4"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="font-serif text-4xl text-stone-900 mb-10">Inquiry Form</h2>
                {isError && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-2xl mb-8" role="alert">
                    <p className="font-medium">There was an error submitting your inquiry. Please try again later.</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-base font-bold text-stone-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-sage-500 focus:ring-0 outline-none transition-all text-stone-900 placeholder:text-stone-400 shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-bold text-stone-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    autoComplete="email"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-sage-500 focus:ring-0 outline-none transition-all text-stone-900 placeholder:text-stone-400 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-bold text-stone-900 mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-sage-500 focus:ring-0 outline-none transition-all text-stone-900 placeholder:text-stone-400 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-base font-bold text-stone-900 mb-2">Inquiry Type</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-sage-500 focus:ring-0 outline-none transition-all text-stone-900 cursor-pointer shadow-sm"
                >
                  <option>Seeking Guidance</option>
                  <option>Seeking Collaboration</option>
                </select>
                <p className="mt-3 text-sm text-stone-500 leading-relaxed italic">
                  {formData.inquiryType === 'Seeking Collaboration' 
                    ? "For professional partnerships, media appearances, podcasts, editorial work, or community projects."
                    : "For personal Reiki healing treatments or angel guidance sessions."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="purpose" className="block text-base font-bold text-stone-900 mb-2">Connection Purpose</label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-sage-500 focus:ring-0 outline-none transition-all text-stone-900 cursor-pointer shadow-sm"
                  >
                    {formData.inquiryType === 'Seeking Collaboration' ? (
                      <>
                        <option>Seeking Mentorship</option>
                        <option>Podcast Guest / Interview</option>
                        <option>Media Appearance</option>
                        <option>Editorial / Writing Project</option>
                        <option>Community / Collaborative Project</option>
                        <option>Other Professional Inquiry</option>
                      </>
                    ) : (
                      <>
                        <option>General Healing Inquiry</option>
                        <option>Adult Reiki Treatment</option>
                        <option>Youth Reiki Treatment (Ages 10–21)</option>
                        <option>Adult Angel Guidance Session</option>
                        <option>Youth Angel Guidance Session (Ages 10–21)</option>
                      </>
                    )}
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-base font-bold text-stone-900 mb-2">Preferred Location</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-sage-500 focus:ring-0 outline-none transition-all text-stone-900 cursor-pointer shadow-sm"
                  >
                    <option>General Inquiry</option>
                    {!formData.purpose.includes('Reiki') && (
                      <option>Virtual Session</option>
                    )}
                    <option>East River, South Dakota (Huron)</option>
                    <option>East River, South Dakota (Sioux Falls)</option>
                    <option>West River, South Dakota (Rapid City)</option>
                    <option>Red River Valley, North Dakota (Fargo/Moorhead)</option>
                    <option>Twin Cities, Minnesota (Minneapolis/St. Paul)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-bold text-stone-900 mb-2">Message / Preferred Times</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-sage-500 focus:ring-0 outline-none transition-all resize-none text-stone-900 placeholder:text-stone-400 shadow-sm"
                  placeholder="Please let me know your preferred days/times or any specific questions you have."
                ></textarea>
              </div>

              <div className="bg-sage-50/50 p-8 rounded-[2rem] border border-sage-100">
                <div className="flex items-start">
                  <div className="flex items-center h-6">
                    <input
                      id="policyAgreement"
                      name="policyAgreement"
                      type="checkbox"
                      required
                      checked={formData.policyAgreement}
                      onChange={handleChange}
                      className="focus:ring-sage-500 h-6 w-6 text-sage-700 border-stone-300 rounded cursor-pointer"
                    />
                  </div>
                  <div className="ml-5">
                    <label htmlFor="policyAgreement" className="text-lg font-serif text-stone-900 cursor-pointer">I acknowledge the policies</label>
                    <p className="text-stone-600 mt-2 leading-relaxed text-sm">I understand that Reiki treatments are not a substitute for medical care and I agree to the cancellation policy.</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full bg-stone-900 text-ivory font-bold py-5 px-8 rounded-full hover:bg-stone-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending Inquiry…' : 'Send Inquiry'}
              </button>
              </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
