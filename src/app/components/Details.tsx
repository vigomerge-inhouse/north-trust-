import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import neatHomeImg from "../../imports/hero/Neat_and_clean_home_with_peace.jpg";
import masterBedroomImg from "../../imports/hero/Giant_master_bedroom__walk-in_closet.jpg";
import guestBathImg from "../../imports/hero/Guest_Bathroom.jpg";
import guestRoomImg from "../../imports/hero/Guest_Room_1__II.jpg";
import privateForestImg from "../../imports/detailspage/Private_Forest.jpg";

const SPECS = [
  { label: "Property type", value: "Masterfully renovated ranch — single story" },
  { label: "Bedrooms / Baths", value: "3 Bedrooms / 2 Full Baths" },
  { label: "Garage", value: "Two-car detached with ample storage" },
  { label: "Lot size", value: "Private 2-acre parcel" },
  { label: "Basement", value: "Partially finished full basement" },
  { label: "Kitchen", value: "High-end stainless appliances, spacious island, quartz countertops" },
  { label: "Primary suite", value: "King-sized with walk-in closet; cast iron soaking tub & ceramic marble shower" },
  { label: "Guest bedrooms", value: "Two spacious queen-sized rooms with generous closets" },
  { label: "Flooring", value: "Brand-new throughout entire home" },
  { label: "Water", value: "Recently tested drilled well — provided by landlord" },
  { label: "Utilities", value: "Electricity, heating & internet — tenant responsibility (easily activated)" },
  { label: "Outdoor", value: "Wrap-around porch, spacious deck, 2-acre private yard" },
  { label: "Yard maintenance", value: "Landlord-maintained · Winter snowplowing included" },
  { label: "Pets", value: "Dog-friendly · Dog-friendly perimeter fence planned for installation" },
  { label: "Road access", value: "300 ft from Crockett Ridge Road" },
  { label: "Water access", value: "Norway Lake & North Pond — 2 miles (public boat ramps)" },
  { label: "Nearest town", value: "Norway, Maine (est. 1797) — 10 minutes" },
  { label: "Portland", value: "1 hour" },
  { label: "Boston", value: "3 hours" },
  { label: "Ski areas & Golf", value: "45 minutes" },
  { label: "Availability", value: "Immediately available for long-term rental" },
];

const ALL_PHOTOS = [
  { url: neatHomeImg, label: "Exceptional Country Living" },
  { url: masterBedroomImg, label: "Brand New Kitchen / Modern Interior Feel" },
  { url: guestRoomImg, label: "Living Room Access & Open Layout" },
  { url: guestBathImg, label: "Guest Bathroom & Modern Fixtures" },

  // reused local images instead of external URLs
  { url: masterBedroomImg, label: "Master Bedroom Suite" },
  { url: guestBathImg, label: "Luxury Bathroom Spa Feel" },
  { url: guestRoomImg, label: "Guest Room Comfort" },
  { url: neatHomeImg, label: "Open Living Experience" },

  { url: privateForestImg, label: "Private Forest Surroundings" },
  { url: privateForestImg, label: "Nature Trails & Privacy" },
  { url: privateForestImg, label: "Deep Woodland Views" },
  { url: privateForestImg, label: "Secluded Outdoor Space" },

  { url: neatHomeImg, label: "Front Exterior View" },
  { url: masterBedroomImg, label: "Interior Comfort Living" },
  { url: guestRoomImg, label: "Extra Bedroom Space" },
  { url: guestBathImg, label: "Clean Modern Bathroom" },
];

interface DetailsProps {
  onSchedule: () => void;
}

export function Details({ onSchedule }: DetailsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="details" className="bg-[#0b1a2e] py-24 px-6 md:px-16 relative overflow-hidden" style={{ height: "100vh", width: "100%" }}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] rounded-full bg-[#c9a96e] blur-[150px]" />
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
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Property Details</span>
          </div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Georgia, serif", lineHeight: 1.1 }}
          >
            Full specifications
          </h2>
        </motion.div>

        {/* Specs Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 rounded-3xl overflow-hidden border border-white/10"
          style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}
        >
          {SPECS.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex flex-col sm:flex-row gap-2 sm:gap-8 px-6 py-4 border-b border-white/5 last:border-0 ${
                i % 2 === 0 ? "bg-white/3" : "bg-transparent"
              } hover:bg-[#c9a96e]/5 transition-colors`}
            >
              <div className="text-[#c9a96e]/80 text-sm sm:w-52 flex-shrink-0">{spec.label}</div>
              <div className="text-white/80 text-sm">{spec.value}</div>
            </div>
          ))}
        </motion.div>

        {/* All Photos Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-widest uppercase">All Photos · Complete Photo Gallery</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {ALL_PHOTOS.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                style={{
                  height: i === 0 || i === 5 ? 280 : 180,
                  gridColumn: i === 0 ? "span 2" : "span 1",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
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
          className="text-center p-12 rounded-3xl border border-[#c9a96e]/20 bg-gradient-to-br from-[#c9a96e]/8 to-transparent"
        >
          <p className="text-[#c9a96e] text-sm tracking-widest uppercase mb-3">Don't miss this renovated ranch gem</p>
          <p className="text-white text-xl mb-2" style={{ fontFamily: "Georgia, serif" }}>
            A rare opportunity — move-in ready, immediately available.
          </p>
          <p className="text-white/50 mb-8">
            Landlord is amenable to working with you to make this house your home.
          </p>
          <button
            onClick={onSchedule}
            className="bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#c9a96e]/40 hover:scale-105 transition-all duration-300"
          >
            Schedule Your Private Showing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
