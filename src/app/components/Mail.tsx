'use client';

import React, { useState } from 'react';

const ContactCallout = () => {
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    const targetEmail = 'openyhoolceo@gmail.com';
    const subject = encodeURIComponent('Someone want to talking with you from portfolio!');
    const body = encodeURIComponent(message);

    // Direct Web Gmail Compose Link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;

    // Fallback standard mailto link
    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    // Try opening web Gmail in a new tab
    const newWindow = window.open(gmailUrl, '_blank');

    // Fallback if popup blocker blocks new tab or user prefers default desktop mail app
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      {/* Container Card with Liquid Glass Effect */}
      <div className="relative isolate overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-[#1a0808]/90 via-[#400d0d]/85 to-[#801414]/90 px-6 py-16 text-center text-white shadow-[0_20px_80px_-20px_rgba(128,20,20,0.45)] backdrop-blur-2xl">

        {/* Glass Reflections */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/[0.12] via-white/[0.02] to-transparent" />

        <div className="pointer-events-none absolute -top-24 left-1/4 -z-10 h-64 w-64 rounded-full bg-red-400/15 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-24 right-1/4 -z-10 h-64 w-64 rounded-full bg-rose-300/10 blur-[100px]" />

        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-3">
          {`Let's build something scalable.`}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm md:text-base font-light mb-8">
          Drop your message — I reply within one business day.
        </p>

        {/* Form Container */}
        <form onSubmit={handleSend} className="max-w-xl mx-auto">
          <div className="flex items-center bg-white/[0.10] rounded-xl p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/25 backdrop-blur-xl ring-1 ring-white/[0.05]">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              required
              className="w-full bg-transparent px-4 py-2.5 text-white placeholder-white/50 focus:outline-none text-sm md:text-base"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-white/15 hover:bg-white/25 border border-white/20 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-colors duration-200 cursor-pointer shadow-inner"
            >
              {`Let's Talk`}
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default ContactCallout;
