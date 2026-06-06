import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Check, Sparkles, BedDouble, TreePine, Waves, Star, ChefHat, Droplets, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import kitchenImg from "../../imports/HomeSections/Brand_New_Kitchen.jpg";
import bathroomImg from "../../imports/HomeSections/Stunning_master_bathroom.jpg";
import wrapImg from "../../imports/HomeSections/Wrap-around_porch.jpg";
import masterBedImg from "../../imports/HomeSections/Giant_master_bedroom__walk-in_closet-1.jpg";
import laundryImg from "../../imports/HomeSections/Laundry_Room_Pantry.jpg";
import denImg from "../../imports/HomeSections/Den_or_Office___Dining_Room.jpg";
import guestRoom2Img from "../../imports/HomeSections/Guest_Room_1__II-1.jpg";
import neatImg2 from "../../imports/HomeSections/Neat_and_clean_home_with_peace-1.jpg";
import forestImg2 from "../../imports/HomeSections/Private_Forest-1.jpg";

/* ── MODERN LIVING ──────────────────────────────────────────── */
export function ModernLivingSection({ onSchedule }: { onSchedule: () => void }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ML_IMGS = [kitchenImg, bathroomImg, denImg];
  const POINTS = [
    { icon: Sparkles, text: "Thoughtfully designed spaces — every room reimagined from scratch" },
    { icon: ChefHat, text: "Gourmet kitchen with quartz countertops and premium appliances" },
    { icon: Droplets, text: "Spa-inspired bathrooms — soaking tub, marble shower" },
    { icon: BedDouble, text: "King-size primary suite with walk-in closet and natural light" },
    { icon: TreePine, text: "Single-story ranch flow — open, airy, no stairs" },
    { icon: Waves, text: "Indoor-outdoor living with wrap-around porch & private deck" },
  ];

  return (
    <section style={{ background: "var(--np-bg-mid)" }} className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Modern Living"
          title="Contemporary comfort"
          titleAccent="beautifully crafted"
          subtitle="Experience contemporary comfort with thoughtfully designed spaces, elegant interiors, and seamless functionality. Every detail is crafted to enhance your lifestyle while creating a warm and inviting atmosphere."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Points */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {POINTS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.text}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--np-surface)",
                    border: "1px solid var(--np-border)",
                  }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--np-gold-glow)", border: "1px solid var(--np-border-hv)" }}>
                    <Icon size={16} style={{ color: "var(--np-gold)" }} />
                  </div>
                  <span style={{ color: "var(--np-text-muted)", fontSize: "0.9rem", lineHeight: 1.55 }}>{p.text}</span>
                </div>
              );
            })}
            <Link
              to="/modern-living"
              className="inline-flex items-center gap-2 mt-4 text-sm group"
              style={{ color: "var(--np-gold)" }}
            >
              Explore Modern Living
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3 h-[480px]"
          >
            <div className="relative overflow-hidden rounded-2xl row-span-2 group cursor-pointer" onClick={() => setLightbox(0)} style={{ boxShadow: "0 20px 50px rgba(8,18,29,0.5), 0 0 0 1px var(--np-border)" }}>
              <img src={kitchenImg} alt="Modern Kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.5), transparent)" }} />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">Brand New Kitchen</div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer" onClick={() => setLightbox(1)} style={{ boxShadow: "0 15px 40px rgba(8,18,29,0.5)" }}>
              <img src={bathroomImg} alt="Master Bathroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl group" style={{ boxShadow: "0 15px 40px rgba(8,18,29,0.5)" }}>
              <img src={denImg} alt="Den & Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── PROPERTY HIGHLIGHTS ────────────────────────────────────── */
