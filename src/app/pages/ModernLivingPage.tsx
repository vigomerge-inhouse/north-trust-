import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles, Zap, Layers, Wind, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero } from "../components/PageHero";
import livingRoomImg from "../../imports/mordern-living/Living_room_access_to_the_kitchen.jpg";
import kitchenImg from "../../imports/mordern-living/Brand_New_Kitchen.jpg";
import denImg from "../../imports/mordern-living/Den_or_Office___Dining_Room.jpg";
import neatImg from "../../imports/mordern-living/Neat_and_clean_home_with_peace-2.jpg";
import wrapImg from "../../imports/mordern-living/Wrap-around_porch.jpg";

const BG = livingRoomImg;

const LIVING_PILLARS = [
  {
    icon: Sparkles,
    iconBg: "#8B6914",
    title: "Elevated Interiors",
    desc: "Every room has been reimagined from the ground up with designer fixtures, warm neutral palettes, and premium materials that create a cohesive, polished aesthetic throughout.",
  },
  {
    icon: Layers,
    iconBg: "#2D6A4F",
    title: "Open-Concept Flow",
    desc: "Living, dining, and kitchen areas flow seamlessly into one another, creating a spacious, connected environment perfect for daily living and entertaining alike.",
  },
  {
    icon: Wind,
    iconBg: "#1B4F8A",
    title: "Natural Light & Air",
    desc: "Large windows throughout flood every room with natural Maine light and frame views of the private wooded acreage — turning the landscape into living art.",
  },
  {
    icon: Zap,
    iconBg: "#5C3D1E",
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
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="min-h-screen bg-[#f5f5f5]">
        <PageHero
          image={BG}
          eyebrow="Modern Living"
          title="Contemporary comfort,"
          titleAccent="beautifully crafted"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Modern Living" }]}
          height="100vh"
        />

        {/* Intro + Pillars — CHAMPAGNE GOLD SECTION */}
        <section className="px-6 md:px-16 py-20 bg-[#DCCB92]">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="The Experience"
              title="Modern Living"
              titleAccent="Elevated by Design"
              subtitle="Experience contemporary comfort with thoughtfully designed spaces, elegant interiors, and seamless functionality. Every detail is crafted to enhance your lifestyle while creating a warm and inviting atmosphere that feels like home the moment you walk through the door."
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 items-stretch">
              {LIVING_PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="rounded-2xl p-8 bg-[#F5F0E8] border border-[#2A2113]/10 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    {/* Colored icon square */}
                    <div
                      className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: p.iconBg }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>

                    {/* Small-caps title */}
                    <h3
                      className="text-[#2A2113] font-semibold mb-4"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.35rem",
                        lineHeight: "1.2"
                      }}
                    >
                      {p.title}
                    </h3>

                    {/* Truncated body */}
                    <p
                      className="text-[#4B3E26]"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                      }}
                    >
                      {p.desc}
                    </p>


                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Lifestyle Sections — GREY */}
        <section className="py-20 px-6 md:px-16 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto space-y-20">
            {LIFESTYLE_SECTIONS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div
                  className={`relative w-full h-80 rounded-2xl overflow-hidden cursor-pointer ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-[#B89C4A] text-white">
                      {s.tag}
                    </span>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3
                    className="text-[#1a1a2e] mb-4"
                    style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.15 }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#555566] leading-relaxed">{s.body}</p>
                  <button
                    onClick={onSchedule}
                    className="mt-6 flex items-center gap-2 group text-[#A88B3F] text-sm font-medium hover:text-[#8B6914] transition-colors"
                  >
                    Schedule a Showing
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quote Banner — CHAMPAGNE GOLD SECTION */}
        <section className="py-16 px-6 md:px-16 bg-[#DCCB92]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-5xl mb-4 text-[#2A2113]/40 font-serif">"</div>
            <p
              className="text-[#2A2113] italic mb-4"
              style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.5 }}
            >
              This is not your average rental. This is a masterfully renovated home that lives, breathes, and
              feels like a permanent residence — designed for a life well-lived in Maine's finest landscape.
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-px bg-[#2A2113]" />
              <span className="text-[#2A2113] text-xs tracking-[0.25em] uppercase font-semibold">
                Ranch Retreat · Norway, Maine
              </span>
              <div className="w-12 h-px bg-[#2A2113]" />
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-16 bg-[#FAF7F0]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[#A88B3F] uppercase tracking-[0.25em] text-xs font-semibold mb-4">
              Discover Ranch Retreat
            </p>

            <h3
              className="text-[#2A2113] mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.2rem,4vw,3.4rem)",
                lineHeight: 1.15,
              }}
            >
              Experience Modern Living
              <br />
              in the Heart of Maine
            </h3>

            <p className="text-[#6B5B40] max-w-2xl mx-auto leading-8 mb-10">
              Tour a beautifully renovated ranch home where thoughtful design,
              natural surroundings, and contemporary comfort come together to
              create an exceptional living experience.
            </p>

            <div className="flex flex-wrap gap-5 justify-center">
              <button
                onClick={onSchedule}
                className="px-10 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 bg-[#B89C4A] text-white hover:scale-105 shadow-lg shadow-[#B89C4A]/30"
              >
                Schedule a Private Tour
                <ArrowRight size={16} />
              </button>

              <Link
                to="/bedrooms"
                className="px-10 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 border border-[#DCCB92] text-[#2A2113] hover:bg-[#F5F0E8]"
              >
                Explore Bedrooms
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#DCCB92]/40 py-6 text-center bg-[#FAF7F0]">
          <p className="text-[#8A7A5A] text-xs tracking-wide">
            Ranch Retreat — Norway, Maine · Long-Term Rental · Oxford Hills ·
            Immediately Available
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>
          <button
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + LIFESTYLE_SECTIONS.length) % LIFESTYLE_SECTIONS.length); }}
          >
            <ChevronLeft size={18} />
          </button>
          <img
            src={LIFESTYLE_SECTIONS[lightbox].img}
            alt={LIFESTYLE_SECTIONS[lightbox].title}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % LIFESTYLE_SECTIONS.length); }}
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-6 w-full text-center">
            <div className="text-white/70 text-sm">{LIFESTYLE_SECTIONS[lightbox].title}</div>
            <div className="text-[#DCCB92] text-xs tracking-widest uppercase mt-1">Ranch Retreat · Norway, Maine</div>
          </div>
        </div>
      )}
    </>
  );
}