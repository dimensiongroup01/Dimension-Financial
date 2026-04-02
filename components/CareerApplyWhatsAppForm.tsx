'use client';

import { FormEvent, useState } from 'react';

const WHATSAPP_NUMBER = '919650799560';
const HR_EMAIL = 'hr@dimensiongrouo.co.in';

export default function CareerApplyWhatsAppForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('Merchant Banking');
  const [experience, setExperience] = useState('');
  const [message, setMessage] = useState('');
  const [resumeName, setResumeName] = useState('');

  const buildMessage = () =>
    [
      'Career Application - Dimension Financial',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Position: ${position}`,
      `Experience: ${experience || 'Not specified'}`,
      `Resume: ${resumeName || 'Not attached in form'}`,
      `Message: ${message || 'N/A'}`
    ].join('\n');

  const onWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `${buildMessage()}\n\nNote: Please share the resume file in this WhatsApp chat after opening it.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const onEmailClick = () => {
    const subject = encodeURIComponent(`Career Application - ${fullName || 'Candidate'}`);
    const body = encodeURIComponent(
      `${buildMessage()}\n\nNote: Please attach your resume before sending this email.`
    );
    window.location.href = `mailto:${HR_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="mt-4 space-y-3" onSubmit={onWhatsAppSubmit}>
      <input
        className="input-shell"
        type="text"
        required
        placeholder="Full Name"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />
      <input
        className="input-shell"
        type="email"
        required
        placeholder="Email Address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="input-shell"
        type="tel"
        required
        placeholder="Phone Number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <select
        className="input-shell"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      >
        <option>Merchant Banking</option>
        <option>Debt Advisory</option>
        <option>Stock Broking</option>
        <option>Operations</option>
      </select>
      <input
        className="input-shell"
        type="text"
        placeholder="Years of Experience (e.g. 3 years)"
        value={experience}
        onChange={(event) => setExperience(event.target.value)}
      />
      <input
        className="input-shell"
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(event) => setResumeName(event.target.files?.[0]?.name ?? '')}
      />
      <textarea
        className="input-shell"
        rows={4}
        placeholder="Short profile summary (optional)"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="grid gap-2 sm:grid-cols-2">
        <button
          type="submit"
          className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
        >
          Apply via WhatsApp
        </button>
        <button
          type="button"
          onClick={onEmailClick}
          className="rounded-full border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5"
        >
          Apply via Email
        </button>
      </div>
      <p className="text-xs leading-relaxed text-slate-700">
        WhatsApp: +91 96507 99560. Email: hr@dimensiongrouo.co.in. Attach your resume in the selected channel.
      </p>
    </form>
  );
}
