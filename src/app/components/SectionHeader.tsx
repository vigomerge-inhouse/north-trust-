import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, titleAccent, subtitle, center = false, light = false }: SectionHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
          <div className="h-px w-10 bg-[#c9a055]" />
          <span className="text-[#c9a055] text-xs tracking-[0.2em] uppercase font-medium">{eyebrow}</span>
          {center && <div className="h-px w-10 bg-[#c9a055]" />}
        </div>
      )}
      <h2
        className={light ? "text-[#08121d]" : "text-white"}
        style={{
          fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
          fontFamily: "'Playfair Display', Georgia, serif",
          lineHeight: 1.12,
        }}
      >
        {title}
        {titleAccent && (
          <>
            <br />
            <span style={{ color: "#c9a055" }}>{titleAccent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className="mt-4 max-w-2xl leading-relaxed text-base"
          style={{ color: light ? "rgba(8,18,29,0.6)" : "rgba(244,239,229,0.58)", ...(center ? { marginLeft: "auto", marginRight: "auto" } : {}) }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
