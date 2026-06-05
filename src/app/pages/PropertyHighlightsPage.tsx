import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Check, Home, MapPin, Trees, Star, Waves } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero } from "../components/PageHero";
import neatImg from "../../imports/PropertyHighlight/Neat_and_clean_home_with_peace-1.jpg";
import neatImg2 from "../../imports/PropertyHighlight/Neat_and_clean_home_with_peace.jpg";
import kitchenImg from "../../imports/PropertyHighlight/Brand_New_Kitchen.jpg";
import masterBedImg from "../../imports/PropertyHighlight/Giant_master_bedroom__walk-in_closet-1.jpg";
import wrapImg from "../../imports/PropertyHighlight/Wrap-around_porch.jpg";
import forestImg from "../../imports/PropertyHighlight/Private_Forest.jpg";

const HIGHLIGHT_STATS = [
  { value: "3", label: "Bedrooms", sub: "King + 2 Queen" },
  { value: "2", label: "Full Baths", sub: "Primary & Guest" },
  { value: "2", label: "Car Garage", sub: "Detached" },
  { value: "2", label: "Private Acres", sub: "Wooded lot" },
  { value: "300ft", label: "to Road", sub: "Crockett Ridge" },
  { value: "2mi", label: "to Lake", sub: "North Pond" },
];

const KEY_HIGHLIGHTS = [
  {
    icon: Home,
    title: "Fully Renovated Ranch",
    desc: "Every inch of this single-story home has been masterfully renovated — from the foundation finishes to the roof. Brand-new appliances, flooring, fixtures, and systems throughout.",
    img: neatImg,
  },
  {
    icon: Trees,
    title: "Private 2-Acre Lot",
    desc: "Surrounded by mature trees and open green space on a private 2-acre parcel. Your land, your privacy, your peace — with landlord-maintained grounds and snow plowing included.",
    img: forestImg,
  },
  {
    icon: Waves,
    title: "Waterfront Access Nearby",
    desc: "Norway Lake and North Pond are just 2 miles from the driveway. Public boat ramps, swimming, fishing, kayaking, and paddleboarding are all within easy reach.",
    img: wrapImg,
  },
  {
    icon: MapPin,
    title: "Premier Location",
    desc: "Set in the Oxford Hills of Norway, Maine — a region celebrated for its natural beauty, four-season recreation, and authentic New England character — with Portland just 1 hour away.",
    img: neatImg2,
  },
];

const CHECKLIST_ITEMS = [
  "Masterfully renovated — completely turnkey",
  "3 bedrooms / 2 full bathrooms",
  "Private 2-acre wooded parcel",
  "Single-story ranch — no stairs",
  "Brand-new kitchen with quartz countertops",
  "Premium stainless-steel appliances",
  "King-size primary suite with walk-in closet",
  "Spa-inspired primary bathroom",
  "Two queen-sized guest bedrooms",
  "Detached 2-car garage with storage",
  "Wrap-around porch & spacious deck",
  "Partially finished full basement",
  "Dedicated laundry room & pantry",
  "Drilled well water — landlord provided",
  "Professional yard maintenance included",
  "Winter snowplowing included",
  "Dog-friendly — perimeter fence planned",
  "Immediately available for long-term rental",
];

const GALLERY_FEATURED = [
  { url: kitchenImg, label: "Brand New Kitchen", wide: true },
  { url: masterBedImg, label: "Primary Suite" },
  { url: wrapImg, label: "Wrap-Around Porch" },
  { url: forestImg, label: "Private Forest" },
  { url: neatImg, label: "Country Living" },
];

interface PropertyHighlightsPageProps {
  onSchedule: () => void;
}

