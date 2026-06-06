import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ChevronRight, Star, Home } from "lucide-react";
// ── HERO SLIDE IMAGES ────────────────────────────────
import h1Img from "../../imports/details/fhero2.jpg";
import h2Img from "../../imports/details/LIVING_IMG2.jpg";
import h3Img from "../../imports/details/Living_room_access_to_the_kitchen.jpg";
import h4Img from "../../imports/details/Giant_master_bedroom__walk-in_closet-1.jpg";
import h5Img from "../../imports/details/Private_Forest.jpg";
// ── END HERO SLIDE IMAGES ────────────────────────────────────

// ── GALLERY IMAGES ─────────────────────────────────
import hg1Img from "../../imports/details/stonetree-5.jpg";
import hg2Img from "../../imports/details/stonetree-6.jpg";
import hg3Img from "../../imports/details/stonetree-11.jpg";
import hg4Img from "../../imports/details/stonetree-12.jpg";
// ── END GALLERY IMAGES ───────────────────────────────────────
const SPECS = [
  { group: "Property", rows: [
    { label: "Property type", value: "Masterfully renovated ranch — single story" },
    { label: "Bedrooms", value: "3 Bedrooms (1 king primary + 2 queen guest)" },
    { label: "Bathrooms", value: "2 Full Baths" },
    { label: "Garage", value: "Two-car detached with ample storage" },
    { label: "Lot size", value: "Private 2-acre parcel" },
    { label: "Basement", value: "Partially finished full basement" },
    { label: "Style", value: "Ranch — single story, open-concept living" },
  ]},
  { group: "Interior", rows: [
    { label: "Kitchen", value: "High-end stainless appliances, spacious island, quartz countertops" },
    { label: "Primary suite", value: "King-sized with walk-in closet; cast iron soaking tub & ceramic marble shower" },
    { label: "Guest bedrooms", value: "Two spacious queen-sized rooms with generous closets" },
    { label: "Flooring", value: "Brand-new throughout entire home" },
    { label: "Living & dining", value: "Open-concept, abundant windows, private acreage views" },
    { label: "Laundry", value: "Dedicated laundry room with pantry storage" },
    { label: "Finishes", value: "Designer lighting, contemporary fixtures, fresh neutral palette" },
  ]},
  { group: "Utilities & Systems", rows: [
    { label: "Water", value: "Recently tested drilled well — provided by landlord" },
    { label: "Electricity", value: "Tenant responsibility — easily activated" },
    { label: "Heating", value: "Tenant responsibility — easily activated" },
    { label: "Internet", value: "Tenant responsibility — easily activated" },
    { label: "Trash", value: "Municipal services available" },
  ]},
  { group: "Outdoor & Grounds", rows: [
    { label: "Porch", value: "Wrap-around porch — full perimeter access" },
    { label: "Deck", value: "Spacious entertainment deck" },
    { label: "Private land", value: "2 full acres — mature trees, open green space" },
    { label: "Yard maintenance", value: "Landlord-maintained year-round" },
    { label: "Snowplowing", value: "Winter snowplowing included — landlord provided" },
    { label: "Dog fence", value: "Dog-friendly perimeter fence planned for installation" },
    { label: "Wildlife", value: "Active wildlife — deer, birds, Maine forest fauna" },
  ]},
  { group: "Location & Access", rows: [
    { label: "Road access", value: "300 ft from Crockett Ridge Road" },
    { label: "Water access", value: "Norway Lake & North Pond — 2 miles (public boat ramps)" },
    { label: "Nearest town", value: "Norway, Maine (est. 1797) — 10 minutes" },
    { label: "Portland", value: "1 hour" },
    { label: "Boston", value: "3 hours" },
    { label: "Ski areas & Golf", value: "45 minutes (Sunday River, Shawnee Peak)" },
    { label: "Oxford Hills region", value: "Hiking, canoeing, fishing, mountain biking nearby" },
  ]},
  { group: "Rental Terms", rows: [
    { label: "Availability", value: "Immediately available — move-in ready" },
    { label: "Rental type", value: "Long-term rental" },
    { label: "Pets", value: "Dog-friendly · perimeter fence planned" },
    { label: "Landlord support", value: "Amenable to working with you to make this your home" },
    { label: "Lease", value: "Contact for terms and pricing details" },
  ]},
];
const SLIDES = [
  {
    url: h1Img,
    label: "Exceptional Country Living",
    sub: "Turnkey · Move-in Ready · Immediately Available",
    tag: "Property",
    position: "object-center",
  },
  {
    url: h2Img,
    label: "Open Living & Dining",
    sub: "Gleaming New Floors · Abundant Natural Light",
    tag: "Interior",
    position: "object-center",
  },
  {
    url: h3Img,
    label: "Living Room Access",
    sub: "Open Concept · Flow · Natural Light",
    tag: "Interior",
    position: "object-center",
  },
  {
    url: h4Img,
    label: "King-Size Primary Suite",
    sub: "Walk-In Closet · Spa-Like Ensuite Bath",
    tag: "Master Suite",
    position: "object-center",
  },
  {
    url: h5Img,
    label: "Your Private Forest",
    sub: "Seclusion · Wildlife · Peace",
    tag: "Grounds",
    position: "object-center",
  },
];

