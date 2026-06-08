import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ChevronDown, MapPin, Star } from "lucide-react";
import { Link } from "react-router";

// ── HERO IMAGE IMPORTS ───────────────────────────────────────
import h5Img from "../../imports/hero/h5.jpg";
import h1Img from "../../imports/hero/h1.jpeg";
import h2Img from "../../imports/hero/h2.jpeg";
import h3Img from "../../imports/hero/h3.jpeg";
import h4Img from "../../imports/hero/h4.jpeg";
//import h5Img from "../../imports/hero/h5.jpg";
// ── END HERO IMAGE IMPORTS ───────────────────────────────────

const SLIDES = [
   {
    url: h5Img,
    label: "Primary Suite with Spa-Like Bath",
    sub: "Walk-In Closet · Spa-Like Ensuite Bath",
    tag: "Master Suite",
    position: "object-bottom",
  },
  {
    url: h1Img,
    label: "Exceptional Country Living",
    sub: "Turnkey · Move-in Ready · Immediately Available",
    tag: "Property",
    position: "object-bottom",
  },
  {
    url: h2Img,
    label: "Your Private Forest",
    sub: "Seclusion · Wildlife · Peace",
    tag: "Grounds",
    position: "object-center",
  },
  {
    url: h3Img,
    label: "Private 2 Acre Yard & Outdoor Living",
    sub: "Wrap-Around Porch · Spacious Deck · Pure Seclusion",
    tag: "Exterior",
    position: "object-center",
  },
  {
    url: h4Img,
    label: "Single-Story Elegance",
    sub: "Gleaming New Floors · Abundant Natural Light",
    tag: "Interior",
    position: "object-bottom",
  },
 
];

const STATS = [
  { value: "1 hr", label: "to Portland" },
  { value: "45 min", label: "Ski & Golf" },
  { value: "3 hrs", label: "to Boston" },
  { value: "2 mi", label: "Boat Ramps" },
];

interface HeroProps {
  onSchedule: () => void;
}

export function Hero({ onSchedule }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <>
      <section className="relative overflow-hidden" style={{ height: "100dvh", width: "100vw" }}>

        {/* Slide Images */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06, x: direction * 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.97, x: -direction * 50 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <img
              src={slide.url}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2e]/55 via-[#0b1a2e]/15 to-[#0b1a2e]/92" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e]/55 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Slide Tag Pill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tag-${current}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute top-20 right-4 md:top-24 md:right-16 z-20"
          >
            <div className="bg-gradient-to-br from-[#c9a96e]/90 to-[#a07840]/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-2xl border border-[#c9a96e]/30 text-right">
              <div className="flex items-center gap-1.5 justify-end mb-0.5">
                <Star size={11} className="text-white fill-white" />
                <span className="text-white text-xs font-semibold tracking-widest uppercase">Available Now</span>
              </div>
              <div className="text-white/80 text-xs">{slide.tag}</div>
              <div className="text-white font-bold text-sm mt-0.5">Norway, Maine</div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-32 px-8 md:px-16 z-20 max-w-5xl">
          <div className="flex items-center gap-2 mb-3 pr-36 md:pr-0">
            <MapPin size={13} className="text-[#c9a96e]" />
           <span className="text-[#c9a96e] text-xs font-bold tracking-widest uppercase" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.9)" }}>
            Long-Term Rental · Norway, Maine · Oxford Hills
          </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <h1
                className="text-white mb-2"
                style={{
                  fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
                  lineHeight: 1.05,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  textShadow: "0 4px 40px rgba(0,0,0,0.5)",
                }}
              >
                Masterfully Renovated<br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #c9a96e, #ffe4a0, #c9a96e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Ranch Retreat
                </span>
              </h1>
              <p className="text-white/65 text-base md:text-lg">{slide.sub}</p>
            </motion.div>
          </AnimatePresence>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            {["3 Bedrooms", "2 Full Baths", "2-Car Garage", "2 Private Acres", "Wrap-Around Porch", "Dog Friendly", "Turnkey", "Move-in Ready"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/features"
              className="group bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:shadow-2xl hover:shadow-[#c9a96e]/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Explore the Property
              <ChevronDown size={15} className="group-hover:translate-y-1 transition-transform" />
            </Link>
            <button
              onClick={onSchedule}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Schedule a Showing
            </button>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-28 right-6 md:right-16 z-20 flex items-center gap-3">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`transition-all duration-300 rounded-full ${i === current ? "w-5 h-1.5 bg-[#c9a96e]" : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <span className="text-white/35 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={14} className="text-white/35" />
        </motion.div>

      </section>

      {/* Stats Bar */}
      <div className="bg-[#0b1a2e]/85 backdrop-blur-xl border-t border-[#c9a96e]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-4 border-r border-[#c9a96e]/10 last:border-0"
            >
              <div className="text-[#c9a96e] font-bold text-xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {stat.value}
              </div>
              <div className="text-white/50 text-xs tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}