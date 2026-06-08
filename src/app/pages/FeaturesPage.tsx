import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MapPin,
  Star,
  Check,
  ArrowRight,
  Home,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

// ── HERO SLIDES (only 2) ─────────────────────────────────────
import heroOutdoor from "../../imports/features/OUTDOOR-HS.jpg";
import heroPorch   from "../../imports/features/GA-Wrap-around-porch.jpg";
// ── END HERO ─────────────────────────────────────────────────

// ── FEATURE IMAGES ───────────────────────────────────────────
import imgKitchen1  from "../../imports/features/FE-KI.jpg";
import imgKitchen2  from "../../imports/features/FE-KI-02.jpg";
import imgPrimary1  from "../../imports/features/PRIMARY-SUITE.jpg";
import imgPrimary2  from "../../imports/features/PRIMARY-SUITE-BA.jpg";
import imgGuest1    from "../../imports/features/Guest-Room-1-II-1.jpg";
import imgGuest2    from "../../imports/features/Guest-Room-II-1.jpg";
import imgGuest3    from "../../imports/features/Guest-room-II.jpg";
import imgGuestBath from "../../imports/features/Guest-Bathroom-1.jpg";
import imgDen       from "../../imports/features/Den-or-Office-Dining-Room.jpg";
import imgStonetree from "../../imports/features/GA-Stonetree-Creative-11.jpg";
import imgPorch     from "../../imports/features/GA-Wrap-around-porch.jpg";
import imgPorch2    from "../../imports/features/GA-Wrap-around-porch-II.jpg";
import imgGarage    from "../../imports/features/Two-car-parking-storage-1.jpg";
import imgOutdoor   from "../../imports/features/OUTDOOR-HS.jpg";
import imgPrivate   from "../../imports/features/private-space.jpeg";
// ── END FEATURE IMAGES ───────────────────────────────────────

const SLIDES = [
  {
    url: heroOutdoor,
    label: "Exceptional Country Living",
    sub: "Turnkey · Move-in Ready · Immediately Available",
    tag: "Property",
    position: "object-center",
  },
  {
    url: heroPorch,
    label: "Wrap-Around Porch",
    sub: "Two Secluded Acres · Landlord Maintained",
    tag: "Outdoor",
    position: "object-center",
  },
];

const FEATURES = [
  {
    num: "01",
    title: "Modern Gourmet Kitchen",
    subtitle: "Heart of the home",
    img: imgKitchen1,
    img2: imgKitchen2,
    desc: "Sleek kitchen with high-end stainless appliances, spacious island, and abundant storage. Large windows overlook the private yard and wrap-around porch — perfect for casual meals and four-season views.",
    bullets: [
      "Brand-new stainless steel appliances",
      "Stunning quartz countertops",
      "Spacious island",
      "Large windows with yard views",
    ],
  },
  {
    num: "02",
    title: "Primary Suite with Spa-Like Bath",
    subtitle: "Private retreat",
    img: imgPrimary1,
    img2: imgPrimary2,
    desc: "Serene owner's oasis sized for a king bed with walk-in closet. Luxurious bath features a cast iron soaking tub and ceramic marble shower, bathed in soft natural light.",
    bullets: [
      "King-size space",
      "Walk-in closet",
      "Cast iron soaking tub",
      "Ceramic marble shower",
    ],
  },
  {
    num: "03",
    title: "Generous Guest Bedrooms & Full Bath",
    subtitle: "Comfort spaces",
    img: imgGuest1,
    img2: imgGuest2,
    desc: "Two spacious guest bedrooms, each sized for a queen bed with generous clean closets. Updated full guest bath with bright, modern finishes.",
    bullets: [
      "Two queen-ready bedrooms",
      "Generous clean closets",
      "Updated full guest bath",
      "Bright modern finishes",
    ],
  },
  {
    num: "04",
    title: "Den, Office & Dining Room",
    subtitle: "Open concept",
    img: imgDen,
    img2: imgGuest3,
    desc: "Open layout with gleaming new floors, fresh neutral palettes, and abundant windows that create clean, bright spaces framing stunning views of your private acreage.",
    bullets: [
      "Open floor plan",
      "Gleaming new floors",
      "Fresh neutral palettes",
      "Abundant natural light",
    ],
  },
  {
    num: "05",
    title: "Guest Bathroom & Private Spaces",
    subtitle: "Fully updated",
    img: imgGuestBath,
    img2: imgPrivate,
    desc: "Modern bathrooms with elegant fixtures and a dedicated separate laundry room pantry for added convenience.",
    bullets: [
      "2 full bathrooms",
      "Elegant new fixtures",
      "Separate laundry room pantry",
      "Clean modern design",
    ],
  },
  {
    num: "06",
    title: "Wrap-Around Porch & Private Grounds",
    subtitle: "Outdoor living",
    img: imgPorch,
    img2: imgPorch2,
    desc: "True seclusion on two private acres with wrap-around porch and spacious deck. Landlord maintains the yard, provides winter snowplowing, and will install a dog-friendly perimeter fence.",
    bullets: [
      "Two fully private acres",
      "Wrap-around porch",
      "Spacious outdoor deck",
      "Dog-friendly perimeter fence",
      "Yard maintenance & snowplowing included",
    ],
  },
  {
    num: "07",
   // title: "Stonetree Creative Grounds",
     title: "Endless Landscaping Possibilities",
    subtitle: "Natural surroundings",
    img: imgStonetree,
    img2: imgOutdoor,
    //desc: "Expansive natural outdoor space with mature trees, open meadows, and full privacy. A rare opportunity for nature lovers and those seeking peaceful country living.",
    desc: "Create gardens, trails, or meadows that enhance the natural beauty. Mature trees and open space invite wildlife and seasonal color while supporting a peaceful outdoor lifestyle.",
    bullets: [
  "Create gardens & meadows",
  "Mature trees & open space",
  "Wildlife & seasonal color",
  "Walking trails potential",
],
  },
  {
    num: "08",
    title: "Two-Car Garage & All-Weather Storage",
    subtitle: "Storage & parking",
    img: imgGarage,
    img2: imgPorch2,
    desc: "Secure two-car garage with generous all-weather storage for tools, hobbies, or seasonal gear. Clean and updated, it complements the modern ranch style.",
    bullets: [
      "2-car parking",
      "Generous all-weather storage",
      "Secure updated structure",
      "Seasonal gear & hobby use",
    ],
  },
];

