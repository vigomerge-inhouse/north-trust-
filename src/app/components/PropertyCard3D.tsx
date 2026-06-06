import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";
import { Bed, Bath, Car, Trees, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import neatHomeImg from "../../imports/PropertyHighlight/Neat_and_clean_home_with_peace.jpg";

const BADGES = [
  { icon: Bed, label: "3 Beds" },
  { icon: Bath, label: "2 Baths" },
  { icon: Car, label: "2-Car Garage" },
  { icon: Trees, label: "2 Acres" },
];

interface PropertyCard3DProps {
  onSchedule: () => void;
}

export function PropertyCard3D({ onSchedule }: PropertyCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
   <section className="relative py-24 px-6 md:px-16" style={{ background: "var(--np-bg-mid)" }}>
  <div className="max-w-7xl mx-auto flex flex-col items-center">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-[#c9a96e]" />
          <span className="text-[#c9a96e] text-xs tracking-widest uppercase">RanchRetreat</span>
          <div className="h-px w-12 bg-[#c9a96e]" />
        </div>
        <h2
          className="text-white"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Georgia, serif", lineHeight: 1.1 }}
        >
          Don't miss this<br />
          <span style={{ color: "#c9a96e" }}>renovated ranch gem</span>
        </h2>
        <p className="text-white/50 mt-4 max-w-lg mx-auto">
          A rare opportunity to rent a move-in-ready home perfectly balancing modern comfort, private
          nature-filled living, and four-season appeal.
        </p>
      </motion.div>

      {/* 3D Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000 }}
        className="w-full max-w-lg cursor-pointer"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="rounded-3xl overflow-hidden relative"
          whileHover={{ scale: 1.02 }}
        >
          {/* Card Image */}
          <div className="relative h-72">
            <img src={neatHomeImg} alt="Ranch Retreat" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e] via-[#0b1a2e]/20 to-transparent" />

            {/* Available badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#c9a96e] px-3 py-1.5 rounded-full shadow-lg">
              <Star size={12} className="text-white fill-white" />
              <span className="text-white text-xs font-semibold tracking-wide">Available Now</span>
            </div>

            {/* Type badge */}
            <div className="absolute top-4 left-4 bg-[#0b1a2e]/80 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
              <span className="text-white text-xs">Long-Term Rental</span>
            </div>
          </div>

          {/* Card Content */}
          <div
            className="p-6"
            style={{
              background: "linear-gradient(135deg, #0f2137, #0b1a2e)",
              border: "1px solid rgba(201,169,110,0.25)",
              borderTop: "none",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-white text-xl mb-1" style={{ fontFamily: "Georgia, serif" }}>
                  Ranch Retreat
                </h3>
                <p className="text-[#c9a96e] text-sm">Norway, Maine · Oxford Hills</p>
              </div>
              <div className="text-right">
                <div className="text-white/40 text-xs">Contact for</div>
                <div className="text-[#c9a96e] font-semibold">Pricing</div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-6">
              {BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 bg-white/5 rounded-xl p-2 border border-white/8">
                  <Icon size={16} className="text-[#c9a96e]" />
                  <span className="text-white/60 text-xs text-center leading-tight">{label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onSchedule}
              className="w-full bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white py-3 rounded-xl font-semibold text-sm tracking-wide hover:shadow-2xl hover:shadow-[#c9a96e]/30 transition-all duration-300"
            >
              Schedule Your Private Showing
            </button>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
