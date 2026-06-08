import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Check } from "lucide-react";
import emailjs from "@emailjs/browser";
interface ScheduleModalProps {
  open: boolean;
  onClose: () => void;
}

const TIME_OPTIONS = [
  "Morning (9am – 12pm)",
  "Afternoon (12pm – 4pm)",
  "Evening (4pm – 7pm)",
  "Flexible / Any Time",
];

export function ScheduleModal({ open, onClose }: ScheduleModalProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    household: "1",
    message: "",
    hasPets: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await emailjs.send(
      "service_ujoaycd",
      "template_s7j9g18",
      {
         name: `${form.firstName} ${form.lastName}`,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        date: form.date,
        time: form.time,
        household: form.household,
        message: form.message,
        hasPets: form.hasPets ? "Yes" : "No",
      },
      "Vu5r565yJJY1yQGTw"
    );
    setSubmitted(true);
  } catch (error: any) {
    console.error("EmailJS Error:", JSON.stringify(error));
    alert("Error: " + JSON.stringify(error));
  }
};

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 400);
  };

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value }));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#030b18]/90 backdrop-blur-xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #0f2137 0%, #0b1a2e 100%)",
              border: "1px solid rgba(201,169,110,0.25)",
              boxShadow: "0 60px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,169,110,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <X size={16} />
            </button>

            {!submitted ? (
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-8 bg-[#c9a96e]" />
                    <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Ranch Retreat · Norway, Maine · Long-Term Rental</span>
                  </div>
                  <h2 className="text-white text-2xl" style={{ fontFamily: "Georgia, serif" }}>
                    Schedule a Private Showing
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-wide mb-1 block">First Name</label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={update("firstName")}
                        placeholder="Jane"
                        required
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a96e]/60 focus:bg-white/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-wide mb-1 block">Last Name</label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={update("lastName")}
                        placeholder="Smith"
                        required
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a96e]/60 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wide mb-1 block">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="jane@email.com"
                      required
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a96e]/60 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wide mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a96e]/60 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-wide mb-1 block">Preferred Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={update("date")}
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e]/60 focus:bg-white/10 transition-all [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-wide mb-1 block">Preferred Time</label>
                      <select
                        value={form.time}
                        onChange={update("time")}
                        style={{ background: "#0f2137", colorScheme: "dark" }}
                        className="w-full border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e]/60 transition-all"
                      >
                        <option value="" disabled>Select...</option>
                        {TIME_OPTIONS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wide mb-1 block">How many people in your household?</label>
                    <input
                      type="number"
                      value={form.household}
                      onChange={update("household")}
                      min="1"
                      max="10"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e]/60 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wide mb-1 block">Message / Questions (optional)</label>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us a bit about yourself and any questions you have…"
                      rows={3}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a96e]/60 focus:bg-white/10 transition-all resize-none"
                    />
                  </div>

                  {/* Pets checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={form.hasPets}
                        onChange={(e) => setForm((f) => ({ ...f, hasPets: e.target.checked }))}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-md border transition-all flex items-center justify-center ${form.hasPets
                          ? "bg-[#c9a96e] border-[#c9a96e]"
                          : "border-white/30 bg-white/5 group-hover:border-[#c9a96e]/50"
                          }`}
                      >
                        {form.hasPets && <Check size={12} className="text-white" />}
                      </div>
                    </div>
                    <span className="text-white/70 text-sm">
                      I have pets{" "}
                      <span className="text-white/40">(dog-friendly property — perimeter fence planned)</span>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#c9a96e] to-[#a07840] text-white py-4 rounded-xl font-semibold text-sm tracking-wide hover:shadow-2xl hover:shadow-[#c9a96e]/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 mt-2"
                  >
                    Send Request
                    <Send size={16} />
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#c9a96e]/20 border border-[#c9a96e]/40 flex items-center justify-center mx-auto mb-6">
                  <Check size={36} className="text-[#c9a96e]" />
                </div>
                <h3 className="text-white text-2xl mb-3" style={{ fontFamily: "Georgia, serif" }}>
                  Request Received!
                </h3>
                <p className="text-white/60 mb-2">Thank you, {form.firstName || "there"}!</p>
                <p className="text-white/50 text-sm mb-8">
                  We'll be in touch shortly to confirm your showing at Ranch Retreat, Norway, Maine.
                </p>
                <button
                  onClick={handleClose}
                  className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full text-sm hover:bg-white/20 transition-all"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
