import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { Waves, Mountain, Building2, Trees, Navigation, Clock, ArrowRight, ChevronRight, Anchor, MapPin, Star } from "lucide-react";

// LOCAL IMAGES
import privateForestImg from "../../imports/location/Private_Forest.jpg";
import privateForest2Img from "../../imports/location/Private_Forest-1.jpeg";
import naturetrial from "../../imports/location/naturetrial.jpg";
import outdoor2 from "../../imports/location/stonetree-63.jpg";
import neatHomeImg from "../../imports/location/country-acess.jpg";
import stonetree from "../../imports/location/stonetree-12.jpg";
import stonetree2 from "../../imports/location/stonetree-48.jpg";
import privatewoods from "../../imports/location/private-woods.jpg";
import hs2Img from "../../imports/location/HS-2.jpeg";
const SLIDES = [
 
  {
    url: privateForestImg,
    label: "Two Wooded Acres",
    sub: "Create Trails · Gardens · Meadows",
    tag: "Private Land",
    position: "object-center",
  },
  {
    url: naturetrial,
    label: "Oxford Hills",
    sub: "Norway Lake & North Pond Just 2 Miles Away",
    tag: "Location",
    position: "object-center",
  },
  {
    url: outdoor2,
    label: "Natural Views",
    sub: "Four Seasons of Scenic Beauty",
    tag: "Surroundings",
    position: "object-center",
  },
  {
    url: neatHomeImg,
    label: "Country Living",
    sub: "1 Hour to Portland · 45 Min to Ski & Golf · 3 Hours to Boston",
    tag: "Access",
    position: "object-bottom",
  },
];

const DISTANCES = [
  { value: "1hr", label: "Portland, ME", sub: "Maine's largest city", icon: Building2, color: "#4a9eff" },
  { value: "45min", label: "Ski Areas & Golf", sub: "Sunday River, Shawnee Peak", icon: Mountain, color: "#c9a96e" },
  { value: "3hrs", label: "Boston, MA", sub: "Major metro access", icon: Building2, color: "#7c6af7" },
  { value: "2mi", label: "Lake Boat Ramps", sub: "Norway Lake & North Pond", icon: Waves, color: "#4ade80" },
  { value: "300ft", label: "Crockett Ridge Rd", sub: "Road access from driveway", icon: Navigation, color: "#f87171" },
  { value: "10min", label: "Downtown Norway", sub: "Shops, dining & services", icon: Clock, color: "#fb923c" },
];

const AREA_HIGHLIGHTS = [
  {
    icon: Waves,
    color: "#4ade80",
    title: "Waterfront Access",
    subtitle: "Norway Lake & North Pond",
    desc: "Two public boat ramps just 2 miles from the driveway. Norway Lake and North Pond offer boating, fishing, swimming, kayaking, and paddleboarding through all warm-weather months. This is Maine lake country at its finest.",
    distance: "2 miles away",
  },
  {
    icon: Mountain,
    color: "#c9a96e",
    title: "Ski & Golf",
    subtitle: "World-Class Recreation",
    desc: "Maine's premier ski areas including Sunday River and Shawnee Peak are within 45 minutes. Multiple championship golf courses are equally accessible. Four-season recreation is not just a promise — it's a reality here.",
    distance: "45 minutes",
  },
  {
    icon: Building2,
    color: "#4a9eff",
    title: "Portland, Maine",
    subtitle: "Maine's Cultural Hub",
    desc: "Portland — Maine's largest city and one of America's most celebrated small cities — is just one hour away. World-class dining, arts, Old Port, Jetport, shopping, and Maine Medical Center are all within easy reach.",
    distance: "1 hour",
  },
  {
    icon: Trees,
    color: "#7dd87f",
    title: "Oxford Hills Nature",
    subtitle: "Scenic Oxford County",
    desc: "The Oxford Hills region offers endless outdoor recreation: hiking, canoeing, wildlife watching, fly fishing, mountain biking, and snowmobiling. The White Mountains of NH are also within a short drive for alpine adventures.",
    distance: "At your door",
  },
  {
    icon: Anchor,
    color: "#90caf9",
    title: "Norway, Maine",
    subtitle: "Est. 1797 · Oxford County Seat",
    desc: "Norway is a charming New England town with deep history, dating to 1797. Downtown Norway offers grocery, pharmacy, hardware, local restaurants, healthcare, and the full suite of everyday conveniences — just 10 minutes away.",
    distance: "10 minutes",
  },
  {
    icon: Navigation,
    color: "#f87171",
    title: "Private Parcel",
    subtitle: "300 ft from Crockett Ridge Road",
    desc: "The property sits on a private 2-acre parcel approximately 300 feet from well-maintained Crockett Ridge Road. Access is easy year-round with landlord-provided snowplowing, yet the home feels truly private and secluded.",
    distance: "300 ft to road",
  },
];

