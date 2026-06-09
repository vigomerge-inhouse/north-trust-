import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import neatHomeImg from "../../imports/hero/hg1.jpg";
import guestBathImg from "../../imports/hero/hg2.jpg";
import livingRoomImg from "../../imports/hero/hg3.jpg";
import homeCookingImg from "../../imports/hero/hg4.jpg";
import countrylivingImg from "../../imports/hero/countryliving.jpg";
import livingrmkit from "../../imports/hero/livingrmkit.jpg";


//import washingtonLakeImg from "../../imports/overview/washington_lake.jpg";
import homw90 from "../../imports/overview/homw90.jpg";

const GALLERY_IMAGES = [
  {
    url: countrylivingImg,
    label: "Exceptional Country Living",
  },
  {
    url: neatHomeImg,
    label: "Brand New Kitchen",
  },
  {
    url: livingrmkit,
    label: "Modern Living & Dining",
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
    <section id="overview" className="py-24 px-6 md:px-16" style={{background:"linear-gradient(135deg, #e8d08a, #f0e0a0, #d4b96a)"}}>
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <FadeIn className="mb-16">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-12" style={{background:"#3d2800"}} />
          <span
  className="tracking-widest uppercase font-bold"
  style={{
    color:"#000000",
    fontSize:"1.1rem",
    textShadow:"0 1px 3px rgba(255,255,255,0.4)"
  }}
>Norway, Maine · Est. 1797</span>
        </div>
       <svg width="340" height="180" viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  {/* Mountains/hills background */}
  <path d="M0,120 Q40,80 80,100 Q120,60 160,90 Q200,55 240,85 Q280,70 340,100 L340,180 L0,180 Z" fill="rgba(61,40,0,0.08)"/>
  <path d="M0,130 Q50,100 100,115 Q150,90 200,110 Q250,95 300,112 L340,110 L340,180 L0,180 Z" fill="rgba(61,40,0,0.06)"/>

  {/* Sun */}
  <circle cx="290" cy="35" r="18" stroke="#3d2800" strokeWidth="1" fill="rgba(61,40,0,0.07)"/>
  <line x1="290" y1="10" x2="290" y2="4" stroke="#3d2800" strokeWidth="1" strokeLinecap="round"/>
  <line x1="290" y1="60" x2="290" y2="66" stroke="#3d2800" strokeWidth="1" strokeLinecap="round"/>
  <line x1="265" y1="35" x2="259" y2="35" stroke="#3d2800" strokeWidth="1" strokeLinecap="round"/>
  <line x1="315" y1="35" x2="321" y2="35" stroke="#3d2800" strokeWidth="1" strokeLinecap="round"/>
  <line x1="273" y1="18" x2="268" y2="13" stroke="#3d2800" strokeWidth="1" strokeLinecap="round"/>
  <line x1="307" y1="52" x2="312" y2="57" stroke="#3d2800" strokeWidth="1" strokeLinecap="round"/>
  <line x1="307" y1="18" x2="312" y2="13" stroke="#3d2800" strokeWidth="1" strokeLinecap="round"/>
  <line x1="273" y1="52" x2="268" y2="57" stroke="#3d2800" strokeWidth="1" strokeLinecap="round"/>

  {/* Birds */}
  <path d="M40,30 Q44,26 48,30" stroke="#3d2800" strokeWidth="1" fill="none" strokeLinecap="round"/>
  <path d="M52,22 Q56,18 60,22" stroke="#3d2800" strokeWidth="1" fill="none" strokeLinecap="round"/>
  <path d="M28,42 Q31,39 34,42" stroke="#3d2800" strokeWidth="0.8" fill="none" strokeLinecap="round"/>

  {/* Left pine tree */}
  <polygon points="18,95 30,50 42,95" fill="rgba(61,40,0,0.12)" stroke="#3d2800" strokeWidth="1.2" strokeLinejoin="round"/>
  <polygon points="14,110 30,72 46,110" fill="rgba(61,40,0,0.1)" stroke="#3d2800" strokeWidth="1.2" strokeLinejoin="round"/>
  <polygon points="10,128 30,95 50,128" fill="rgba(61,40,0,0.08)" stroke="#3d2800" strokeWidth="1.2" strokeLinejoin="round"/>
  <rect x="27" y="128" width="6" height="10" fill="rgba(61,40,0,0.15)" stroke="#3d2800" strokeWidth="1"/>

  {/* Right deciduous tree */}
  <circle cx="310" cy="75" r="24" fill="rgba(61,40,0,0.08)" stroke="#3d2800" strokeWidth="1.2"/>
  <circle cx="298" cy="85" r="16" fill="rgba(61,40,0,0.07)" stroke="#3d2800" strokeWidth="1"/>
  <circle cx="322" cy="82" r="18" fill="rgba(61,40,0,0.07)" stroke="#3d2800" strokeWidth="1"/>
  <line x1="310" y1="99" x2="310" y2="134" stroke="#3d2800" strokeWidth="1.4"/>

  {/* Chimney */}
  <rect x="182" y="48" width="10" height="20" fill="rgba(61,40,0,0.12)" stroke="#3d2800" strokeWidth="1.3"/>
  <line x1="179" y1="48" x2="195" y2="48" stroke="#3d2800" strokeWidth="2"/>
  {/* Smoke */}
  <path d="M185,44 Q183,38 186,32 Q189,26 187,20" stroke="#3d2800" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeDasharray="2,3"/>

  {/* Main roof filled */}
  <polygon points="75,90 170,32 265,90" fill="rgba(61,40,0,0.14)" stroke="#3d2800" strokeWidth="2" strokeLinejoin="round"/>
  {/* Roof hatch lines */}
  <line x1="100" y1="86" x2="122" y2="57" stroke="#3d2800" strokeWidth="0.5" opacity="0.4"/>
  <line x1="120" y1="90" x2="148" y2="52" stroke="#3d2800" strokeWidth="0.5" opacity="0.4"/>
  <line x1="140" y1="90" x2="163" y2="58" stroke="#3d2800" strokeWidth="0.5" opacity="0.4"/>
  <line x1="160" y1="90" x2="178" y2="66" stroke="#3d2800" strokeWidth="0.5" opacity="0.4"/>
  <line x1="180" y1="90" x2="192" y2="74" stroke="#3d2800" strokeWidth="0.5" opacity="0.4"/>
  <line x1="220" y1="90" x2="200" y2="64" stroke="#3d2800" strokeWidth="0.5" opacity="0.4"/>
  <line x1="240" y1="90" x2="214" y2="56" stroke="#3d2800" strokeWidth="0.5" opacity="0.4"/>

  {/* Left wing roof filled */}
  <polygon points="58,100 115,74 172,100" fill="rgba(61,40,0,0.11)" stroke="#3d2800" strokeWidth="1.6" strokeLinejoin="round"/>

  {/* Right wing roof filled */}
  <polygon points="168,100 225,74 282,100" fill="rgba(61,40,0,0.11)" stroke="#3d2800" strokeWidth="1.6" strokeLinejoin="round"/>

  {/* Main body */}
  <rect x="75" y="90" width="190" height="48" fill="rgba(61,40,0,0.05)" stroke="#3d2800" strokeWidth="2"/>
  {/* Left wing */}
  <rect x="58" y="100" width="114" height="38" fill="rgba(61,40,0,0.04)" stroke="#3d2800" strokeWidth="1.6"/>
  {/* Right wing */}
  <rect x="168" y="100" width="114" height="38" fill="rgba(61,40,0,0.04)" stroke="#3d2800" strokeWidth="1.6"/>

  {/* Center arched door */}
  <rect x="153" y="112" width="34" height="26" fill="rgba(61,40,0,0.08)" stroke="#3d2800" strokeWidth="1.4"/>
  <path d="M153,112 Q170,98 187,112" fill="rgba(61,40,0,0.1)" stroke="#3d2800" strokeWidth="1.4"/>
  <circle cx="184" cy="125" r="1.5" fill="#3d2800"/>

  {/* Oval window */}
  <ellipse cx="170" cy="100" rx="10" ry="6" fill="rgba(61,40,0,0.08)" stroke="#3d2800" strokeWidth="1.2"/>

  {/* Left windows x2 */}
  <rect x="68" y="108" width="26" height="22" fill="rgba(61,40,0,0.06)" stroke="#3d2800" strokeWidth="1.3"/>
  <path d="M68,108 Q81,97 94,108" fill="rgba(61,40,0,0.08)" stroke="#3d2800" strokeWidth="1.2"/>
  <line x1="81" y1="108" x2="81" y2="130" stroke="#3d2800" strokeWidth="0.8"/>
  <line x1="68" y1="119" x2="94" y2="119" stroke="#3d2800" strokeWidth="0.8"/>

  <rect x="104" y="108" width="26" height="22" fill="rgba(61,40,0,0.06)" stroke="#3d2800" strokeWidth="1.3"/>
  <path d="M104,108 Q117,97 130,108" fill="rgba(61,40,0,0.08)" stroke="#3d2800" strokeWidth="1.2"/>
  <line x1="117" y1="108" x2="117" y2="130" stroke="#3d2800" strokeWidth="0.8"/>
  <line x1="104" y1="119" x2="130" y2="119" stroke="#3d2800" strokeWidth="0.8"/>

  {/* Right windows x2 */}
  <rect x="210" y="108" width="26" height="22" fill="rgba(61,40,0,0.06)" stroke="#3d2800" strokeWidth="1.3"/>
  <path d="M210,108 Q223,97 236,108" fill="rgba(61,40,0,0.08)" stroke="#3d2800" strokeWidth="1.2"/>
  <line x1="223" y1="108" x2="223" y2="130" stroke="#3d2800" strokeWidth="0.8"/>
  <line x1="210" y1="119" x2="236" y2="119" stroke="#3d2800" strokeWidth="0.8"/>

  <rect x="246" y="108" width="26" height="22" fill="rgba(61,40,0,0.06)" stroke="#3d2800" strokeWidth="1.3"/>
  <path d="M246,108 Q259,97 272,108" fill="rgba(61,40,0,0.08)" stroke="#3d2800" strokeWidth="1.2"/>
  <line x1="259" y1="108" x2="259" y2="130" stroke="#3d2800" strokeWidth="0.8"/>
  <line x1="246" y1="119" x2="272" y2="119" stroke="#3d2800" strokeWidth="0.8"/>

  {/* Stone base */}
  <rect x="58" y="134" width="224" height="8" fill="rgba(61,40,0,0.1)" stroke="#3d2800" strokeWidth="1"/>
  <line x1="80" y1="134" x2="80" y2="142" stroke="#3d2800" strokeWidth="0.6"/>
  <line x1="110" y1="134" x2="110" y2="142" stroke="#3d2800" strokeWidth="0.6"/>
  <line x1="145" y1="134" x2="145" y2="142" stroke="#3d2800" strokeWidth="0.6"/>
  <line x1="175" y1="134" x2="175" y2="142" stroke="#3d2800" strokeWidth="0.6"/>
  <line x1="210" y1="134" x2="210" y2="142" stroke="#3d2800" strokeWidth="0.6"/>
  <line x1="245" y1="134" x2="245" y2="142" stroke="#3d2800" strokeWidth="0.6"/>

  {/* Ground / lawn */}
  <path d="M0,142 Q85,136 170,142 Q255,148 340,142 L340,155 L0,155 Z" fill="rgba(61,40,0,0.07)" stroke="#3d2800" strokeWidth="0.8"/>

  {/* Driveway */}
  <path d="M145,142 Q155,155 140,170 M195,142 Q185,155 200,170" stroke="#3d2800" strokeWidth="0.8" strokeDasharray="3,3"/>
</svg>
  
      </div>
   <h2
  className="mb-6"
  style={{
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontFamily: "Georgia, serif",
    lineHeight: 1.1,
    color: "#000000",
    fontWeight: 800,
    textShadow: "0 2px 8px rgba(255,255,255,0.3)"
  }}
>
        Timeless charm,<br />
        <span style={{ color: "#2b1600" }}>completely reimagined</span>
      </h2>
      <p className="max-w-2xl leading-relaxed" style={{color:"#1f1f1f"}}>
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
            <div key={h} className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors" style={{background:"rgba(255,255,255,0.35)", border:"1px solid rgba(255,255,255,0.5)"}}>
              <Check size={14} style={{color:"#3d2800"}} className="flex-shrink-0" />
              <span className="text-sm font-medium" style={{color:"#1a0f00"}}>{h}</span>
            </div>
          ))}
        </div>
        <Link
          to="/features"
          className="mt-6 flex items-center gap-2 text-sm hover:gap-4 transition-all group"
          style={{color:"#3d2800"}}
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
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
              onClick={() => setLightbox(i)}
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>

    {/* CTA */}
    <FadeIn delay={0.3} className="mt-16 text-center">
      <p className="mb-4 font-medium" style={{color:"rgba(30,15,0,0.7)"}}>Ready to see it in person?</p>
      <button
        onClick={onSchedule}
        className="px-10 py-4 rounded-full font-semibold tracking-wide hover:scale-105 transition-all duration-300"
        style={{background:"#3d2800", color:"#f5e6c0", boxShadow:"0 8px 30px rgba(61,40,0,0.4)"}}
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