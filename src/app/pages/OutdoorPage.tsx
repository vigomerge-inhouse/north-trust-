import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MapPin,
  Star,
  TreePine,
  Snowflake,
  Sun,
  Leaf,
  Flower2,
  Dog,
} from "lucide-react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

// ── HERO SLIDES ──────────────────────────────────────────────
import heroMain   from "../../imports/outdoor/fhero2.jpg";
import heroLiving from "../../imports/outdoor/LIVING_IMG2.jpg";
import heroExt1   from "../../imports/outdoor/stonetree-11.jpg";
import heroExt2   from "../../imports/outdoor/stonetree-12.jpg";
// ── END HERO ─────────────────────────────────────────────────

// ── GALLERY / CONTENT IMAGES ─────────────────────────────────
import g1  from "../../imports/outdoor/stonetree-5.jpg";
import g2  from "../../imports/outdoor/stonetree-6.jpg";
import g3  from "../../imports/outdoor/stonetree-13.jpg";
import g4  from "../../imports/outdoor/stonetree-48.jpg";
import g5  from "../../imports/outdoor/stonetree-59.jpg";
import g6  from "../../imports/outdoor/stonetree-61.jpg";
import g7  from "../../imports/outdoor/stonetree-63.jpg";
import g8  from "../../imports/outdoor/stonetree-64.jpg";
// ── END GALLERY ───────────────────────────────────────────────

/* ─────────────────────────────────────────
   SLIDES  (hero only)
───────────────────────────────────────── */
const SLIDES = [
  {
    url: heroMain,
    label: "Private Grounds",
    sub: "Two Secluded Acres · Wrap-Around Porch · Spacious Deck",
    tag: "Outdoor Living",
    position: "object-center",
  },
  {
    url: heroLiving,
    label: "Open Living",
    sub: "Gleaming New Floors · Abundant Natural Light",
    tag: "Interior",
    position: "object-center",
  },
  {
    url: heroExt1,
    label: "Exterior Views",
    sub: "Seclusion · Wildlife · Peace",
    tag: "Grounds",
    position: "object-center",
  },
  {
    url: heroExt2,
    label: "Natural Beauty",
    sub: "Four Seasons of Beauty · Nature at Your Door",
    tag: "Surroundings",
    position: "object-center",
  },
];
const SEASONS = [
  {
    icon: Flower2,
    season: "Spring",
    color: "#7dd87f",
    desc: "Watch the property bloom with wildflowers, birdsong returns, and the woods fill with fresh green life. Ideal for starting your garden on the private 2-acre lot.",
  },
  {
    icon: Sun,
    season: "Summer",
    color: "#f9c74f",
    desc: "Relax on the wrap-around porch, entertain on the deck, and take a short 2-mile drive to North Pond or Norway Lake for boating, swimming, and paddling.",
  },
  {
    icon: Leaf,
    season: "Autumn",
    color: "#f4845f",
    desc: "Maine's legendary foliage transforms the private woods into a palette of reds, oranges, and golds. The Oxford Hills region is renowned for spectacular fall color.",
  },
  {
    icon: Snowflake,
    season: "Winter",
    color: "#90caf9",
    desc: "Snow-covered acreage becomes a peaceful winter wonderland. Snowplowing is landlord-provided. Maine's premier ski resorts are just 45 minutes away.",
  },
];

const OUTDOOR_PERKS = [
  { label: "Wrap-around porch", desc: "Classic Maine porch living — morning coffee to evening sunset" },
  { label: "Spacious entertainment deck", desc: "Large deck for outdoor dining and gathering" },
  { label: "Mature trees & open space", desc: "Established tree canopy plus open green lawn areas" },
  { label: "Landlord yard maintenance", desc: "Professional lawn care provided year-round" },
  { label: "Winter snowplowing included", desc: "Driveway and access routes maintained all season" },
  { label: "Dog-friendly perimeter fence", desc: "Planned installation — safe secure pet space" },
  { label: "Wildlife watching", desc: "Deer, birds, and Maine wildlife visit regularly" },
  { label: "Stargazing", desc: "Dark sky — brilliant night sky viewing from the deck" },
  { label: "Garden potential", desc: "Fertile land ready for vegetable or flower gardens" },
  { label: "Walking trails possible", desc: "Create private nature trails through your wooded acres" },
];

const GALLERY = [
  { url: g1, label: "Property Exterior" },
  { url: g2, label: "Grounds" },
  { url: g3, label: "Barn & Garage" },
  { url: g4, label: "Storage" },
  { url: g5, label: "Outbuilding" },
  { url: g6, label: "Interior Access" },
  { url: g7, label: "Outdoor Space" },
  { url: g8, label: "Natural Views" },
];


