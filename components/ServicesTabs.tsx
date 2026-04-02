'use client';

import { useState } from 'react';

type ServiceBlock = {
  id: string;
  label: string;
  title: string;
  description: string;
  deliverables: string[];
  process: { step: string; detail: string }[];
};

const blocks: ServiceBlock[] = [
  {
    id: 'merchant',
    label: 'Merchant Banking',
    title: 'Merchant Banking',
    description: 'SEBI-registered merchant banking support across issue management, capital restructuring, and execution readiness.',
    deliverables: [
      'IPO, FPO, and Rights Issue management',
      'Underwriting in public issues including SME IPOs',
      'QIP, buyback, delisting, and open offer support'
    ],
    process: [
      { step: 'Readiness', detail: 'Mandate scoping and requirement mapping.' },
      { step: 'Structuring', detail: 'Capital issue design and documentation.' },
      { step: 'Execution', detail: 'Regulatory and transaction implementation.' },
      { step: 'Closure', detail: 'Reporting and post-issue advisory support.' }
    ]
  },
  {
    id: 'stock',
    label: 'Stock Broking',
    title: 'Stock Broking',
    description: 'Debt segment stock broking and execution support for institutions, corporates, trusts, and treasury participants.',
    deliverables: [
      'BSE debt segment trading and execution support',
      'Placement support for bonds, debentures, and government securities',
      'Market-linked transaction facilitation for institutional clients'
    ],
    process: [
      { step: 'Onboard', detail: 'Compliance and account activation flow.' },
      { step: 'Assess', detail: 'Instrument suitability and mandate mapping.' },
      { step: 'Execute', detail: 'Trade and placement execution support.' },
      { step: 'Report', detail: 'Transaction reporting and service continuity.' }
    ]
  }
];

export default function ServicesTabs() {
  const [active, setActive] = useState(blocks[0].id);
  const current = blocks.find((block) => block.id === active) ?? blocks[0];

  return (
    <section className="section-shell py-14 md:py-20">
      <div className="flex flex-wrap gap-2" data-reveal>
        {blocks.map((block) => (
          <button
            key={block.id}
            onClick={() => setActive(block.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === block.id
                ? 'bg-[#10284a] text-white shadow-[0_8px_24px_rgba(16,40,74,0.14)]'
                : 'border border-[#d8c39a]/70 bg-[#fff8eb] text-[#10284a] hover:border-[#b58e43]'
            }`}
          >
            {block.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <article data-reveal className="card p-6">
          <h3 className="font-display text-2xl">{current.title}</h3>
          <p className="mt-3 text-sm text-ink">{current.description}</p>
        </article>
        <article data-reveal className="card p-6">
          <h3 className="font-display text-2xl">Deliverables</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink">
            {current.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {current.process.map((phase, index) => (
          <article key={phase.step} data-reveal className="card p-5">
            <p className="text-xs font-semibold text-[#8b6a2e]">0{index + 1}</p>
            <h4 className="mt-2 font-display text-lg">{phase.step}</h4>
            <p className="mt-1 text-sm text-ink">{phase.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}




