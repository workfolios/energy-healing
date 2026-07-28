import React from 'react';
import SEO from '../components/SEO';

const Policies = () => {
  return (
    <div className="bg-ivory min-h-screen py-16 sm:py-24">
      <SEO 
        title="Policies & Disclaimers" 
        description="Review our service policies, spiritual disclaimers, and privacy practices for Kathy's Healing Energy, LLC."
        keywords="reiki policies huron sd, service disclaimer spiritual healing, healing energy company policies, privacy practices KEH"
      />
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl text-stone-900 mb-6">Policies & Disclaimers</h1>
          <p className="text-stone-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-12 text-stone-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4 border-b border-stone-200 pb-2">Spiritual Services Disclaimer</h2>
            <p className="mb-4">
              Reiki, energy healing, and mediumship are considered complementary and alternative healing arts. 
              <strong> Kathy’s Healing Energy, LLC</strong> does not diagnose conditions, prescribe or perform medical treatment, 
              prescribe substances, or interfere with the treatment of a licensed medical professional.
            </p>
            <p>
              These services are not a substitute for medical or psychological diagnosis and treatment. 
              Information provided during sessions is not intended to replace professional medical advice. 
              Always consult a physician or licensed healthcare professional for any physical or psychological ailments.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4 border-b border-stone-200 pb-2">Booking & Cancellation Policy</h2>
            <p className="mb-4">
              <strong>Appointments:</strong> All sessions are by appointment only. I appreciate your respect for my time and the time of other clients.
            </p>
            <p className="mb-4">
              <strong>Cancellations:</strong> Please provide at least 24 hours notice if you need to cancel or reschedule your appointment. 
              Cancellations made with less than 24 hours notice may be subject to a cancellation fee.
            </p>
            <p>
              <strong>Late Arrivals:</strong> If you arrive late, your session may be shortened in order to accommodate others whose appointments follow yours. 
              Full payment for the scheduled session will be expected.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4 border-b border-stone-200 pb-2">Youth Client Consent</h2>
            <p className="mb-4">
              For clients under the age of 18, a parent or legal guardian must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide written consent for the session.</li>
              <li>Remain present in the room for the entire duration of the session.</li>
              <li>Be the primary point of contact for scheduling and communication.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4 border-b border-stone-200 pb-2">Privacy Policy</h2>
            <p className="mb-4">
              Your privacy is important to me. Any personal information shared during booking or sessions is kept strictly confidential. 
              I do not share, sell, or disclose your personal information to third parties unless required by law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4 border-b border-stone-200 pb-2">Contact & Response Time</h2>
            <p>
              I strive to respond to all emails and inquiries within 24-48 hours during business days. 
              Please note that I do not answer calls or emails while in session with other clients.
            </p>
          </section>
          
          <div className="pt-12 mt-12 border-t border-stone-200 text-center text-sm text-stone-500">
            <p>Kathy’s Healing Energy, LLC</p>
            <p>Huron, South Dakota</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
