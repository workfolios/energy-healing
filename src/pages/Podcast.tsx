import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Mic, Video } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { assetUrl } from '../utils/assets';

const Podcast = () => {
  const audioEpisodes = [
    {
      title: "Identifying Anger and Its Triggers",
      podcastName: "Intuitive Kids",
      platform: "Spotify",
      embed: (
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/3cyZn6glKpr1CX3LlzVZ7i?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )
    },
    {
      title: "Episode 21 Featuring Kathy Curr",
      podcastName: "Soul Chats With Dani Jo",
      platform: "Spotify",
      embed: (
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/0WaMqRJnKczUFU9dWI3e5n?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )
    },
    {
      title: "Discovering Your Spiritual Potential",
      podcastName: "Angels & Awakening",
      platform: "Apple Podcasts",
      embed: (
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="175"
          style={{ width: '100%', overflow: 'hidden', borderRadius: '12px' }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.podcasts.apple.com/us/podcast/discovering-your-spiritual-potential/id1451424894?i=1000578030646"
        ></iframe>
      )
    }
  ];

  const videoEpisode = {
    title: "Identifying Anger and Its Triggers",
    podcastName: "Intuitive Kids",
    platform: "YouTube",
    embed: (
      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/QWeydCFRIsg?si=k1WYtaF-9OCFMNQp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        ></iframe>
      </div>
    )
  };

  return (
    <div className="bg-ivory min-h-screen py-16 sm:py-24">
      <SEO
        title="Podcasts"
        description="Listen to Kathy Curr discuss intuitive energy healing, triggers, and spiritual guidance on various podcasts and media appearances."
        keywords="kathy curr podcast, intuitive kids spotify, energy healing media, spiritual guidance interview, healing arts guest appearance"
      />
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">Podcasts</h1>
          <div className="w-24 h-1 bg-sage-700 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Listen to conversations where I share insights on energy healing, intuition, and finding balance.
          </p>
        </div>

        {/* Featured Video Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-700">
              <Video size={20} />
            </div>
            <h2 className="font-serif text-3xl text-stone-900">Featured Video</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {videoEpisode.embed}
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block bg-sage-700 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm">
                {videoEpisode.podcastName}
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">{videoEpisode.title}</h3>
              <p className="text-stone-600 text-xl leading-relaxed">
                A deep dive into understanding emotional triggers and how energy healing can support emotional regulation in children and adults.
              </p>
              <div className="pt-4">
                <a
                  href="https://www.youtube.com/watch?v=QWeydCFRIsg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-stone-900 text-ivory px-8 py-3 rounded-full font-medium hover:bg-stone-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
                >
                  Watch on YouTube <Play size={18} className="fill-current group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-stone-200 mb-24" />

        {/* Audio Episodes Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-700">
              <Mic size={20} />
            </div>
            <h2 className="font-serif text-3xl text-stone-900">Audio Conversations</h2>
          </div>

          <div className="space-y-12">
            {audioEpisodes.map((ep, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 24px -10px rgba(44, 57, 47, 0.12)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-sage-700/30 hover:border-sage-700/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5 space-y-5">
                    <div className="inline-block bg-sage-100 text-sage-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      {ep.podcastName}
                    </div>
                    <h3 className="font-serif text-3xl text-stone-900 leading-tight group-hover:text-sage-700 transition-colors">{ep.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-stone-500 font-medium font-sans">
                      <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 transition-colors group-hover:bg-sage-100 group-hover:text-sage-700">
                        <Play size={14} className="fill-current" />
                      </div>
                      <span>Listen on {ep.platform}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-stone-50 p-4 rounded-2xl border border-stone-100 shadow-inner">
                    {ep.embed}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Guest Inquiry Box */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="bg-white border-sage-700/30 p-12 md:p-16 rounded-[3rem] border shadow-2xl text-center transition-all duration-500 relative overflow-hidden group hover:shadow-sage-200/40">
            <div className="absolute top-0 left-0 w-full h-2 bg-sage-700"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 opacity-[0.06] rotate-45">
              <img src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif text-4xl text-stone-900 mb-6">Podcast Guest Inquiries</h3>
            <p className="text-stone-600 text-xl mb-10 max-w-xl mx-auto">
              <span className="block">Interested in having Kathy share her insights on your show?</span>
              <span className="mt-4 block">We&apos;d love to hear from you!</span>
            </p>
            <Link
              to="/contact#inquiry-form"
              className="inline-block bg-stone-900 text-ivory px-12 py-4 rounded-full font-medium hover:bg-stone-800 hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl transform duration-300"
            >
              Get in touch for a guest appearance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
