import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Wifi, Car, TreePine, Snowflake, Dog, Waves, Mountain, Package, ShieldCheck, Utensils } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero } from "../components/PageHero";
import wrapImg from "../../imports/Amenities/Wrap-around_porch.jpg";
import laundryImg from "../../imports/Amenities/Laundry_Room_Pantry.jpg";
import forestImg from "../../imports/Amenities/Private_Forest-1.jpg";
import neatImg from "../../imports/Amenities/Neat_and_clean_home_with_peace-1.jpg";

const AMENITY_GROUPS = [
  {
    icon: Utensils,
    title: "Kitchen & Cooking",
    color: "#f4a261",
    items: [
      { name: "Brand-new stainless appliances", detail: "Full suite — range, refrigerator, dishwasher" },
      { name: "Quartz countertops", detail: "Premium surface — beautiful & durable" },
      { name: "Center island", detail: "Spacious prep & dining island" },
      { name: "Abundant cabinetry", detail: "Generous storage throughout kitchen" },
      { name: "Pantry storage", detail: "Dedicated pantry adjacent to kitchen" },
      { name: "Modern faucet & hardware", detail: "Designer selections throughout" },
    ],
  },
  {
    icon: Package,
    title: "Storage & Organization",
    color: "#c9a055",
    items: [
      { name: "Walk-in closet", detail: "Primary bedroom — generous size" },
      { name: "Guest room closets", detail: "Spacious closets in both guest rooms" },
      { name: "Dedicated laundry room", detail: "Separate room with full washer/dryer hookups" },
      { name: "Pantry room", detail: "Adjacent to kitchen for dry goods" },
      { name: "Full basement", detail: "Partially finished — excellent storage" },
      { name: "2-car garage", detail: "Detached — clean, organized, full-size bays" },
    ],
  },
  {
    icon: Car,
    title: "Parking & Garage",
    color: "#90e0ef",
    items: [
      { name: "Two-car detached garage", detail: "Full-size bays with interior access" },
      { name: "Recreational vehicle storage", detail: "Space for boats, ATVs, snowmobiles" },
      { name: "Workshop capability", detail: "Ample space for tools & projects" },
      { name: "Seasonal storage", detail: "Perfect for Maine's four seasons of gear" },
      { name: "Driveway parking", detail: "Additional off-street parking available" },
      { name: "Easy road access", detail: "300 ft from Crockett Ridge Road" },
    ],
  },
  {
    icon: TreePine,
    title: "Outdoor & Grounds",
    color: "#4ade80",
    items: [
      { name: "Wrap-around porch", detail: "Full perimeter — morning to sunset" },
      { name: "Spacious entertainment deck", detail: "Large, private outdoor entertaining space" },
      { name: "2 private wooded acres", detail: "Mature trees, open lawns, privacy" },
      { name: "Wildlife & nature", detail: "Active deer, birds, Maine wildlife" },
      { name: "Stargazing", detail: "Dark-sky property — brilliant night skies" },
      { name: "Garden potential", detail: "Fertile land ready for your garden vision" },
    ],
  },
  {
    icon: Snowflake,
    title: "Landlord Services",
    color: "#a8dadc",
    items: [
      { name: "Professional yard maintenance", detail: "Landlord-provided, year-round" },
      { name: "Winter snowplowing", detail: "Driveway & access — included" },
      { name: "Well water system", detail: "Recently tested drilled well — landlord provided" },
      { name: "Dog-friendly fence", detail: "Perimeter fence planned for installation" },
      { name: "Collaborative landlord", detail: "Amenable to personalizing your home" },
      { name: "Immediate availability", detail: "Move-in ready — no waiting" },
    ],
  },
  {
    icon: Waves,
    title: "Recreation & Access",
    color: "#4a9eff",
    items: [
      { name: "North Pond", detail: "Public boat ramp — 2 miles" },
      { name: "Norway Lake", detail: "Public boat ramp — 2 miles" },
      { name: "Ski areas", detail: "Sunday River, Shawnee Peak — 45 min" },
      { name: "Golf courses", detail: "Multiple courses — 45 min" },
      { name: "Hiking trails", detail: "Oxford Hills — at your doorstep" },
      { name: "Portland, ME", detail: "Maine's premier city — 1 hour" },
    ],
  },
  {
    icon: Dog,
    title: "Pet-Friendly",
    color: "#f4a261",
    items: [
      { name: "Dogs welcome", detail: "Genuinely dog-friendly property" },
      { name: "Perimeter fence planned", detail: "Safe, secure space for your dog" },
      { name: "2 acres to explore", detail: "Room for dogs to run and roam" },
      { name: "Private, secure setting", detail: "No traffic, no neighbors — true privacy" },
      { name: "Nature surroundings", detail: "Trails, woods, and wildlife to discover" },
      { name: "Collaborative approach", detail: "Landlord works with pet owners" },
    ],
  },
  {
    icon: Wifi,
    title: "Utilities & Connectivity",
    color: "#c9a055",
    items: [
      { name: "High-speed internet", detail: "Available in Norway, ME — tenant activates" },
      { name: "Electricity", detail: "Tenant responsibility — easy activation" },
      { name: "Heating system", detail: "Tenant responsibility — ready for use" },
      { name: "Well water", detail: "Landlord provided — recently tested" },
      { name: "Modern electrical", detail: "Updated electrical systems throughout" },
      { name: "Efficient systems", detail: "Modern, clean utility infrastructure" },
    ],
  },
  {
    icon: Mountain,
    title: "Four-Season Living",
    color: "#7dd87f",
    items: [
      { name: "Spring", detail: "Wildflowers, bird arrivals, garden planting" },
      { name: "Summer", detail: "Lake access, porch life, outdoor entertaining" },
      { name: "Autumn", detail: "Legendary Maine foliage — Oxford Hills" },
      { name: "Winter", detail: "Snowplowing included, skiing 45 min away" },
      { name: "Wildlife year-round", detail: "Deer, birds, and Maine fauna" },
      { name: "Stargazing", detail: "Dark skies in every season" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Privacy",
    color: "#c9a055",
    items: [
      { name: "Private 2-acre lot", detail: "No shared walls or common areas" },
      { name: "300 ft from road", detail: "Distance from Crockett Ridge Road" },
      { name: "Mature tree canopy", detail: "Natural privacy screen from neighbors" },
      { name: "Detached garage", detail: "Secure parking and storage" },
      { name: "Private driveway", detail: "Your own dedicated access" },
      { name: "Single-family home", detail: "No apartment building — no shared spaces" },
    ],
  },
];

interface AmenitiesPageProps {
  onSchedule: () => void;
}

export function AmenitiesPage({ onSchedule }: AmenitiesPageProps) {
  return (
    <div style={{ background: "var(--np-bg)" }} className="min-h-screen">
      <PageHero
        image={wrapImg}
        eyebrow="Amenities"
        title="Premium amenities,"
        titleAccent="exceptional everyday life"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Amenities" }]}
        height="100vh"
      />

      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <SectionHeader
          eyebrow="All Amenities"
          title="Everything You Need,"
          titleAccent="Nothing You Don't"
          subtitle="Enhance your daily lifestyle with premium amenities designed for convenience and relaxation. From landscaped outdoor spaces and secure parking to high-speed connectivity, recreational access, and modern community features — this home delivers on every level."
        />

        {/* Amenity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {AMENITY_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: "var(--np-surface)",
                  border: "1px solid var(--np-border)",
                  boxShadow: "0 4px 30px rgba(8,18,29,0.35)",
                }}
                whileHover={{ boxShadow: "0 20px 60px rgba(8,18,29,0.5), 0 0 0 1px var(--np-border-hv)" }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${group.color}18`, border: `1px solid ${group.color}35` }}
                  >
                    <Icon size={20} style={{ color: group.color }} />
                  </div>
                  <h3 className="text-white font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {group.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: group.color }} />
                      <div>
                        <div style={{ color: "var(--np-text)", fontSize: "0.82rem", fontWeight: 500 }}>{item.name}</div>
                        <div style={{ color: "var(--np-text-faint)", fontSize: "0.72rem", marginTop: "0.1rem" }}>{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Image trio */}
      <section style={{ background: "var(--np-bg-mid)" }} className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-60">
            {[wrapImg, laundryImg, forestImg, neatImg].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl overflow-hidden group"
                style={{ boxShadow: "0 15px 40px rgba(8,18,29,0.4)" }}
              >
                <img src={img} alt="Amenity" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,29,0.5), transparent)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
          <h3 className="text-white text-2xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Experience all the amenities in person.
          </h3>
          <p style={{ color: "var(--np-text-muted)", marginBottom: "2rem" }}>
            Schedule your private showing and discover why Ranch Retreat offers a lifestyle that simply cannot be replicated.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onSchedule}
              className="px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, var(--np-gold), var(--np-gold-dk))", color: "#08121d", boxShadow: "0 8px 30px var(--np-gold-glow)" }}
            >
              Schedule a Showing <ArrowRight size={16} />
            </button>
            <Link to="/outdoor" className="px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2" style={{ background: "var(--np-surface)", border: "1px solid var(--np-border)", color: "var(--np-text)" }}>
              Explore Outdoor Living <ArrowRight size={16} />
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