export function PropertyHighlightsPage({ onSchedule }: PropertyHighlightsPageProps) {
  return (
    <div style={{ background: "var(--np-bg)" }} className="min-h-screen">
      <PageHero
        image={neatImg}
        eyebrow="Property Highlights"
        title="An exceptional property,"
        titleAccent="every detail considered"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Property Highlights" }]}
        height="100vh"
      />

      {/* Stats Row */}
      <div style={{ background: "var(--np-bg-mid)", borderBottom: "1px solid var(--np-border)" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 md:grid-cols-6">
          {HIGHLIGHT_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center py-5 border-r last:border-0"
              style={{ borderColor: "var(--np-border)" }}
            >
              <div style={{ color: "var(--np-gold)", fontSize: "1.5rem", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}>
                {s.value}
              </div>
              <div className="text-white text-xs font-medium mt-0.5">{s.label}</div>
              <div style={{ color: "var(--np-text-faint)", fontSize: "0.7rem" }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <SectionHeader
          eyebrow="The Property"
          title="Property Highlights"
          titleAccent="A cut above the rest"
          subtitle="Discover a perfect blend of style, convenience, and location. This exceptional property offers spacious layouts, premium finishes, abundant natural light, and a setting designed for modern living. A rare rental opportunity — move-in ready and immediately available."
        />

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {KEY_HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                className="group rounded-3xl overflow-hidden relative"
                style={{ height: 300, boxShadow: "0 20px 60px rgba(8,18,29,0.5), 0 0 0 1px var(--np-border)" }}
              >
                <img src={h.img} alt={h.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.92) 0%, rgba(8,18,29,0.3) 50%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--np-gold-glow)", border: "1px solid var(--np-border-hv)" }}>
                      <Icon size={16} style={{ color: "var(--np-gold)" }} />
                    </div>
                    <h3 className="text-white font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{h.title}</h3>
                  </div>
                  <p style={{ color: "var(--np-text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{h.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c9a055]" />
              <span style={{ color: "var(--np-gold)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Complete Property Checklist</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {CHECKLIST_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-2.5 px-4 rounded-xl transition-colors hover:bg-white/4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--np-gold-glow)", border: "1px solid var(--np-border)" }}>
                    <Check size={10} style={{ color: "var(--np-gold)" }} />
                  </div>
                  <span style={{ color: "var(--np-text-muted)", fontSize: "0.875rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Gallery */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c9a055]" />
              <span style={{ color: "var(--np-gold)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Photo Preview</span>
            </div>
            <div className="grid grid-cols-2 gap-3 h-[480px]">
              {GALLERY_FEATURED.map((photo, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer ${photo.wide ? "col-span-2" : ""}`}
                  style={{ boxShadow: "0 10px 30px rgba(8,18,29,0.5)" }}
                >
                  <img src={photo.url} alt={photo.label} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.8), transparent)" }}>
                    <span className="text-white text-xs font-medium">{photo.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--np-bg-alt)" }} className="py-16 px-6 md:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} style={{ color: "var(--np-gold)" }} fill="var(--np-gold)" />)}
          </div>
          <h3 className="text-white text-2xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            A rare Maine rental opportunity
          </h3>
          <p style={{ color: "var(--np-text-muted)", marginBottom: "2rem" }}>
            Masterfully renovated, move-in ready, and surrounded by nature. Schedule your private showing today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onSchedule}
              className="px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, var(--np-gold), var(--np-gold-dk))", color: "#08121d", boxShadow: "0 8px 30px var(--np-gold-glow)" }}
            >
              Schedule Showing <ArrowRight size={16} />
            </button>
            <Link to="/premium-features" className="px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2" style={{ background: "var(--np-surface)", border: "1px solid var(--np-border)", color: "var(--np-text)" }}>
              Premium Features <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      <div className="border-t py-5 text-center" style={{ borderColor: "var(--np-border)" }}>
        <p style={{ color: "var(--np-text-faint)", fontSize: "0.72rem" }}>Ranch Retreat — Norway, Maine · Long-Term Rental · Oxford Hills · Immediately Available</p>
      </div>
    </div>
  );
}
