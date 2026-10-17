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
      {/* Container Card with Dark Red Gradient */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-b from-[#1a0808] via-[#400d0d] to-[#801414] px-6 py-16 text-center text-white shadow-2xl">
        
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
          <div className="flex items-center bg-white rounded-xl p-1.5 shadow-lg border border-gray-200">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              required
              className="w-full bg-transparent px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none text-sm md:text-base"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-[#222222] hover:bg-black text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-colors duration-200 cursor-pointer"
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