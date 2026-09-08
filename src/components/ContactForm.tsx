'use client';

import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { siteConfig } from '@/data/siteConfig';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('sending');
      setTimeout(() => {
        setStatus('error');
        setErrorMessage('EmailJS is ready in code. Please add your credentials to .env.local to enable live email delivery.');
      }, 1000);
      return;
    }

    try {
      setStatus('sending');
      setErrorMessage('');

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Portfolio Contact Inquiry',
          message: formData.message,
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS submit error:', err);
      setStatus('error');
      setErrorMessage(err?.text || 'Failed to dispatch message. Please verify your EmailJS keys in .env.local.');
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-[#292929] bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#292929] mb-16 gap-6">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-[#707070] uppercase block mb-3 font-mono">
              08 / DISPATCH
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#F3F3F0] font-normal">
              LET'S BUILD <span className="italic text-[#C8C8C2]">SOMETHING.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A5A5A0] max-w-md leading-relaxed">
            Open to interesting software problems, collaborations, and opportunities to keep building and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="font-mono text-xs text-[#707070] uppercase tracking-[0.2em] block mb-2 font-medium">
                  DIRECT CONTACT
                </span>
                <a
                  href={`mailto:${siteConfig.socials.email}`}
                  className="font-serif text-2xl text-[#F3F3F0] hover:text-[#C8C8C2] transition-colors"
                >
                  {siteConfig.socials.email}
                </a>
              </div>

              <div>
                <span className="font-mono text-xs text-[#707070] uppercase tracking-[0.2em] block mb-3 font-medium">
                  CONNECTED PLATFORMS
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-[0.2em] text-[#A5A5A0] hover:text-[#F3F3F0] transition-colors uppercase flex items-center justify-between border border-[#292929] bg-[#0A0A0A] p-3 rounded-md hover:border-[#C8C8C2]"
                  >
                    <span>GITHUB REPOSITORY</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-[0.2em] text-[#A5A5A0] hover:text-[#F3F3F0] transition-colors uppercase flex items-center justify-between border border-[#292929] bg-[#0A0A0A] p-3 rounded-md hover:border-[#C8C8C2]"
                  >
                    <span>LINKEDIN NETWORK</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#151515] mt-12">
              <span className="font-mono text-[11px] text-[#707070] uppercase tracking-[0.15em] block">
                RESPONSE TIME: REGULARLY MONITORED
              </span>
            </div>
          </div>

          {/* EmailJS Contact Form — Single Surface Container */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="border border-[#292929] bg-[#0A0A0A] p-8 space-y-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-[#A5A5A0] uppercase tracking-[0.15em] mb-2 font-medium">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-[#101010] border border-[#292929] px-4 py-3 text-sm text-[#F3F3F0] placeholder-[#707070] focus:border-[#C8C8C2] transition-colors rounded-md outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-[#A5A5A0] uppercase tracking-[0.15em] mb-2 font-medium">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-[#101010] border border-[#292929] px-4 py-3 text-sm text-[#F3F3F0] placeholder-[#707070] focus:border-[#C8C8C2] transition-colors rounded-md outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-xs text-[#A5A5A0] uppercase tracking-[0.15em] mb-2 font-medium">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry / collaboration"
                  className="w-full bg-[#101010] border border-[#292929] px-4 py-3 text-sm text-[#F3F3F0] placeholder-[#707070] focus:border-[#C8C8C2] transition-colors rounded-md outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-[#A5A5A0] uppercase tracking-[0.15em] mb-2 font-medium">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-[#101010] border border-[#292929] px-4 py-3 text-sm text-[#F3F3F0] placeholder-[#707070] focus:border-[#C8C8C2] transition-colors rounded-md outline-none resize-none"
                />
              </div>

              {/* Status Skeleton Loading & Feedback */}
              {status === 'sending' && (
                <div className="p-4 border border-[#292929] bg-[#101010] space-y-2 animate-pulse rounded-md">
                  <div className="h-3 bg-[#292929] w-1/3 rounded-sm" />
                  <div className="h-2 bg-[#151515] w-2/3 rounded-sm" />
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 border border-[#C8C8C2] bg-[#151515] text-xs font-mono text-[#F3F3F0] tracking-[0.15em] uppercase rounded-md">
                  MESSAGE DISPATCHED SUCCESSFULLY. SHAMEEM WILL GET BACK TO YOU SOON.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 border border-[#991B1B] bg-[#151515] text-xs font-mono text-[#A5A5A0] tracking-[0.1em] rounded-md">
                  <span className="text-[#E63946] font-semibold block mb-1 uppercase">DISPATCH NOTICE</span>
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full font-sans text-xs tracking-[0.25em] font-semibold text-[#0A0A0A] bg-[#F3F3F0] py-4 border border-[#F3F3F0] hover:bg-[#C8C8C2] hover:border-[#C8C8C2] transition-colors uppercase rounded-md disabled:opacity-50"
              >
                {status === 'sending' ? 'TRANSMITTING MESSAGE...' : 'DISPATCH MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