export function PropertyHighlightsSection({ onSchedule }: { onSchedule: () => void }) {
  const STATS = [
    { value: "3", label: "Bedrooms" },
    { value: "2", label: "Bathrooms" },
    { value: "2", label: "Car Garage" },
    { value: "2", label: "Acres" },
  ];

  const BULLETS = [
    "Masterfully renovated — completely turnkey",
    "Single-story ranch — no stairs, effortless flow",
    "Brand-new kitchen with quartz countertops",
    "King primary suite with walk-in closet",
    "Wrap-around porch & spacious private deck",
    "2 private wooded acres — wildlife & privacy",
    "Landlord-maintained yard & snowplowing",
    "Dog-friendly — perimeter fence planned",
    "North Pond & Norway Lake — 2 miles away",
    "Portland 1hr · Ski areas 45min · Boston 3hrs",
  ];

  return (
    <section style={{ background: "var(--np-bg-alt)" }} className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Property Highlights"
          title="A perfect blend"
          titleAccent="of style and convenience"
          subtitle="Discover a perfect blend of style, convenience, and location. This exceptional property offers spacious layouts, premium finishes, abundant natural light, and a setting designed for modern living."
        />

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center py-6 rounded-2xl"
              style={{ background: "var(--np-surface)", border: "1px solid var(--np-border)" }}
            >
              <div style={{ color: "var(--np-gold)", fontSize: "2.8rem", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, lineHeight: 1 }}>
                {s.value}
              </div>
              <div className="text-white text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bullets */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="grid grid-cols-1 gap-2.5">
              {BULLETS.map((b) => (
                <div key={b} className="flex items-center gap-3 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--np-gold-glow)", border: "1px solid var(--np-border)" }}>
                    <Check size={10} style={{ color: "var(--np-gold)" }} />
                  </div>
                  <span style={{ color: "var(--np-text-muted)", fontSize: "0.875rem" }}>{b}</span>
                </div>
              ))}
            </div>
            <Link
              to="/property-highlights"
              className="inline-flex items-center gap-2 mt-6 text-sm group"
              style={{ color: "var(--np-gold)" }}
            >
              View All Highlights
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Gallery */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="grid grid-cols-2 gap-3 h-[420px]">
              {[
                { url: masterBedImg, label: "Primary Suite", span: "col-span-1 row-span-2" },
                { url: wrapImg, label: "Wrap-Around Porch" },
                { url: forestImg2, label: "Private Forest" },
              ].map((img, i) => (
                <div key={i} className={`relative overflow-hidden rounded-2xl group ${img.span || ""}`} style={{ boxShadow: "0 15px 40px rgba(8,18,29,0.5)" }}>
                  <img src={img.url} alt={img.label} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.8), transparent)" }}>
                    <span className="text-white text-xs font-medium">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── PREMIUM FEATURES ───────────────────────────────────────── */
export function PremiumFeaturesSection({ onSchedule }: { onSchedule: () => void }) {
  const CARDS = [
    { icon: ChefHat, title: "Gourmet Kitchen", img: kitchenImg, desc: "Quartz countertops, stainless appliances, center island", link: "/premium-features" },
    { icon: Droplets, title: "Spa Bathrooms", img: bathroomImg, desc: "Cast-iron tub, marble shower, modern fixtures", link: "/premium-features" },
    { icon: BedDouble, title: "Primary Suite", img: masterBedImg, desc: "King-size, walk-in closet, private ensuite", link: "/bedrooms" },
    { icon: TreePine, title: "Outdoor Living", img: wrapImg, desc: "Wrap-around porch, deck, 2 private acres", link: "/outdoor" },
  ];

  return (
    <section style={{ background: "var(--np-bg-mid)" }} className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Premium Features"
          title="Luxury at every turn,"
          titleAccent="in every detail"
          subtitle="Enjoy luxury at every turn with high-end materials, designer finishes, smart home integration, energy-efficient systems, and carefully selected upgrades that elevate everyday living."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={card.link} className="block group">
                  <div className="rounded-2xl overflow-hidden mb-4 relative" style={{ height: 200, boxShadow: "0 15px 40px rgba(8,18,29,0.5), 0 0 0 1px var(--np-border)" }}>
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.7), transparent 50%)" }} />
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(8,18,29,0.7)", border: "1px solid var(--np-border)", backdropFilter: "blur(8px)" }}>
                      <Icon size={15} style={{ color: "var(--np-gold)" }} />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-[#c9a055] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{card.title}</h3>
                  <p style={{ color: "var(--np-text-muted)", fontSize: "0.82rem" }}>{card.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/premium-features"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ background: "var(--np-surface)", border: "1px solid var(--np-border)", color: "var(--np-text)" }}
          >
            Explore All Premium Features <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── BEDROOMS ───────────────────────────────────────────────── */
export function BedroomsSection({ onSchedule }: { onSchedule: () => void }) {
  const ROOMS = [
    { img: masterBedImg, label: "Primary Suite", sub: "King · Walk-in Closet · Ensuite Bath" },
    { img: guestRoom2Img, label: "Guest Bedroom 1", sub: "Queen · Spacious Closet" },
    { img: laundryImg, label: "Guest Bedroom 2", sub: "Queen · Clean & Fresh" },
  ];

  return (
    <section style={{ background: "var(--np-bg)" }} className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Bedrooms"
          title="Rest, relax,"
          titleAccent="in your private retreat"
          subtitle="Relax in spacious, beautifully designed bedrooms that provide comfort, privacy, and tranquility. Generous layouts, ample storage, and elegant finishes create the perfect personal retreat."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.label}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4" style={{ height: 260, boxShadow: "0 20px 50px rgba(8,18,29,0.5), 0 0 0 1px var(--np-border)" }}>
                <img src={room.img} alt={room.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.75), transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{room.label}</div>
                  <div style={{ color: "var(--np-gold)", fontSize: "0.72rem", letterSpacing: "0.1em" }}>{room.sub}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/bedrooms"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, var(--np-gold), var(--np-gold-dk))", color: "#08121d", boxShadow: "0 6px 24px var(--np-gold-glow)" }}
          >
            View All Bedrooms <ArrowRight size={15} />
          </Link>
          <button
            onClick={onSchedule}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all"
            style={{ background: "var(--np-surface)", border: "1px solid var(--np-border)", color: "var(--np-text)" }}
          >
            Schedule a Showing
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── AMENITIES ──────────────────────────────────────────────── */
export function AmenitiesSection({ onSchedule }: { onSchedule: () => void }) {
  const AMENITIES = [
    { icon: TreePine, label: "2 Private Acres", color: "#4ade80" },
    { icon: Waves, label: "Lake Access — 2 mi", color: "#4a9eff" },
    { icon: BedDouble, label: "3 Bedrooms", color: "#c9a055" },
    { icon: Star, label: "Fully Renovated", color: "#f4a261" },
    { icon: Droplets, label: "Spa Bathrooms", color: "#90e0ef" },
    { icon: ChefHat, label: "Gourmet Kitchen", color: "#c9a055" },
    { icon: Sparkles, label: "Turnkey Ready", color: "#a8dadc" },
    { icon: TreePine, label: "Dog Friendly", color: "#7dd87f" },
  ];

  return (
    <section style={{ background: "var(--np-bg-alt)" }} className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Amenities"
          title="Everything you need,"
          titleAccent="nothing you don't"
          subtitle="Enhance your daily lifestyle with premium amenities designed for convenience and relaxation, including landscaped outdoor spaces, secure parking, high-speed connectivity, recreational areas, and modern community features."
        />

        {/* Amenity Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {AMENITIES.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col items-center text-center py-6 px-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--np-surface)",
                  border: "1px solid var(--np-border)",
                  boxShadow: "0 4px 20px rgba(8,18,29,0.3)",
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${a.color}18`, border: `1px solid ${a.color}30` }}>
                  <Icon size={20} style={{ color: a.color }} />
                </div>
                <span className="text-white text-sm font-medium">{a.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom images */}
        <div className="grid grid-cols-3 gap-3 h-48">
          {[wrapImg, neatImg2, forestImg2].map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl group" style={{ boxShadow: "0 15px 40px rgba(8,18,29,0.4)" }}>
              <img src={img} alt="Amenity" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.4), transparent)" }} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/amenities"
            className="inline-flex items-center gap-2 text-sm group"
            style={{ color: "var(--np-gold)" }}
          >
            View All Amenities
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
