'use client';

import { useMemo, useState } from 'react';

type Deal = {
  year: string;
  transaction: string;
  sector: string;
  dealSize: string;
};

const records: Deal[] = [
  { year: '2026', transaction: 'Tier-1 Bank Bond Placement', sector: 'Banking', dealSize: 'INR 1,100 Cr' },
  { year: '2025', transaction: 'Infrastructure Capital Restructuring', sector: 'Infrastructure', dealSize: 'INR 780 Cr' },
  { year: '2025', transaction: 'SME IPO Assignment', sector: 'Manufacturing', dealSize: 'INR 320 Cr' },
  { year: '2024', transaction: 'Energy PSU Bond Program', sector: 'Energy', dealSize: 'INR 900 Cr' },
  { year: '2024', transaction: 'Logistics Consolidation Deal', sector: 'Infrastructure', dealSize: 'INR 650 Cr' }
];

export default function InvestorTrackRecord() {
  const [year, setYear] = useState('All');

  const filtered = useMemo(() => {
    if (year === 'All') {
      return records;
    }
    return records.filter((record) => record.year === year);
  }, [year]);

  return (
    <section className="section-shell py-12 md:py-16">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="chapter-label">Track Record</p>
          <h2 className="story-title">Execution Table</h2>
        </div>
        <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">
          Filter Year
          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="ml-2 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900"
          >
            <option value="All">All</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </label>
      </div>

      <p className="mb-2 text-xs text-slate-600 md:hidden">Swipe horizontally to view complete transaction details.</p>
      <div className="card overflow-x-auto p-2">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr>
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">Transaction</th>
              <th className="px-4 py-3">Sector</th>
              <th className="px-4 py-3">Deal Size</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((record) => (
              <tr key={`${record.year}-${record.transaction}`} className="border-t border-blue-100">
                <td className="px-4 py-3">{record.year}</td>
                <td className="px-4 py-3">{record.transaction}</td>
                <td className="px-4 py-3">{record.sector}</td>
                <td className="px-4 py-3">{record.dealSize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
