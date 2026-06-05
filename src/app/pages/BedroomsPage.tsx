import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Bed, Check, Moon, Sun } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero } from "../components/PageHero";
import masterBedImg from "../../imports/Bedrooms/Giant_master_bedroom__walk-in_closet-1.jpg";
import masterBed2Img from "../../imports/Bedrooms/Giant_master_bedroom__walk-in_closet.jpg";
import guestRoom1Img from "../../imports/Bedrooms/Guest_Room_1__II.jpg";
import guestRoom2Img from "../../imports/Bedrooms/Guest_Room_1__II-1.jpg";
import bathroomImg from "../../imports/Bedrooms/Stunning_master_bathroom.jpg";
import guestBathImg from "../../imports/Bedrooms/Guest_Bathroom.jpg";

const BEDROOMS = [
  {
    num: "01",
    type: "Primary Suite",
    size: "King-Size",
    tag: "Master Bedroom",
    tagColor: "#c9a055",
    images: [masterBedImg, bathroomImg, masterBed2Img],
    headline: "King-Size Primary Suite with Spa-Inspired Ensuite",
    desc: "Retreat to a spacious primary suite designed for relaxation and comfort. The bedroom easily accommodates a king-size bed and features generous walk-in closet storage that will exceed your expectations. Natural light fills the room throughout the day, creating a warm, serene environment.",
    desc2: "The luxurious ensuite bath is a private spa. A cast-iron soaking tub sits bathed in soft light. The ceramic marble shower offers a hotel-quality experience. Elegant modern fixtures, quartz vanity, and warm neutral finishes complete the picture of a true personal sanctuary.",
    features: [
      "King-size bed configuration",
      "Generous walk-in closet",
      "Private ensuite bathroom",
      "Cast-iron soaking tub",
      "Ceramic marble shower",
      "Abundant natural light",
      "Premium modern fixtures",
      "Private, quiet setting",
    ],
  },
  {
    num: "02",
    type: "Guest Bedroom One",
    size: "Queen-Size",
    tag: "Guest Bedroom",
    tagColor: "#4a9eff",
    images: [guestRoom1Img, guestRoom2Img, guestBathImg],
    headline: "Spacious First Guest Bedroom",
    desc: "The first guest bedroom offers generous space for a queen-size bed with room to spare. Clean, well-organized closet space, fresh neutral finishes, and abundant natural light create an inviting environment — equally suited for a family member, guest, or home office.",
    desc2: "The guest wing is served by a fully updated full bathroom with modern fixtures, bright design, and clean, contemporary finishes. Private, quiet, and comfortable — your guests will feel genuinely at home.",
    features: [
      "Queen-size bed configuration",
      "Generous closet space",
      "Fresh, contemporary finishes",
      "Abundant natural light",
      "Quiet, private location",
      "Access to full guest bath",
      "Flexible home-office option",
      "Warm neutral palette",
    ],
  },
  {
    num: "03",
    type: "Guest Bedroom Two",
    size: "Queen-Size",
    tag: "Guest Bedroom",
    tagColor: "#4ade80",
    images: [guestRoom2Img, guestRoom1Img, guestBathImg],
    headline: "Spacious Second Guest Bedroom",
    desc: "The second guest bedroom mirrors the same generous proportions, quality finishes, and natural light that define the rest of this home. Whether used for guests, family members, or as a dedicated home office or creative studio, this room provides real, usable space.",
    desc2: "Both guest rooms share the updated guest full bathroom, which has been completely refreshed with new fixtures, bright design, and a clean contemporary style. This is a home designed for real living — not just for looking good in photographs.",
    features: [
      "Queen-size bed configuration",
      "Spacious clean closet",
      "Contemporary finishes",
      "Natural light throughout",
      "Versatile use — office or bedroom",
      "Shared access to guest bath",
      "Connected to living areas",
      "Peaceful, private atmosphere",
    ],
  },
];

interface BedroomsPageProps {
  onSchedule: () => void;
}

