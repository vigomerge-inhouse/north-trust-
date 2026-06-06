import { motion } from "motion/react";
import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { NprtLogo } from "./NprtLogo";

const NAV_ITEMS = [
  { label: "Overview", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Outdoor", href: "/outdoor" },
  { label: "Location", href: "/location" },
  { label: "Details", href: "/details" },
];

interface FooterProps {
  onSchedule: () => void;
}

export function Footer({ onSchedule }: FooterProps) {
  return (
    <footer className="bg-[#040d1a] border-t border-[#c9a96e]/15 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <NprtLogo size={48} />
              <div>
                <div className="text-white font-semibold">North Pond Realty Trust</div>
                <div className="text-[#c9a96e] text-xs tracking-widest uppercase">Norway, Maine</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Presenting Ranch Retreat — a masterfully renovated single-story home on a private 2-acre parcel in the
              scenic Oxford Hills of Norway, Maine. Immediately available for long-term rental.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-[#4ade80] text-xs">Available Now · Move-In Ready</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#c9a96e] text-xs tracking-widest uppercase mb-4">Property Pages</h4>
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-white/50 text-sm hover:text-white transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={onSchedule}
                className="block text-[#c9a96e] text-sm hover:text-[#e8c37a] transition-colors py-0.5"
              >
                Schedule Showing →
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a96e] text-xs tracking-widest uppercase mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin size={14} className="text-[#c9a96e] flex-shrink-0" />
                <span>Crockett Ridge Road · Norway, Maine 04268</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={14} className="text-[#c9a96e] flex-shrink-0" />
                <span>contact@northpondrealty.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone size={14} className="text-[#c9a96e] flex-shrink-0" />
                <span>12022583575</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onSchedule}
              className="mt-6 bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white px-6 py-2.5 rounded-full text-sm font-semibold w-full hover:shadow-xl hover:shadow-[#c9a96e]/20 transition-shadow"
            >
              Schedule Private Showing
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#c9a96e] text-xs">
  © 2026 North Pond Realty Trust · Developed By{" "}
  <a
    href="https://www.vigomerge.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Vigomerge Inc
  </a>
</p>
           <p className="text-[#c9a96e] text-xs">
            All photography and content © North Pond Realty Trust
          </p>
        </div>
      </div>
    </footer>
  );
}
