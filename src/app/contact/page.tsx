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
  FaCheck
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    const targetEmail = 'openyhoolceo@gmail.com';
    const encodedSubject = encodeURIComponent(formData.subject || 'Someone want to talking with you from portfolio');
    
    const formattedBody = `Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedBody = encodeURIComponent(formattedBody);

    // Direct Web Gmail Compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodedSubject}&body=${encodedBody}`;
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    const newWindow = window.open(gmailUrl, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }
  };

  const socialLinks: SocialLink[] = [
    { name: 'GitHub', href: 'https://github.com/Rumi-Parvez', icon: <FaGithub size={18} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/rumiparvez', icon: <FaLinkedin size={18} /> },
    { name: 'X / Twitter', href: 'https://x.com/openyhoolceo', icon: <FaXTwitter size={18} /> },
    { name: 'Instagram', href: 'https://instagram.com/openyhoolceo', icon: <FaInstagram size={18} /> },
    { name: 'YouTube', href: 'https://youtube.com/@RumiParvez_Mystery', icon: <FaYoutube size={18} /> },
    { name: 'Discord', href: '#', icon: <FaDiscord size={18} /> },
  ];

  return (
    <section className="text-white py-12 md:py-20 px-6 font-sans select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation / Header Area with Back to Home Button */}
        <div className="flex flex-col items-start gap-6 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-gray-700 bg-gray-900/80 hover:bg-red-700 hover:border-red-600 text-white transition-all duration-300 text-sm font-medium cursor-pointer shadow-lg group"
          >
            <FaArrowLeft className="text-gray-300 group-hover:text-white group-hover:-translate-x-1 transition-all duration-300 text-xs" />
            <FaHouse className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm" />
            <span>Back to Home</span>
          </Link>

          <div>
            <span className="text-xs tracking-[0.3em] text-gray-400 uppercase font-semibold block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white leading-tight">
              {`Let's Talk & Build`} <br /> Something Scalable.
            </h2>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl border border-gray-800/80 bg-transparent shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
              
              <div className="space-y-6 text-sm text-gray-300">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-950/40 border border-red-800/50 rounded-xl text-red-500 shrink-0 mt-1">
                    <FaEnvelope size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Direct Email</p>
                    <p className="font-mono text-white text-base font-medium break-all">openyhoolceo@gmail.com</p>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="mt-2 text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                      {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
                    </button>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-950/40 border border-red-800/50 rounded-xl text-red-500 shrink-0 mt-1">
                    <FaLocationDot size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white text-base font-medium">Narsingdi, Bangladesh</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-950/40 border border-red-800/50 rounded-xl text-red-500 shrink-0 mt-1">
                    <FaClock size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Response Time</p>
                    <p className="text-white text-base font-medium">Within 24 Hours (UTC+6)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="p-8 rounded-3xl border border-gray-800/80 bg-transparent shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Connect Socially</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-800/80 hover:border-red-600/60 bg-black/30 hover:bg-black/60 transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-red-500 transition-colors">
                      {social.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl border border-gray-800/80 bg-transparent shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Send a Direct Message</h3>
            <p className="text-gray-400 text-sm mb-8">
              Fill out the form below and click submit to open your pre-filled email client directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">
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
                    className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                {/* Your Email */}
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">
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
                    className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">
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
                  className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-medium rounded-xl flex items-center justify-center gap-3 transition-colors duration-300 shadow-lg cursor-pointer"
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