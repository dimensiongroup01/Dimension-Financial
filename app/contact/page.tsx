'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

/* ✅ Replace with your real Formspree endpoint */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  service: 'Merchant Banking',
  message: '',
};

type Step = 'form' | 'review' | 'success' | 'error';

export default function ContactPage() {
  const [step, setStep] = useState<Step>('form');
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  /* =========================
     HANDLE INPUT CHANGE
  ========================= */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  /* =========================
     VALIDATION (FIXED ERROR)
  ========================= */
  function validateForm() {
    if (!data.name.trim()) {
      setErrorMsg('Name is required');
      return false;
    }
    if (!data.email.includes('@')) {
      setErrorMsg('Enter a valid email');
      return false;
    }
    if (data.phone.length < 10) {
      setErrorMsg('Enter valid phone number');
      return false;
    }
    return true;
  }

  /* =========================
     STEP 1 → REVIEW
  ========================= */
  function handleReview(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) return;

    setErrorMsg('');
    setStep('review');
  }

  /* =========================
     STEP 2 → CONFIRM SUBMIT
  ========================= */
  async function handleConfirm() {
    if (!validateForm()) return;

    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json?.errors?.[0]?.message || 'Submission failed.');
      }

      setStep('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStep('error');
    } finally {
      setSubmitting(false);
    }
  }

  /* =========================
     FORM UI
  ========================= */
  function renderForm() {
    return (
      <form onSubmit={handleReview} className="space-y-4">

        <input
          className="input-shell"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />

        <input
          className="input-shell"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          className="input-shell"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />

        <select
          className="input-shell"
          name="service"
          value={data.service}
          onChange={handleChange}
        >
          <option>Merchant Banking</option>
          <option>Debt Advisory</option>
          <option>Stock Broking</option>
        </select>

        <textarea
          className="input-shell"
          name="message"
          value={data.message}
          onChange={handleChange}
          placeholder="Message"
        />

        {errorMsg && (
          <p className="text-red-600 text-sm">{errorMsg}</p>
        )}

        <button className="btn-primary">
          Review & Submit
        </button>
      </form>
    );
  }

  /* =========================
     REVIEW UI
  ========================= */
  function renderReview() {
    return (
      <div className="space-y-4">
        <h3 className="font-bold text-lg">Review Your Details</h3>

        <p><b>Name:</b> {data.name}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Phone:</b> {data.phone}</p>
        <p><b>Service:</b> {data.service}</p>
        <p><b>Message:</b> {data.message}</p>

        <div className="flex gap-3">
          <button onClick={() => setStep('form')} className="btn-secondary">
            Edit
          </button>

          <button onClick={handleConfirm} className="btn-primary">
            {submitting ? 'Sending...' : 'Confirm & Send'}
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     SUCCESS UI
  ========================= */
  function renderSuccess() {
    return (
      <div className="text-green-600 space-y-3">
        <h3>Message Sent Successfully ✅</h3>
        <button
          onClick={() => {
            setData(initialData);
            setStep('form');
          }}
        >
          Send Again
        </button>
      </div>
    );
  }

  /* =========================
     ERROR UI
  ========================= */
  function renderError() {
    return (
      <div className="text-red-600 space-y-3">
        <p>{errorMsg}</p>
        <button onClick={() => setStep('form')}>
          Try Again
        </button>
      </div>
    );
  }

  /* =========================
     MAIN RETURN
  ========================= */
  return (
    <>
      <SiteHeader />

      <main className="p-6">
        <PageHero kicker="Get In Touch" title="Contact Us" subtitle="Send us a message" />

        <div className="max-w-xl mx-auto mt-8">
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {step === 'success' && 'Message sent successfully. Thank you for contacting us.'}
            {step === 'error' && errorMsg}
            {submitting && 'Sending your message. Please wait.'}
          </div>
          {step === 'form' && renderForm()}
          {step === 'review' && renderReview()}
          {step === 'success' && renderSuccess()}
          {step === 'error' && renderError()}
        </div>

        {/* <ScrollFusion3D /> */}
        <StoryChapter 
          title="Building Trust Through Every Conversation" 
          detail="Our team is ready to discuss your financial objectives and craft tailored solutions."
        />
        <ScrollReveal />
      </main>

      <SiteFooter />
    </>
  );
}