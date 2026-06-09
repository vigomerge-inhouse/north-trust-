import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  breadcrumbs?: BreadcrumbItem[];
  height?: string;
}

export function PageHero({ image, eyebrow, title, titleAccent, breadcrumbs, height = "55vh" }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden" style={{ height, minHeight: 360 }}>
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Multi-layer gradient for depth */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,18,29,0.55) 0%, rgba(8,18,29,0.18) 40%, rgba(8,18,29,0.95) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(60,60,70,0.55) 0%, transparent 60%)" }} />

      {/* Subtle vignette */}
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 120px rgba(60,60,70,0.4)" }} />

      <div className="absolute bottom-10 left-8 md:left-16 max-w-2xl">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <div className="flex items-center gap-1.5 mb-5">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={11} className="text-white/30" />}
                {crumb.href ? (
                  <Link to={crumb.href} className="text-[#c9a055]/65 hover:text-[#c9a055] transition-colors text-xs tracking-widest uppercase">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#c9a055] text-xs tracking-widest uppercase">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}

        {eyebrow && (
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#c9a055]" />
            <span className="text-[#c9a055] text-xs tracking-[0.2em] uppercase">{eyebrow}</span>
          </div>
        )}

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: 1.1,
            color: "#f4efe5",
          }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span style={{ color: "#c9a055" }}>{titleAccent}</span>
            </>
          )}
        </h1>
      </div>
    </div>
  );
}
