import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import neatHomeImg from "../../imports/hero/hg1.jpg";
import guestBathImg from "../../imports/hero/hg2.jpg";
import livingRoomImg from "../../imports/hero/hg3.jpg";
import homeCookingImg from "../../imports/hero/hg4.jpg";
//import washingtonLakeImg from "../../imports/overview/washington_lake.jpg";
import homw90 from "../../imports/overview/homw90.jpg";

const GALLERY_IMAGES = [
  {
    url: neatHomeImg,
    label: "Exceptional Country Living",
  },
  {
    url: homeCookingImg,
    label: "Brand New Kitchen",
  },
  {
    url: livingRoomImg,
    label: "Living Room to Kitchen",
  },
  {
    url: guestBathImg,
    label: "Guest Bathroom",
  },
  //{
    //url: washingtonLakeImg,
    //label: "Nearby Washington Lake",
  //},
  //{
   // url: homw90,
    //label: "Spacious 2-Acre Lot",
  //},
];


const HIGHLIGHTS = [
  "3 Bed / 2 Bath",
  "2-Acre lot",
  "Full basement",
  "Single story",
  "Laundry pantry",
  "Detached garage",
  "Drilled well water",
  "Quartz countertops",
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
   <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
      style={{ position: "relative", zIndex: 10 }}
    >
      {children}
    </motion.div>
  );
}

interface OverviewProps {
  onSchedule: () => void;
}

export function Overview({ onSchedule }: OverviewProps) {
   const [lightbox, setLightbox] = useState<number | null>(null);
  return (
      <>
    <section id="overview" className="bg-[#0b1a2e] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Norway, Maine · Est. 1797</span>
          </div>
          <h2
            className="text-white mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Georgia, serif", lineHeight: 1.1 }}
          >
            Timeless charm,<br />
            <span style={{ color: "#c9a96e" }}>completely reimagined</span>
          </h2>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Discover the perfect blend of timeless ranch charm and contemporary luxury in this masterfully renovated
            single-story home. Minutes from Norway, Maine in the scenic Oxford Hills, with Norway Lake and North Pond's
            public boat ramps just a two-mile drive away. Set on a private 2-acre parcel just 300 feet from
            well-known Crockett Ridge Road.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Highlights */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-[#c9a96e]/40 transition-colors">
                  <Check size={14} className="text-[#c9a96e] flex-shrink-0" />
                  <span className="text-white/80 text-sm">{h}</span>
                </div>
              ))}
            </div>

            <Link
              to="/features"
              className="mt-6 flex items-center gap-2 text-[#c9a96e] text-sm hover:gap-4 transition-all group"
            >
              See All Features
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          {/* Photo Gallery Grid */}
          <FadeIn delay={0.2}>
  <div className="grid grid-cols-2 gap-3 h-[480px]" style={{ position: "relative", zIndex: 10 }}>
              {GALLERY_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.size}`}
                  onClick={() => setLightbox(i)}
                  style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-medium">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="mt-16 text-center">
          <p className="text-white/50 mb-4">Ready to see it in person?</p>
          <button
            onClick={onSchedule}
            className="bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:shadow-2xl hover:shadow-[#c9a96e]/30 hover:scale-105 transition-all duration-300"
          >
            Request a Showing
          </button>
        </FadeIn>
      </div>
   </section>

    {lightbox !== null && (
      <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setLightbox(null)}>
        <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all" onClick={() => setLightbox(null)}>
          <X size={18} />
        </button>
        <button className="absolute left-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}>
          <ChevronLeft size={18} />
        </button>
        <img src={GALLERY_IMAGES[lightbox].url} alt={GALLERY_IMAGES[lightbox].label} className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
        <button className="absolute right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % GALLERY_IMAGES.length); }}>
          <ChevronRight size={18} />
        </button>
        <div className="absolute bottom-6 w-full text-center">
  <div className="text-white/70 text-sm">{GALLERY_IMAGES[lightbox].label}</div>
  <div className="text-[#c9a96e] text-xs tracking-widest uppercase mt-1">Ranch Retreat · Norway, Maine</div>
</div>
      </div>
    )}
  </>
);
}