const ALL_PHOTOS = [
  { url: hg1Img, label: "Property View",  wide: false },
  { url: hg2Img, label: "Interior",       wide: false },
  { url: hg3Img, label: "Garage",         wide: false },
  { url: hg4Img, label: "Grounds",        wide: false },
];

interface DetailsPageProps {
  onSchedule: () => void;
}

export function DetailsPage({ onSchedule }: DetailsPageProps) {
  return (
    <div className="min-h-screen bg-[#0b1a2e]">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: "100vh", width: "100%" }}>

        <img src={h1Img} alt="Property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2e]/50 via-[#0b1a2e]/25 to-[#0b1a2e]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e]/60 to-transparent" />
        <div className="absolute bottom-10 left-8 md:left-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-4 text-xs tracking-widest uppercase">
            <Link to="/" className="text-[#c9a96e]/70 hover:text-[#c9a96e] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-white/30" />
            <span className="text-[#c9a96e]">Details</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Property Details · Full Specifications</span>
          </div>
          <h1
            className="text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.1 }}
          >
            Complete<br />
            <span style={{ color: "#c9a96e" }}>Property Specifications</span>
          </h1>
        </div>
      </div>

      {/* Specs */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="space-y-10">
          {SPECS.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-[#c9a96e]" />
                <h3 className="text-[#c9a96e] text-xs tracking-widest uppercase font-semibold">{group.group}</h3>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/8" style={{ boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }}>
                {group.rows.map((row, ri) => (
                  <div
                    key={row.label}
                    className={`flex flex-col sm:flex-row gap-1 sm:gap-6 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-[#c9a96e]/4 transition-colors ${ri % 2 === 0 ? "bg-white/2" : ""}`}
                  >
                    <div className="text-[#c9a96e]/75 text-sm sm:w-52 flex-shrink-0">{row.label}</div>
                    <div className="text-white/75 text-sm">{row.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Gallery */}
      <section className="px-6 md:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-widest uppercase">All Photos · Complete Property Gallery</span>
            </div>
            <p className="text-white/40 text-sm">{ALL_PHOTOS.length} photos — interior, exterior & grounds</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {ALL_PHOTOS.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${photo.wide ? "col-span-2 row-span-2" : ""}`}
                style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
              >
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium">{photo.label}</span>
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
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center border border-[#c9a96e]/20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f2137, #0b1a2e)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#c9a96e] blur-[100px]" />
          </div>
          <div className="relative z-10">
            <Home size={28} className="text-[#c9a96e] mx-auto mb-4" />
            <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-3">Don't miss this renovated ranch gem</p>
            <h3 className="text-white text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              A rare opportunity — move-in ready, immediately available.
            </h3>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Landlord is amenable to working with you to make this house your home. Schedule your private showing today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={onSchedule}
                className="bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#c9a96e]/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Schedule Your Private Showing
                <ArrowRight size={18} />
              </button>
              <Link
                to="/"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/18 transition-all"
              >
                Back to Overview
              </Link>
            </div>
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
