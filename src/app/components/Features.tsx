import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import heroBg from "../../imports/features/stonetree-5.jpg";
import img5 from "../../imports/features/stonetree-5.jpg";
import img6 from "../../imports/features/stonetree-6.jpg";
import img11 from "../../imports/features/stonetree-11.jpg";
import img12 from "../../imports/features/stonetree-12.jpg";
import img13 from "../../imports/features/stonetree-13.jpg";
import img48 from "../../imports/features/stonetree-48.jpg";
import img59 from "../../imports/features/stonetree-59.jpg";
import img61 from "../../imports/features/stonetree-61.jpg";
import img63 from "../../imports/features/stonetree-63.jpg";
import img64 from "../../imports/features/stonetree-64.jpg";

//import livingImg from "../../imports/features/LIVING_IMG2.jpg";
import livingImg from "../../imports/features/LIVING_IMG2.jpg";
const FEATURES = [
  {
    num: "01",
    title: "Modern Kitchen",
    desc: "High-end stainless appliances, spacious island, quartz countertops, and bright natural light.",
    img: img5,
    img2: img6,
  },
  {
    num: "02",
    title: "Primary Suite",
    desc: "King-sized suite with walk-in closet and spa-like bathroom finishes.",
    img: img11,
    img2: img12,
  },
  {
    num: "03",
    title: "Guest Bedrooms",
    desc: "Comfortable rooms with clean design and natural lighting.",
    img: img12,
    img2: img13,
  },
  {
    num: "04",
    title: "Living & Dining",
    desc: "Open layout with modern finishes and warm natural light.",
    img: img6,
    img2: img5,
  },
  {
    num: "05",
    title: "Laundry & Utility",
    desc: "Dedicated laundry space with storage and modern convenience.",
    img: img48,
    img2: img59,
  },
  {
    num: "06",
    title: "Outdoor & Surroundings",
    desc: "Private land, scenic views, and peaceful natural surroundings.",
    img: img61,
    img2: img63,
  },
  {
    num: "07",
    title: "Garage & Storage",
    desc: "Spacious detached garage with ample storage capacity.",
    img: img64,
    img2: img13,
  },
];


function FeatureCard({ feature, index, onSchedule }: { feature: typeof FEATURES[0]; index: number; onSchedule: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      {/* Text — alternating sides */}
      <div className={`${isEven ? "order-1" : "order-1 lg:order-2"} space-y-4`}>
        <div className="flex items-baseline gap-4">
          <span
            className="text-[#c9a96e]/30 font-bold"
            style={{ fontSize: "4rem", fontFamily: "Georgia, serif", lineHeight: 1 }}
          >
            {feature.num}
          </span>
          <h3 className="text-white text-2xl" style={{ fontFamily: "Georgia, serif" }}>
            {feature.title}
          </h3>
        </div>
        <p className="text-white/60 leading-relaxed pl-16">{feature.desc}</p>
        <div className="pl-16">
          <button
            onClick={onSchedule}
            className="flex items-center gap-2 text-[#c9a96e] text-sm hover:gap-4 transition-all group"
          >
            Schedule a Showing
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Images */}
      <div
        className={`${isEven ? "order-2" : "order-2 lg:order-1"} flex gap-3 h-72`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          animate={{ flex: hovered ? 0.6 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative overflow-hidden rounded-2xl shadow-2xl min-w-0"
        >
          <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/40 to-transparent" />
        </motion.div>
        <motion.div
          animate={{ flex: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative overflow-hidden rounded-2xl shadow-2xl min-w-0"
        >
          <img src={feature.img2} alt={feature.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/40 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
}

interface FeaturesProps {
  onSchedule: () => void;
}

export function Features({ onSchedule }: FeaturesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="features" className="bg-[#071322] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Home Features</span>
          </div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Georgia, serif", lineHeight: 1.1 }}
          >
            Every detail<br />
            <span style={{ color: "#c9a96e" }}>thoughtfully refreshed</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl">
            Brand-new stainless-steel appliances, stunning quartz countertops, elegant fixtures, and beautiful new
            flooring throughout. Clean, bright spaces with four-season views of your private acreage.
          </p>
        </motion.div>

        <div className="space-y-20">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.num} feature={f} index={i} onSchedule={onSchedule} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center p-10 rounded-3xl border border-[#c9a96e]/20 bg-gradient-to-br from-[#c9a96e]/5 to-transparent"
        >
          <p className="text-white/60 mb-2">Love what you see?</p>
          <p className="text-white mb-6">This turnkey ranch is move-in ready and immediately available for long-term rental.</p>
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
