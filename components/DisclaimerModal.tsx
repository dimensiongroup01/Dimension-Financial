'use client';

import { useEffect, useState } from 'react';

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-2xl border border-amber-200 bg-white shadow-2xl">
        <div className="border-b border-amber-200 bg-amber-50 px-6 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-800">Important Disclaimer</p>
        </div>

        <div className="space-y-4 px-6 py-5 text-sm leading-relaxed text-slate-800 md:text-base">
          <p>
            Dimension Financial Solutions Private Limited is a SEBI-registered Merchant Banker (Registration No.
            INM000013314) and a SEBI-registered Stock Broker (Registration No. INZ000313233). The Company is also a
            Trading Member of BSE Limited in the New Debt Segment.
          </p>
          <p>
            Investments in the securities market are subject to market risks. Past performance is not indicative of
            future results. Investors are advised to carefully read all relevant offer documents and scheme-related
            materials before making any investment decisions.
          </p>
          <p>
            The information provided on this website is for general informational purposes only and does not constitute
            investment, legal, tax, or other professional advice. Investors should consult their financial advisors
            before making any investment decisions.
          </p>
        </div>

        <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#0f3d68] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#134f84]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
