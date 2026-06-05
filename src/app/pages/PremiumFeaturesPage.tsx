import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Gem, ChefHat, Droplets, Sofa, Zap } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero } from "../components/PageHero";
import kitchenImg from "../../imports/PremiumFeatures/Brand_New_Kitchen.jpg";
import bathroomImg from "../../imports/PremiumFeatures/Stunning_master_bathroom.jpg";
import laundryImg from "../../imports/PremiumFeatures/Laundry_Room_Pantry.jpg";
import denImg from "../../imports/PremiumFeatures/Den_or_Office___Dining_Room.jpg";
import livingImg from "../../imports/PremiumFeatures/Living_room_access_to_the_kitchen.jpg";

const PREMIUM_CATEGORIES = [
  {
    icon: ChefHat,
    title: "Gourmet Kitchen",
    color: "#f4a261",
    features: [
      "Brand-new stainless-steel appliances",
      "Spacious center island with seating",
      "Elegant quartz countertops",
      "Abundant custom cabinetry",
      "Large windows — yard & porch views",
      "Dedicated pantry storage",
      "Designer pendant lighting",
      "Premium faucet & hardware",
    ],
    img: kitchenImg,
    desc: "The kitchen is the heart of this home — a fully reimagined space with restaurant-grade appliances, quartz countertops, and a design that makes cooking a pleasure and entertaining effortless.",
  },
  {
    icon: Droplets,
    title: "Spa Bathrooms",
    color: "#90e0ef",
    features: [
      "Cast-iron soaking tub (primary)",
      "Ceramic marble shower (primary)",
      "Modern vanities with quartz",
      "Heated-look designer tile",
      "Premium fixtures & hardware",
      "Soft-close cabinetry",
      "Abundant natural light",
      "Updated guest bath with new fixtures",
    ],
    img: bathroomImg,
    desc: "Both bathrooms have been completely transformed. The primary ensuite is a private spa retreat — cast-iron tub, marble shower, elegant finishes. The guest bath is bright, clean, and fully updated.",
  },
  {
    icon: Sofa,
    title: "Living Spaces",
    color: "#c9a055",
    features: [
      "Brand-new flooring throughout",
      "Open-concept living & dining flow",
      "Abundant windows & natural light",
      "Fresh neutral paint throughout",
      "High ceilings & airy proportions",
      "Flexible den / home office",
      "Dedicated dining space",
      "Views of private wooded acreage",
    ],
    img: livingImg,
    desc: "Open, uncluttered living spaces designed for comfort. New floors gleam throughout. Every room is bathed in natural light and connected to the next by a seamless, cohesive design language.",
  },
  {
    icon: Zap,
    title: "Smart Systems & Utility",
    color: "#a8dadc",
    features: [
      "Recently tested drilled well water",
      "Dedicated laundry room",
      "Separate pantry storage",
      "Full basement — partially finished",
      "Energy-efficient design",
      "Modern electrical systems",
      "Easily activated utilities",
      "Detached 2-car garage",
    ],
    img: laundryImg,
    desc: "Built for practical everyday living. A dedicated laundry room, pantry, full basement, and clean utility systems give this home the infrastructure that makes life genuinely comfortable.",
  },
  {
    icon: Gem,
    title: "Designer Finishes",
    color: "#c9a055",
    features: [
      "Quartz countertops (kitchen & bath)",
      "New flooring throughout entire home",
      "Contemporary light fixtures",
      "Premium door hardware",
      "Fresh paint — warm neutral palette",
      "Architectural trim details",
      "Cohesive design language",
      "Quality materials top to bottom",
    ],
    img: denImg,
    desc: "The finish selections throughout this home were made with a designer's eye — quality materials, cohesive palette, and thoughtful details that elevate every room from functional to exceptional.",
  },
];

interface PremiumFeaturesPageProps {
  onSchedule: () => void;
}

export function PremiumFeaturesPage({ onSchedule }: PremiumFeaturesPageProps) {
  return (
    <div style={{ background: "var(--np-bg)" }} className="min-h-screen">
      <PageHero
        image={kitchenImg}
        eyebrow="Premium Features"
        title="Luxury at every turn,"
        titleAccent="in every detail"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Premium Features" }]}
        height="100vh"
      />

      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <SectionHeader
          eyebrow="Premium Features"
          title="Exceptional Quality"
          titleAccent="Throughout Every Room"
          subtitle="Enjoy luxury at every turn with high-end materials, designer finishes, thoughtfully curated upgrades, and carefully selected details that elevate everyday living from ordinary to extraordinary. This is what a truly premium rental looks like."
        />

        {/* Feature Categories */}
        <div className="space-y-20">
          {PREMIUM_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                {/* Image */}
                <div
                  className={`relative rounded-3xl overflow-hidden group ${!isEven ? "lg:order-2" : ""}`}
                  style={{ height: 380, boxShadow: "0 30px 80px rgba(8,18,29,0.55), 0 0 0 1px var(--np-border)" }}
                >
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.6) 0%, transparent 60%)" }} />
                  <div className="absolute top-5 right-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm" style={{ background: "rgba(8,18,29,0.7)", border: "1px solid var(--np-border)" }}>
                      <Icon size={20} style={{ color: cat.color }} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--np-gold-glow)", border: "1px solid var(--np-border-hv)" }}>
                      <Icon size={18} style={{ color: "var(--np-gold)" }} />
                    </div>
                    <div>
                      <div style={{ color: "var(--np-gold)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Premium</div>
                      <h3 className="text-white font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{cat.title}</h3>
                    </div>
                  </div>

                  <p style={{ color: "var(--np-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{cat.desc}</p>

                  <div className="grid grid-cols-1 gap-2">
                    {cat.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-3 py-2 rounded-lg px-3 transition-colors hover:bg-white/4"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--np-gold)" }} />
                        <span style={{ color: "var(--np-text-muted)", fontSize: "0.875rem" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--np-bg-mid)" }} className="py-16 px-6 md:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
          <Gem size={30} style={{ color: "var(--np-gold)", margin: "0 auto 1rem" }} />
          <h3 className="text-white text-2xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Premium features deserve a personal visit.
          </h3>
          <p style={{ color: "var(--np-text-muted)", marginBottom: "2rem" }}>
            Photographs capture the beauty. A showing lets you feel the quality. Schedule yours today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onSchedule}
              className="px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, var(--np-gold), var(--np-gold-dk))", color: "#08121d", boxShadow: "0 8px 30px var(--np-gold-glow)" }}
            >
              Schedule a Showing <ArrowRight size={16} />
            </button>
            <Link to="/bedrooms" className="px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2" style={{ background: "var(--np-surface)", border: "1px solid var(--np-border)", color: "var(--np-text)" }}>
              View Bedrooms <ArrowRight size={16} />
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
