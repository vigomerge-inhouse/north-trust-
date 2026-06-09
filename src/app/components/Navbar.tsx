import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Home, Layers, BedDouble, Star, Trees, MapPin, FileText, Waves, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router";
import { NprtLogo } from "./NprtLogo";

const NAV_GROUPS = [
  {
    label: "Property",
    items: [
      { label: "Overview", href: "/", icon: Home, desc: "Welcome & introduction" },
      { label: "Modern Living", href: "/modern-living", icon: Sparkles, desc: "Contemporary comfort & design" },
      { label: "Property Highlights", href: "/property-highlights", icon: Star, desc: "Key features at a glance" },
    ],
  },
  {
    label: "Interior",
    items: [
      { label: "Bedrooms", href: "/bedrooms", icon: BedDouble, desc: "King primary + 2 queen guest" },
      { label: "Premium Features", href: "/premium-features", icon: Layers, desc: "Finishes, kitchen & baths" },
      { label: "Amenities", href: "/amenities", icon: Sparkles, desc: "All property amenities" },
      { label: "Features", href: "/features", icon: Layers, desc: "Detailed home features" },
    ],
  },
  {
    label: "Outdoors",
    items: [
      { label: "Outdoor Living", href: "/outdoor", icon: Trees, desc: "Porch, deck & 2 private acres" },
      { label: "Location", href: "/location", icon: MapPin, desc: "Norway, Maine & surroundings" },
    ],
  },
  {
    label: "Details",
    items: [
      { label: "Details & Gallery", href: "/details", icon: FileText, desc: "Full specs & all 20+ photos" },
    ],
  },
];

interface NavbarProps {
  onSchedule: () => void;
}

export function Navbar({ onSchedule }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveGroup(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isGroupActive = (group: typeof NAV_GROUPS[0]) =>
    group.items.some((i) => isActive(i.href));

  const showGroup = (label: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveGroup(label);
  };

  const hideGroup = () => {
    hideTimer.current = setTimeout(() => setActiveGroup(null), 180);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(8,18,29,0.97)" : "rgba(0,0,0,0.45)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(4px)",

          borderBottom: scrolled ? "1px solid var(--np-border)" : "none",
          boxShadow: scrolled ? "0 8px 40px rgba(8,18,29,0.6)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between" style={{ height: 68 }}>
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group flex-shrink-0 cursor-pointer">
            <motion.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 380 }}>
              <NprtLogo size={46} />
            </motion.div>
            <div className="leading-tight hidden sm:block">
              <div className="text-white font-semibold tracking-wide text-sm transition-colors duration-300 group-hover:text-[#c9a96e]">
                North Pond
              </div>
              <div className="text-[10px] tracking-[0.18em] uppercase" style={{ color: "var(--np-gold)" }}>Realty Trust</div>
            </div>
          </Link>

          {/* Desktop Nav Groups */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_GROUPS.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => showGroup(group.label)}
                onMouseLeave={hideGroup}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-full text-base font-extrabold tracking-wide transition-all duration-250"
                  style={{
                    color: isGroupActive(group) ? "var(--np-gold)" : "rgba(244,239,229,0.7)",
                    background: isGroupActive(group) || activeGroup === group.label ? "rgba(201,160,85,0.12)" : "transparent",
                  }}
                >
                  {group.label}
                  <ChevronDown
                    size={13}
                    className="transition-transform duration-200"
                    style={{ transform: activeGroup === group.label ? "rotate(180deg)" : "none" }}
                  />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeGroup === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      onMouseEnter={() => showGroup(group.label)}
                      onMouseLeave={hideGroup}
                      className="absolute top-full left-0 mt-2 w-60 rounded-2xl overflow-hidden z-10"
                      style={{
                        background: "rgba(10,22,36,0.98)",
                        border: "1px solid var(--np-border)",
                        boxShadow: "0 20px 60px rgba(8,18,29,0.7), 0 0 0 1px rgba(201,160,85,0.08)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      <div className="p-2">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          const active = isActive(item.href);
                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group"
                              style={{
                                background: active ? "var(--np-gold-glow)" : "transparent",
                              }}
                              onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                              onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{
                                  background: active ? "rgba(201,160,85,0.3)" : "rgba(255,255,255,0.06)",
                                  border: `1px solid ${active ? "var(--np-border-hv)" : "rgba(255,255,255,0.08)"}`,
                                }}
                              >
                                <Icon size={14} style={{ color: active ? "var(--np-gold)" : "rgba(244,239,229,0.55)" }} />
                              </div>
                              <div>
                                <div className="text-sm font-bold" style={{ color: active ? "var(--np-gold)" : "var(--np-text)" }}>
                                  {item.label}
                                </div>
                                <div className="text-xs mt-0.5" style={{ color: "var(--np-text-faint)" }}>{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Waves size={15} style={{ color: "var(--np-gold)", opacity: 0.6 }} className="hidden lg:block" />
            <button
              onClick={onSchedule}
              className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, var(--np-gold), var(--np-gold-dk))",
                color: "#08121d",
                boxShadow: "0 4px 20px var(--np-gold-glow)",
              }}
            >
              Schedule Showing
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl transition-colors"
              style={{ color: "var(--np-text)", background: mobileOpen ? "var(--np-surface)" : "transparent" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 lg:hidden overflow-y-auto"
            style={{
              maxHeight: "calc(100vh - 68px)",
              background: "rgba(8,18,29,0.99)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--np-border)",
            }}
          >
            <div className="p-4 space-y-1">
              {NAV_GROUPS.map((group) => (
                <div key={group.label}>
                  <div className="px-3 py-1.5 text-xs tracking-[0.18em] uppercase font-medium" style={{ color: "var(--np-gold)", opacity: 0.7 }}>
                    {group.label}
                  </div>
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors"
                        style={{
                          background: active ? "var(--np-gold-glow)" : "transparent",
                          border: active ? "1px solid var(--np-border)" : "1px solid transparent",
                        }}
                      >
                        <Icon size={16} style={{ color: active ? "var(--np-gold)" : "rgba(244,239,229,0.5)" }} />
                        <div>
                          <div style={{ color: active ? "var(--np-gold)" : "var(--np-text)", fontSize: "0.9rem" }}>{item.label}</div>
                          <div style={{ color: "var(--np-text-faint)", fontSize: "0.72rem" }}>{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ))}
              <div className="pt-3 pb-2">
                <button
                  onClick={() => { onSchedule(); setMobileOpen(false); }}
                  className="w-full py-3.5 rounded-2xl font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, var(--np-gold), var(--np-gold-dk))",
                    color: "#08121d",
                    boxShadow: "0 4px 20px var(--np-gold-glow)",
                  }}
                >
                  Schedule Private Showing
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