const GALLERY_AREA = [
  { url: privatewoods, label: "Private Woods", span: "" },
  { url: privateForest2Img, label: "Forest Views", span: "" },
  { url:naturetrial, label: "Nature Trails", span: "" },
  { url: outdoor2, label: "Woodland Edge", span: "" },
  { url: neatHomeImg, label: "Country Access Road", span: "" },
  { url: stonetree, label: "Secluded Acres", span: "" },
  //{ url: stonetree2, label: "Nature Escape", span: "" },
];


interface LocationPageProps {
  onSchedule: () => void;
}

export function LocationPage({ onSchedule }: LocationPageProps) {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  return (
    <div className="min-h-screen bg-[#071322]">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: "100vh", width: "100%" }}>
{/* Map placeholder */}

<img
  src={SLIDES[0].url}
  alt={SLIDES[0].label}
  className="w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2e]/55 via-[#0b1a2e]/20 to-[#071322]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e]/60 to-transparent" />
        <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-4 text-xs tracking-widest uppercase">
            <Link to="/" className="text-[#c9a96e]/70 hover:text-[#c9a96e] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-white/30" />
            <span className="text-[#c9a96e]">Location</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Location · Norway, Maine</span>
          </div>
          <h1
            className="text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.1 }}
          >
            Close to everything,<br />
            <span style={{ color: "#c9a96e" }}>private by nature</span>
          </h1>
        </div>
      </div>

      {/* Distance Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">At a Glance · Drive Times from Property</span>
          </div>
          <p className="text-white/55 max-w-2xl">
            Set 300 feet from Crockett Ridge Road on a private 2-acre parcel — worlds away yet conveniently close.
            Minutes from Norway, Maine (est. 1797) in the scenic Oxford Hills.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {DISTANCES.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/4 border border-white/10 rounded-2xl p-5 text-center hover:border-[#c9a96e]/40 transition-colors group"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
              >
                <div className="w-11 h-11 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: `${d.color}18`, border: `1px solid ${d.color}35` }}>
                  <Icon size={18} style={{ color: d.color }} />
                </div>
                <div className="font-bold mb-1" style={{ color: d.color, fontSize: "1.5rem", fontFamily: "'Playfair Display', Georgia, serif" }}>{d.value}</div>
                <div className="text-white/70 text-xs font-medium">{d.label}</div>
                <div className="text-white/35 text-xs mt-0.5">{d.sub}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden mb-16"
          style={{ height: 340, boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,110,0.2)" }}
        >
          <img src={SLIDES[0].url} alt={SLIDES[0].label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">View from North Pond · 2 Miles from Property</span>
            <h3 className="text-white text-2xl mt-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Oxford Hills · Norway, Maine
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={13} className="text-[#c9a96e]" />
              <span className="text-white/55 text-sm">Oxford County · Est. 1797 · Lakes District</span>
            </div>
          </div>
          {/* Animated pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div animate={{ scale: [1, 1.35, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-5 h-5 rounded-full bg-[#c9a96e] border-3 border-white shadow-2xl" />
            <motion.div animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 rounded-full bg-[#c9a96e]" />
          </div>
        </motion.div>
      </section>

      {/* Area Highlights */}
      <section className="bg-[#060f1d] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Area Highlights</span>
            </div>
            <h2 className="text-white text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Everything Maine has to offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREA_HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-white/4 border border-white/10 rounded-2xl p-6 hover:border-[#c9a96e]/30 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${h.color}18`, border: `1px solid ${h.color}30` }}>
                      <Icon size={22} style={{ color: h.color }} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{h.title}</h3>
                      <p className="text-[#c9a96e] text-xs">{h.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed mb-3">{h.desc}</p>
                  <div className="inline-flex items-center gap-1 bg-white/6 border border-white/10 rounded-full px-3 py-1">
                    <Navigation size={10} className="text-[#c9a96e]" />
                    <span className="text-white/50 text-xs">{h.distance}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Area Gallery */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Area Photos · The Oxford Hills Region</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_AREA.map((img, i) => (
              <motion.div
                key={i}
                
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => setSelectedImage(img)}
                className="relative overflow-hidden rounded-3xl group cursor-pointer bg-white/5"
                style={{ boxShadow: "0 15px 40px rgba(0,0,0,0.4)" }}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium">
                    {img.label}
                  </p>
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
          <p className="text-white/50 mb-2">Visit this remarkable retreat</p>
          <p className="text-white text-xl mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Ideally located for those seeking peace without sacrificing convenience.
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
              to="/details"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/18 transition-all flex items-center gap-2"
            >
              Full Specifications
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
