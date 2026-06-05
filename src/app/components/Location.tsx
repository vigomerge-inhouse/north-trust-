import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Waves, Mountain, Building2, Trees, Navigation, Clock } from "lucide-react";
// LOCAL IMAGES ONLY
import outdoor1 from "../../imports/features/stonetree-61.jpg";
import outdoor2 from "../../imports/features/stonetree-63.jpg";
import forestImg from "../../imports/outdoor/Private_Forest.jpg";
import neatHomeImg from "../../imports/hero/Neat_and_clean_home_with_peace.jpg";

const DISTANCES = [
  { value: "1hr", label: "Portland, ME", icon: Building2, color: "#4a9eff" },
  { value: "45min", label: "Ski Areas & Golf", icon: Mountain, color: "#c9a96e" },
  { value: "3hrs", label: "Boston, MA", icon: Building2, color: "#7c6af7" },
  { value: "2mi", label: "Lake Boat Ramps", icon: Waves, color: "#4ade80" },
  { value: "300ft", label: "Crockett Ridge Rd", icon: Navigation, color: "#f87171" },
  { value: "10min", label: "Downtown Norway", icon: Clock, color: "#fb923c" },
];

const LOCATION_FEATURES = [
  { icon: Waves, label: "Waterfront Access", desc: "Norway Lake & North Pond — 2 miles, public boat ramps available" },
  { icon: Mountain, label: "Ski & Golf", desc: "Maine's best ski areas and golf courses — just 45 minutes away" },
  { icon: Building2, label: "City Access", desc: "Portland 1 hr · Boston 3 hrs · Downtown Norway minutes away" },
  { icon: Trees, label: "Nature", desc: "Oxford Hills scenic region — hiking, canoeing, wildlife all nearby" },
];

const GALLERY = [
  { url: outdoor1, label: "Private Grounds", span: "col-span-2 row-span-2" },
  { url: forestImg, label: "Private Forest", span: "col-span-1 row-span-1" },
  { url: outdoor2, label: "Natural Views", span: "col-span-1 row-span-1" },
  { url: outdoor1, label: "Open Space", span: "col-span-1 row-span-1" },
  { url: outdoor2, label: "Walking Trails", span: "col-span-1 row-span-1" },
  { url: forestImg, label: "Secluded Nature", span: "col-span-1 row-span-1" },
  { url: neatHomeImg, label: "Country Setting", span: "col-span-1 row-span-1" },
  { url: forestImg, label: "Nature Escape", span: "col-span-1 row-span-1" },
];

interface LocationProps {
  onSchedule: () => void;
}

export function Location({ onSchedule }: LocationProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="location" className="relative overflow-hidden" style={{ height: "100vh", width: "100%" }}>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Location</span>
          </div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Georgia, serif", lineHeight: 1.1 }}
          >
            Close to everything,<br />
            <span style={{ color: "#c9a96e" }}>private by nature</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl">
            Set 300 feet from Crockett Ridge Road on a private 2-acre parcel — worlds away yet conveniently close.
            Minutes from Norway, Maine (est. 1797) in the scenic Oxford Hills. Norway Lake and North Pond, each with
            public boat ramps, are just a two-mile drive from the driveway.
          </p>
        </motion.div>

        {/* Distance Grid */}
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
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-[#c9a96e]/40 transition-colors group"
                style={{
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                  perspective: 400,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${d.color}20`, border: `1px solid ${d.color}40` }}
                >
                  <Icon size={18} style={{ color: d.color }} />
                </div>
                <div
                  className="font-bold mb-1"
                  style={{ color: d.color, fontSize: "1.4rem", fontFamily: "Georgia, serif" }}
                >
                  {d.value}
                </div>
                <div className="text-white/50 text-xs leading-tight">{d.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {LOCATION_FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#c9a96e]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#c9a96e]" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">{f.label}</div>
                  <div className="text-white/50 text-sm">{f.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Map Placeholder with 3D style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 relative rounded-3xl overflow-hidden"
          style={{ height: 320, boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,110,0.2)" }}
        >
          <img
            src="outdoor1.jpg"
            alt="View from North Pond"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">View from North Pond</span>
            <h3 className="text-white text-2xl mt-1" style={{ fontFamily: "Georgia, serif" }}>
              Oxford Hills · Norway, Maine
            </h3>
          </div>
          {/* Pin indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-6 rounded-full bg-[#c9a96e] border-4 border-white shadow-2xl"
            />
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full bg-[#c9a96e]"
            />
          </div>
        </motion.div>

        {/* Area Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Area Photos · The Oxford Hills Region</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{ height: 200, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              >
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium">{photo.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 mb-4">Visit this remarkable retreat</p>
          <button
            onClick={onSchedule}
            className="bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#c9a96e]/30 hover:scale-105 transition-all duration-300"
          >
            Schedule a Showing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
