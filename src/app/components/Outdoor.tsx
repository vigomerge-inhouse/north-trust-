import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, TreePine } from "lucide-react";
import outdoor1 from "../../imports/features/stonetree-61.jpg";
import outdoor2 from "../../imports/features/stonetree-63.jpg";
import forestImg from "../../imports/outdoor/Private_Forest.jpg";

const OUTDOOR_GALLERY = [
  {
    url: outdoor1,
    label: "Private Grounds",
    size: "col-span-2 row-span-2",
  },
  {
    url: outdoor2,
    label: "Natural Views",
    size: "col-span-1 row-span-1",
  },
  {
    url: forestImg,
    label: "Private Forest",
    size: "col-span-1 row-span-1",
  },
  {
    url: outdoor1,
    label: "Open Land Space",
    size: "col-span-1 row-span-1",
  },
  {
    url: outdoor2,
    label: "Walking Trails",
    size: "col-span-1 row-span-1",
  },
  {
    url: forestImg,
    label: "Secluded Nature Escape",
    size: "col-span-1 row-span-1",
  },
];

const PERKS = [
  "Wrap-around porch & spacious deck",
  "Landlord yard maintenance year-round",
  "Winter snowplowing included",
  "Dog-friendly perimeter fence (planned)",
  "Wildlife watching & stargazing",
  "Endless landscaping possibilities",
  "Create gardens, trails, or meadows",
];

interface OutdoorProps {
  onSchedule: () => void;
}

export function Outdoor({ onSchedule }: OutdoorProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="outdoor" className="relative overflow-hidden" style={{ height: "100vh", width: "100%" }}>

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#c9a96e] blur-[120px]" />
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
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Outdoor Living</span>
          </div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Georgia, serif", lineHeight: 1.1 }}
          >
            Two private acres,<br />
            <span style={{ color: "#c9a96e" }}>yours to enjoy</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl">
            True seclusion on two private acres with a charming wrap-around porch and spacious deck. Landlord maintains
            the yard, provides winter snowplowing, and will install a dog-friendly perimeter fence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* The Grounds Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <TreePine size={20} className="text-[#c9a96e]" />
              <h3 className="text-white text-xl" style={{ fontFamily: "Georgia, serif" }}>
                The Grounds · Nature at your doorstep
              </h3>
            </div>
            <p className="text-white/60 leading-relaxed mb-8">
              Your private 2-acre yard offers endless opportunities to enjoy the outdoors across all four seasons.
              Whether watching wildlife, stargazing, or simply breathing in the fresh Maine air, this private oasis
              celebrates every season.
            </p>

            <div className="space-y-3 mb-8">
              {PERKS.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <Check size={16} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{p}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-2 border-[#c9a96e] pl-4 py-2">
              <p className="text-white/50 text-sm italic leading-relaxed">
                "Create gardens, trails, or meadows that enhance the natural beauty. Mature trees and open space invite
                wildlife and seasonal color — the landlord supports your vision to keep this outdoor oasis flourishing
                year-round."
              </p>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative h-[500px] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,169,110,0.2)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1754597215918-b4b1f113ca77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmFwJTIwYXJvdW5kJTIwcG9yY2glMjBjb3VudHJ5JTIwaG9tZXxlbnwxfHx8fDE3ODAzMDc4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wrap-around porch"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-semibold" style={{ fontFamily: "Georgia, serif" }}>
                  Wrap-around porch
                </span>
              </div>
            </div>

            {/* Floating card */}
            <div
              className="absolute -bottom-6 -right-6 bg-[#071322] border border-[#c9a96e]/30 rounded-2xl p-4 shadow-2xl"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c9a96e]/20 flex items-center justify-center">
                  <TreePine size={18} className="text-[#c9a96e]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">2 Private Acres</div>
                  <div className="text-white/50 text-xs">Fully maintained</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Outdoor Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Outdoor Gallery · Four Seasons of Beauty</span>
          </div>

          <div className="grid grid-cols-3 gap-3 h-[480px]">
            {OUTDOOR_GALLERY.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.size}`}
                style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.label}</span>
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
          className="text-center"
        >
          <p className="text-white/50 mb-2">Experience it yourself</p>
          <p className="text-white mb-6">Schedule a private showing and see why this outdoor retreat is truly one-of-a-kind.</p>
          <button
            onClick={onSchedule}
            className="bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#c9a96e]/30 hover:scale-105 transition-all duration-300"
          >
            Book a Showing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
