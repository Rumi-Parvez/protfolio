'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';

import {
  FaHouse,
  FaArrowLeft,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaCopy,
  FaCheck,
  FaWhatsapp,
} from 'react-icons/fa6';

interface FormDataState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    subject: 'Someone want to talking with you from portfolio',
    message: '',
  });

  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = (): void => {
    navigator.clipboard.writeText('openyhoolceo@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    const targetEmail = 'openyhoolceo@gmail.com';

    const encodedSubject = encodeURIComponent(
      formData.subject || 'Someone want to talking with you from portfolio'
    );

    const formattedBody = `Name: ${formData.name}
Sender Email: ${formData.email}

Message:
${formData.message}`;

    const encodedBody = encodeURIComponent(formattedBody);

    // Gmail Compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodedSubject}&body=${encodedBody}`;

    // Fallback mailto URL
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    const newWindow = window.open(gmailUrl, '_blank');

    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed === 'undefined'
    ) {
      window.location.href = mailtoUrl;
    }
  };

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/Rumi-Parvez',
      icon: <FaGithub size={18} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rumi-parvez-dev',
      icon: <FaLinkedin size={18} />,
    },
    {
      name: 'X / Twitter',
      href: 'https://x.com/openyhoolceo',
      icon: <FaXTwitter size={18} />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/rumepervez',
      icon: <FaInstagram size={18} />,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@RumiParvez_Mystery',
      icon: <FaYoutube size={18} />,
    },
    {
      name: 'Discord',
      href: 'https://discord.com/users/1560634508821266434',
      icon: <FaDiscord size={18} />,
    },
  ];

  return (
    <section className="relative mt-20 isolate overflow-hidden text-white py-12 md:py-20 px-6 font-sans select-none">

      {/* Ambient Liquid Glass Background */}
      <div className="pointer-events-none absolute top-20 left-0 -z-10 h-72 w-72 rounded-full bg-red-700/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-rose-500/[0.08] blur-[130px]" />

      <div className="max-w-6xl mx-auto">

        {/* Navigation / Header Area */}
        <div className="flex flex-col items-start gap-6 mb-12">

          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-2xl hover:bg-white/[0.12] hover:border-white/25 text-white transition-all duration-300 text-sm font-medium cursor-pointer shadow-lg group"
          >
            <FaArrowLeft className="text-gray-300 group-hover:text-white group-hover:-translate-x-1 transition-all duration-300 text-xs" />
            <FaHouse className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm" />
            <span>Back to Home</span>
          </Link>

          <div>
            <span className="text-xs tracking-[0.3em] text-gray-400 uppercase font-semibold block mb-3">
              GET IN TOUCH
            </span>

            <h2 className="text-4xl md:text-6xl font-italiana tracking-tight text-white leading-tight">
              Let&apos;s Talk &amp; Build Something Scalable.
            </h2>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Quick Contact Card */}
            <div className="relative isolate overflow-hidden p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-transparent backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(239,68,68,0.15)] transition-all duration-500 hover:border-white/25">

              {/* Glass Reflection */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <h3 className="text-2xl font-semibold mb-6">
                Contact Details
              </h3>

              <div className="space-y-6 text-sm text-gray-300">

                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 border border-red-400/20 backdrop-blur-xl rounded-xl text-red-400 shrink-0 mt-1">
                    <FaEnvelope size={18} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Direct Email
                    </p>

                    <p className="font-mono text-white text-base font-medium break-all">
                      openyhoolceo@gmail.com
                    </p>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="mt-2 text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <FaCheck className="text-green-400" />
                      ) : (
                        <FaCopy />
                      )}

                      {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
                    </button>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 border border-green-400/20 backdrop-blur-xl rounded-xl text-green-400 shrink-0 mt-1">
                    <FaWhatsapp size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Phone &amp; WhatsApp
                    </p>

                    <p className="font-mono text-white text-base font-medium">
                      01407794143
                    </p>

                    <a
                      href="https://wa.me/8801407794143"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-xs text-green-400 hover:text-green-300 transition-colors"
                    >
                      <FaWhatsapp size={14} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 border border-red-400/20 backdrop-blur-xl rounded-xl text-red-400 shrink-0 mt-1">
                    <FaLocationDot size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Location
                    </p>

                    <p className="text-white text-base font-medium">
                      Narsingdi, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 border border-red-400/20 backdrop-blur-xl rounded-xl text-red-400 shrink-0 mt-1">
                    <FaClock size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Response Time
                    </p>

                    <p className="text-white text-base font-medium">
                      Within 24 Hours (UTC+6)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Channels Card */}
            <div className="relative isolate overflow-hidden p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-transparent backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(239,68,68,0.12)] transition-all duration-500 hover:border-white/25">

              {/* Glass Reflection */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <h3 className="text-xl font-semibold mb-4">
                Connect Socially
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:border-red-400/40 bg-white/[0.035] hover:bg-white/[0.09] backdrop-blur-xl transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-red-400 transition-colors">
                      {social.icon}
                    </span>

                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Interactive Form */}
          <div className="relative isolate overflow-hidden lg:col-span-7 p-8 md:p-10 rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-transparent backdrop-blur-2xl shadow-[0_25px_80px_-25px_rgba(239,68,68,0.16)]">

            {/* Glass Reflection */}
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <h3 className="text-2xl font-semibold mb-2">
              Send a Direct Message
            </h3>

            <p className="text-gray-400 text-sm mb-8">
              Fill out the form below and click submit to open your pre-filled email client directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Your Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/[0.045] backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-400/50 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>

                {/* Your Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2"
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/[0.045] backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-400/50 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>

              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/[0.045] backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-400/50 focus:bg-white/[0.07] transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="w-full bg-white/[0.045] backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-400/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-red-500/15 hover:bg-red-500/25 border border-red-400/25 hover:border-red-400/45 backdrop-blur-xl text-white font-medium rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_8px_30px_-10px_rgba(239,68,68,0.35)] cursor-pointer"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;