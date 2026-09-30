'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const clients = [
  {
    short: 'Indian Oil',
    name: 'Indian Oil Corporation Limited',
    // Use multiple fallback sources
    imageSrcs: [
      '/images/clients/iocl.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/IOCL_Logo.svg/1200px-IOCL_Logo.svg.png',
    ],
    initials: 'IOC',
    accent: 'from-orange-50 to-blue-50',
    color: '#e87722',
    description: 'Representative client relationship from DFS institutional and debt market execution experience.'
  },
  {
    short: 'NCDC',
    name: 'National Cooperative Development Corporation',
    imageSrcs: [
      '/images/clients/ncdc.png',
      'https://ncdc.in/style/images/ncdc-logo.png',
    ],
    initials: 'NCDC',
    accent: 'from-emerald-50 to-sky-50',
    color: '#1a7a4a',
    description: 'Illustrative of the institution-focused approach DFS follows across advisory and debt securities work.'
  },
  {
    short: 'NHPC',
    name: 'NHPC Limited',
    imageSrcs: [
      '/images/clients/nhpc.png',
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/NHPC_Logo.svg',
    ],
    initials: 'NHPC',
    accent: 'from-blue-50 to-cyan-50',
    color: '#005baa',
    description: 'Part of the broader client network served through compliant, process-led market support.'
  },
  {
    short: 'KRIBHCO',
    name: 'Krishak Bharati Cooperative Limited',
    imageSrcs: [
      '/images/clients/kribhco.png',
      'https://www.kribhco.net/images/logo.png',
    ],
    initials: 'KRIBHCO',
    accent: 'from-indigo-50 to-teal-50',
    color: '#2d6a2d',
    description: 'Reflects DFS experience supporting organizations with disciplined financial market execution.'
  },
  {
    short: 'CCI',
    name: 'Cement Corporation of India Limited',
    imageSrcs: [
      '/images/clients/cci.png',
      'https://www.cciltd.in/style/images/cci-logo.png',
    ],
    initials: 'CCI',
    accent: 'from-orange-50 to-blue-50',
    color: '#c0392b',
    description: 'Shows the breadth of DFS relationships across corporates, institutions, and debt market participants.'
  }
];

// ── ClientLogo ────────────────────────────────────────────────────────────────
// Tries each src in order. If all fail, renders a styled initials fallback.
function ClientLogo({ srcs, name, initials, color }: {
  srcs: string[];
  name: string;
  initials: string;
  color: string;
}) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  // Reset when the client changes (srcs array reference changes)
  useEffect(() => {
    setSrcIndex(0);
    setFailed(false);
  }, [srcs]);

  const handleError = () => {
    if (srcIndex + 1 < srcs.length) {
      setSrcIndex((i) => i + 1);
    } else {
      setFailed(true);
    }
  };

  if (failed || srcs.length === 0) {
    // Styled initials fallback — always looks intentional
    return (
      <div
        className="relative z-10 flex flex-col items-center justify-center gap-4"
        aria-label={name}
      >
        <div
          className="flex h-28 w-28 items-center justify-center rounded-3xl shadow-2xl text-white font-black text-2xl tracking-tight"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <p className="text-center text-base font-semibold text-[#10284a] max-w-[260px] leading-snug">
          {name}
        </p>
      </div>
    );
  }

  return (
    <img
      key={srcs[srcIndex]}           // forces re-mount on src change
      src={srcs[srcIndex]}
      alt={name}
      onError={handleError}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className="relative z-10 max-h-[200px] max-w-[280px] w-full object-contain drop-shadow-xl"
    />
  );
}

export default function ClientsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % clients.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const activeClient = clients[activeIndex];

  return (
    <section id="clients-slider" className="w-full bg-[#fdfaf5] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8b6a2e] font-bold uppercase tracking-[0.2em] text-xs mb-3"
            >
              Client Network
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-semibold text-[#10284a] tracking-tight"
            >
              Trusted Relationships. <br />
              <span className="text-[#a88a4d]">Proven Expertise.</span>
            </motion.h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
                className="p-3 rounded-full border border-[#eadcc1] bg-white text-[#10284a] hover:bg-[#10284a] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Previous client"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
                className="p-3 rounded-full border border-[#eadcc1] bg-white text-[#10284a] hover:bg-[#10284a] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Next client"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="hidden sm:block h-10 w-[1px] bg-[#eadcc1] mx-2" />
            <div className="text-sm font-mono text-[#8b6a2e] font-medium">
              {String(activeIndex + 1).padStart(2, '0')} / {String(clients.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative h-[520px] md:h-[460px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8"
            >
              {/* Visual Card */}
              <div
                className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${activeClient.accent} border border-white/50 shadow-2xl flex items-center justify-center p-12`}
              >
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10284a_1px,transparent_1px)] [background-size:20px_20px]" />
                <ClientLogo
                  srcs={activeClient.imageSrcs}
                  name={activeClient.name}
                  initials={activeClient.initials}
                  color={activeClient.color}
                />
              </div>

              {/* Content Card */}
              <div className="flex flex-col justify-center gap-6 p-4 lg:p-0">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex px-3 py-1 rounded-full bg-[#10284a]/5 text-[#10284a] text-[10px] font-bold uppercase tracking-widest mb-4"
                  >
                    Featured Identity
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-display font-bold text-[#10284a] mb-2 leading-tight"
                  >
                    {activeClient.short}
                  </motion.h3>
                  <p className="text-lg text-[#8b6a2e] font-medium leading-snug">{activeClient.name}</p>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#556274] leading-relaxed text-base"
                >
                  {activeClient.description}
                </motion.p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-[#10284a] text-white text-sm font-semibold hover:bg-[#163765] transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    Case Study
                    <ExternalLink size={14} />
                  </a>
                  <button className="px-6 py-3 rounded-full border border-[#eadcc1] text-[#10284a] text-sm font-semibold hover:bg-[#eadcc1]/20 transition-colors">
                    Partnership Details
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 h-1 w-full bg-[#eadcc1]/30 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${((activeIndex + 1) / clients.length) * 100}%` }}
            className="h-full bg-[#10284a]"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {clients.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
                setIsAutoPlaying(false);
              }}
              className={`h-2 transition-all duration-500 rounded-full ${
                idx === activeIndex ? 'w-8 bg-[#10284a]' : 'w-2 bg-[#eadcc1] hover:bg-[#a88a4d]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}