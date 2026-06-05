import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles, Zap, Layers, Wind } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero } from "../components/PageHero";
import livingRoomImg from "../../imports/mordern-living/Living_room_access_to_the_kitchen.jpg";
import kitchenImg from "../../imports/mordern-living/Brand_New_Kitchen.jpg";
import denImg from "../../imports/mordern-living/Den_or_Office___Dining_Room.jpg";
import neatImg from "../../imports/mordern-living/Neat_and_clean_home_with_peace-1.jpg";
import wrapImg from "../../imports/mordern-living/Wrap-around_porch.jpg";

const BG = livingRoomImg;

const LIVING_PILLARS = [
  {
    icon: Sparkles,
    title: "Elevated Interiors",
    desc: "Every room has been reimagined from the ground up with designer fixtures, warm neutral palettes, and premium materials that create a cohesive, polished aesthetic throughout.",
  },
  {
    icon: Layers,
    title: "Open-Concept Flow",
    desc: "Living, dining, and kitchen areas flow seamlessly into one another, creating a spacious, connected environment perfect for daily living and entertaining alike.",
  },
  {
    icon: Wind,
    title: "Natural Light & Air",
    desc: "Large windows throughout flood every room with natural Maine light and frame views of the private wooded acreage — turning the landscape into living art.",
  },
  {
    icon: Zap,
    title: "Move-In Ready",
    desc: "Brand-new appliances, fresh finishes, new flooring, and updated systems mean you walk in, unpack, and start living. No projects. No waiting. Just home.",
  },
];

const LIFESTYLE_SECTIONS = [
  {
    img: kitchenImg,
    title: "Gourmet Kitchen Life",
    body: "Morning coffee at the island. Weekend cooking with friends. Sunday baking while the sun streams through large windows overlooking the yard. The brand-new kitchen with quartz countertops and premium stainless appliances is designed around how you actually live — not just how a kitchen looks in a photograph.",
    tag: "Kitchen",
  },
  {
    img: denImg,
    title: "Work, Dine & Relax",
    body: "The flexible den and dining space adapts to your lifestyle. Use it as a dedicated home office with a serene view, a formal dining room for hosting, or an everyday family gathering space. The clean, bright finishes make it equally suited for focused work and relaxed living.",
    tag: "Den & Dining",
  },
  {
    img: wrapImg,
    title: "Indoor-Outdoor Living",
    body: "Step through the door onto a full wrap-around porch and the separation between inside and outside disappears. Your living space extends naturally into the Maine outdoors — four seasons of fresh air, birdsong, and privacy on two wooded acres.",
    tag: "Outdoor Living",
  },
  {
    img: neatImg,
    title: "Country Comfort",
    body: "This is not an apartment dressed up as a house. It is a genuine, spacious single-family home with the space, privacy, and character that defines exceptional country living. Ranch-style single-story design means no stairs — pure ease and comfort, all on one level.",
    tag: "Single-Story Ranch",
  },
];

interface ModernLivingPageProps {
  onSchedule: () => void;
}

export function ModernLivingPage({ onSchedule }: ModernLivingPageProps) {
  return (
    <div style={{ background: "var(--np-bg)" }} className="min-h-screen">
      <PageHero
        image={BG}
        eyebrow="Modern Living"
        title="Contemporary comfort,"
        titleAccent="beautifully crafted"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Modern Living" }]}
        height="100vh"
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <SectionHeader
          eyebrow="The Experience"
          title="Modern Living"
          titleAccent="Elevated by Design"
          subtitle="Experience contemporary comfort with thoughtfully designed spaces, elegant interiors, and seamless functionality. Every detail is crafted to enhance your lifestyle while creating a warm and inviting atmosphere that feels like home the moment you walk through the door."
        />

        {/* Four pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LIVING_PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--np-surface)",
                  border: "1px solid var(--np-border)",
                  boxShadow: "0 4px 30px rgba(8,18,29,0.4)",
                }}
                whileHover={{ boxShadow: "0 20px 60px rgba(201,160,85,0.12)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: "var(--np-gold-glow)", border: "1px solid var(--np-border-hv)" }}
                >
                  <Icon size={20} style={{ color: "var(--np-gold)" }} />
                </div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--np-text-muted)", fontSize: "0.875rem", lineHeight: 1.65 }}>{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lifestyle Sections */}
      <section style={{ background: "var(--np-bg-mid)" }} className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-20">
          {LIFESTYLE_SECTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                 
                <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.55) 0%, transparent 60%)" }} />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{ background: "var(--np-gold)", color: "#08121d" }}
                  >
                    {s.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3
                  className="text-white mb-4"
                  style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.15 }}
                >
                  {s.title}
                </h3>
                <p style={{ color: "var(--np-text-muted)", lineHeight: 1.75 }}>{s.body}</p>
                <button
                  onClick={onSchedule}
                  className="mt-6 flex items-center gap-2 group"
                  style={{ color: "var(--np-gold)", fontSize: "0.875rem" }}
                >
                  Schedule a Showing
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section style={{ background: "var(--np-bg-alt)" }} className="py-16 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-5xl mb-4" style={{ color: "var(--np-gold)", opacity: 0.4, fontFamily: "serif" }}>"</div>
          <p
            className="text-white italic mb-4"
            style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.5 }}
          >
            This is not your average rental. This is a masterfully renovated home that lives, breathes, and
            feels like a permanent residence — designed for a life well-lived in Maine's finest landscape.
          </p>
          <span style={{ color: "var(--np-gold)", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
           Ranch Retreat · Norway, Maine
          </span>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p style={{ color: "var(--np-text-muted)", marginBottom: "0.75rem" }}>Ready to experience it in person?</p>
          <h3 className="text-white text-2xl mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Modern living starts with a single showing.
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onSchedule}
              className="px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, var(--np-gold), var(--np-gold-dk))", color: "#08121d", boxShadow: "0 8px 30px var(--np-gold-glow)" }}
            >
              Schedule a Showing <ArrowRight size={16} />
            </button>
            <Link
              to="/bedrooms"
              className="px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2"
              style={{ background: "var(--np-surface)", border: "1px solid var(--np-border)", color: "var(--np-text)" }}
            >
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