interface OutdoorPageProps {
  onSchedule: () => void;
}

export function OutdoorPage({ onSchedule }: OutdoorPageProps) {
  return (
    <div className="min-h-screen bg-[#0b1a2e]">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: "100vh", width: "100%" }}>

        <img src={g1} alt="Wrap-Around Porch" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2e]/50 via-[#0b1a2e]/20 to-[#0b1a2e]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e]/60 to-transparent" />
        <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-4 text-xs tracking-widest uppercase">
            <Link to="/" className="text-[#c9a96e]/70 hover:text-[#c9a96e] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-white/30" />
            <span className="text-[#c9a96e]">Outdoor</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Outdoor Living</span>
          </div>
          <h1
            className="text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.1 }}
          >
            Two private acres,<br />
            <span style={{ color: "#c9a96e" }}>yours to enjoy</span>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-white/65 leading-relaxed text-lg">
              True seclusion on two private acres with a charming wrap-around porch and spacious deck. Whether watching
              wildlife, stargazing, or simply breathing in the fresh Maine air, this private oasis celebrates every
              season of the year.
            </p>
            <p className="text-white/50 leading-relaxed mt-4">
              The landlord maintains the yard, provides professional winter snowplowing, and will install a dog-friendly
              perimeter fence. The property's generous acreage offers countless possibilities — create flower gardens,
              walking trails, gathering spaces, or natural meadows. The landlord welcomes collaboration to help maintain
              and enhance the property's natural beauty.
            </p>
            <div className="mt-6 p-4 border-l-2 border-[#c9a96e] pl-5 bg-[#c9a96e]/5 rounded-r-xl">
              <p className="text-white/60 text-sm italic">
                "Create gardens, trails, or meadows that enhance the natural beauty. Mature trees and open space invite
                wildlife and seasonal color — the landlord supports your vision to keep this outdoor oasis flourishing
                year-round."
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="flex items-center gap-2 mb-4">
              <TreePine size={15} className="text-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Outdoor Amenities</span>
            </div>
            <div className="space-y-3">
              {OUTDOOR_PERKS.map((p) => (
                <div key={p.label} className="flex items-start gap-3 border-b border-white/6 pb-3 last:border-0 last:pb-0">
                  <Check size={13} className="text-[#c9a96e] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white/80 text-sm font-medium">{p.label}</div>
                    <div className="text-white/40 text-xs mt-0.5">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Seasons */}
      <section className="bg-[#060f1d] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Four Seasons of Beauty</span>
            </div>
            <h2 className="text-white text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Maine's finest seasons at your door
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SEASONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.season}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/4 border border-white/10 rounded-2xl p-6 hover:border-[#c9a96e]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ background: `${s.color}18`, border: `1px solid ${s.color}35` }}>
                    <Icon size={22} style={{ color: s.color }} />
                  </div>
                  <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{s.season}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dog Friendly Callout */}
      <section className="py-14 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-[#0f2137] to-[#0b1a2e] border border-[#c9a96e]/20 rounded-3xl p-8 md:p-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#c9a96e]/15 border border-[#c9a96e]/30 flex items-center justify-center flex-shrink-0">
              <Dog size={30} className="text-[#c9a96e]" />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Dog Friendly Property</h3>
              <p className="text-white/55 leading-relaxed">
                This is a genuinely dog-friendly property. The landlord plans to install a perimeter fence to create a
                safe, secure space for your dog. With 2 private wooded acres, your dog will have space to roam, explore,
                and thrive in a true Maine country setting. If you have a dog, this is the property for you.
              </p>
            </div>
            <button
              onClick={onSchedule}
              className="flex-shrink-0 bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-7 py-3 rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-[#c9a96e]/25 hover:scale-105 transition-all duration-300"
            >
              Schedule Showing
            </button>
          </motion.div>
        </div>
      </section>

      {/* Outdoor Gallery */}
      <section className="py-6 px-6 md:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Outdoor Gallery · All Seasons</span>
            </div>
          </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{
  height: "220px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
}}
              >
                <img src={img.url} alt={img.label} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-white/50 mb-2">Experience it yourself</p>
          <p className="text-white text-xl mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Schedule a private showing and see why this outdoor retreat is truly one-of-a-kind.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onSchedule}
              className="bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#c9a96e]/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Book a Showing
              <ArrowRight size={16} />
            </button>
            <Link
              to="/location"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/18 transition-all flex items-center gap-2"
            >
              Explore Location
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      <div className="border-t border-[#c9a96e]/10 py-6 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#c9a96e] fill-[#c9a96e]" />)}
        </div>
        <p className="text-white/30 text-xs">RanchRetreat — Norway, Maine · Long-Term Rental · Oxford Hills · Immediately Available</p>
      </div>
    </div>
  );
}