const ALL_UPGRADES = [
  "Brand-new stainless-steel appliances",
  "Elegant quartz countertops",
  "Designer lighting and fixtures",
  "Beautiful new flooring throughout",
  "Fresh contemporary finishes",
  "Drilled private well (landlord-provided)",
  "Partially finished full basement",
  "Dedicated laundry room & pantry",
  "Detached two-car garage",
  "Wrap-around porch & spacious deck",
  "Professional snow removal included",
  "Dog-friendly perimeter fence planned",
];

interface FeaturesPageProps {
  onSchedule: () => void;
}

export function FeaturesPage({ onSchedule }: FeaturesPageProps) {
  return (
    <div className="min-h-screen bg-[#071322]">
      {/* Page Hero */}
      <div className="relative overflow-hidden" style={{ height: "100vh", width: "100%" }}>

        <img src={imgKitchen1} alt="Modern Kitchen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2e]/60 via-[#0b1a2e]/30 to-[#071322]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e]/60 to-transparent" />

        <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 text-xs tracking-widest uppercase">
            <Link to="/" className="text-[#c9a96e]/70 hover:text-[#c9a96e] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-white/30" />
            <span className="text-[#c9a96e]">Features</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Home Features</span>
          </div>
          <h1
            className="text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.1 }}
          >
            Every detail<br />
            <span style={{ color: "#c9a96e" }}>thoughtfully refreshed</span>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/65 leading-relaxed text-lg">
              Brand-new stainless-steel appliances, stunning quartz countertops, elegant fixtures, and beautiful new
              flooring throughout. Clean, bright spaces with four-season views of your private acreage. This is not
              your average rental — every corner of this home has been masterfully updated.
            </p>
            <p className="text-white/50 leading-relaxed mt-4">
              Designed for comfort and convenience, this beautifully updated ranch offers effortless single-story living
              with bright, open spaces and exceptional functionality. New flooring throughout, fresh neutral finishes,
              and abundant natural light create a warm and inviting atmosphere while showcasing views of the surrounding
              private acreage.
            </p>
          </motion.div>

          {/* Upgrades Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 gap-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Move-In Ready Upgrades</span>
            </div>
            {ALL_UPGRADES.map((item) => (
              <div key={item} className="flex items-center gap-3 py-2 border-b border-white/6 last:border-0">
                <Check size={13} className="text-[#c9a96e] flex-shrink-0" />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-20 space-y-24">
        {FEATURES.map((f, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Images */}
              <div className={`flex flex-col sm:flex-row gap-3 h-auto sm:h-80 ${isEven ? "" : "lg:order-2"}`}>
                <div className="flex-[1.4] relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/50 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#c9a96e] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {f.num}
                  </div>
                </div>
                <div className="flex-[0.9] relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img src={f.img2} alt={`${f.title} detail`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/50 to-transparent" />
                </div>
              </div>

              {/* Text */}
              <div className={isEven ? "" : "lg:order-1"}>
                <div className="text-[#c9a96e]/40 font-bold mb-1" style={{ fontSize: "3.5rem", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>
                  {f.num}
                </div>
                <h2 className="text-white text-2xl md:text-3xl mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {f.title}
                </h2>
                <p className="text-[#c9a96e] text-sm mb-4">{f.subtitle}</p>
                <p className="text-white/60 leading-relaxed mb-6 text-sm">{f.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {f.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <Check size={12} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                      <span className="text-white/65 text-xs">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CTA Banner */}
      <section className="px-6 md:px-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center border border-[#c9a96e]/20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f2137, #0b1a2e)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#c9a96e] blur-[100px]" />
          </div>
          <div className="relative z-10">
            <Home size={28} className="text-[#c9a96e] mx-auto mb-4" />
            <h3 className="text-white text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Love what you see?
            </h3>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">
              This turnkey ranch is move-in ready and immediately available for long-term rental. Schedule your private
              showing today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={onSchedule}
                className="bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#c9a96e]/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Schedule a Showing
                <ArrowRight size={16} />
              </button>
              <Link
                to="/outdoor"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/18 transition-all flex items-center gap-2"
              >
                View Outdoor Living
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Star rating row */}
      <div className="border-t border-[#c9a96e]/10 py-6 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#c9a96e] fill-[#c9a96e]" />)}
        </div>
        <p className="text-white/30 text-xs">Retreat — Norway, Maine · Long-Term Rental · Oxford Hills · Immediately Available</p>
      </div>
    </div>
  );
}