export function BedroomsPage({ onSchedule }: BedroomsPageProps) {
  return (
    <div style={{ background: "var(--np-bg)" }} className="min-h-screen">
      <PageHero
        image={masterBedImg}
        eyebrow="Bedrooms"
        title="Rest, privacy,"
        titleAccent="beautifully designed"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Bedrooms" }]}
        height="100vh"
      />

      {/* Bedroom Count Bar */}
      <div style={{ background: "var(--np-bg-mid)", borderBottom: "1px solid var(--np-border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Bed size={18} style={{ color: "var(--np-gold)" }} />
              <span className="text-white text-sm font-medium">3 Bedrooms Total</span>
            </div>
            <div className="flex items-center gap-2">
              <Moon size={16} style={{ color: "var(--np-gold)" }} />
              <span style={{ color: "var(--np-text-muted)", fontSize: "0.85rem" }}>1 King Primary + 2 Queen Guest</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun size={16} style={{ color: "var(--np-gold)" }} />
              <span style={{ color: "var(--np-text-muted)", fontSize: "0.85rem" }}>Natural light in every room</span>
            </div>
          </div>
          <button
            onClick={onSchedule}
            className="px-5 py-2 rounded-full text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, var(--np-gold), var(--np-gold-dk))", color: "#08121d" }}
          >
            Schedule a Showing
          </button>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <SectionHeader
          eyebrow="Bedrooms"
          title="Three Bedrooms,"
          titleAccent="Designed for Comfort"
          subtitle="Relax in spacious, beautifully designed bedrooms that provide comfort, privacy, and tranquility. Generous layouts, ample storage, and elegant finishes create the perfect personal retreat — from the king-size primary suite to the flexible guest rooms that adapt to your life."
        />

        {/* Bedroom Sections */}
        <div className="space-y-24">
          {BEDROOMS.map((bed, i) => (
            <motion.div
              key={bed.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Header */}
              <div className="flex items-baseline gap-5 mb-8">
                <span style={{ color: "var(--np-gold)", opacity: 0.3, fontSize: "4.5rem", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>{bed.num}</span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold" style={{ background: `${bed.tagColor}20`, color: bed.tagColor, border: `1px solid ${bed.tagColor}40` }}>
                      {bed.tag}
                    </span>
                    <span style={{ color: "var(--np-text-faint)", fontSize: "0.8rem" }}>{bed.size}</span>
                  </div>
                  <h2 className="text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                    {bed.headline}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Images */}
                <div className={`space-y-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden group" style={{ height: 280, boxShadow: "0 20px 60px rgba(8,18,29,0.5), 0 0 0 1px var(--np-border)" }}>
                    <img src={bed.images[0]} alt={bed.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.4), transparent)" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {bed.images.slice(1).map((img, ii) => (
                      <div key={ii} className="relative rounded-xl overflow-hidden group" style={{ height: 140, boxShadow: "0 10px 30px rgba(8,18,29,0.4)" }}>
                        <img src={img} alt={bed.type} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p style={{ color: "var(--np-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>{bed.desc}</p>
                  <p style={{ color: "var(--np-text-muted)", lineHeight: 1.75, marginBottom: "1.75rem" }}>{bed.desc2}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {bed.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Check size={12} style={{ color: "var(--np-gold)", marginTop: "0.2rem", flexShrink: 0 }} />
                        <span style={{ color: "var(--np-text-muted)", fontSize: "0.82rem", lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onSchedule}
                    className="flex items-center gap-2 text-sm group"
                    style={{ color: "var(--np-gold)" }}
                  >
                    Schedule to see this room
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--np-bg-alt)" }} className="py-16 px-6 md:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
          <Bed size={30} style={{ color: "var(--np-gold)", margin: "0 auto 1rem" }} />
          <h3 className="text-white text-2xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Three rooms. One exceptional home.
          </h3>
          <p style={{ color: "var(--np-text-muted)", marginBottom: "2rem" }}>
            See the primary suite, guest rooms, and the full home in person. Schedule your private showing today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onSchedule}
              className="px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, var(--np-gold), var(--np-gold-dk))", color: "#08121d", boxShadow: "0 8px 30px var(--np-gold-glow)" }}
            >
              Schedule a Showing <ArrowRight size={16} />
            </button>
            <Link to="/amenities" className="px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2" style={{ background: "var(--np-surface)", border: "1px solid var(--np-border)", color: "var(--np-text)" }}>
              View Amenities <ArrowRight size={16} />
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
