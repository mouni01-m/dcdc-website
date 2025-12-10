"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
  type="button"
  onClick={() => setOpen((prev) => !prev)}
  className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full 
              bg-[#F3EFE8] text-[#0A2A5A] px-6 py-3 text-xs font-semibold 
              uppercase tracking-[0.18em] shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              hover:brightness-105 hover:translate-y-[1px] transition"
>
  <span className="text-lg">📞</span>
  <span>Contact Core Team</span>
</button>


      {/* Sliding Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ duration: 0.2 }}
  className="
    fixed bottom-20 right-5
    z-[9999]
    w-80 max-w-[90vw]
    rounded-2xl border border-[#E0D6C5]
    bg-[#F3EFE8] text-[#102A54]
    shadow-[0_18px_40px_rgba(0,0,0,0.45)]
  "
>

            <div className="flex items-center justify-between border-b border-[#E0D6C5] px-4 py-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#8B6F4F] uppercase">
                  Need Help?
                </p>
                <p className="text-sm font-bold">Reach out to DCDC Core</p>
              </div>
              {/* small close button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-xs text-[#7B7E8C] hover:bg-black/5"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 px-4 py-3 text-sm">
              {/* President */}
              <div className="rounded-xl bg-white/80 p-3">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#8B6F4F] uppercase">
                  President
                </p>
                <p className="text-base font-bold">Mounishan M</p>

                <div className="mt-2 space-y-1 text-xs">
                  <p>📞 +91 96550 82924</p>
                  <p>✉️ mm3216@srmist.edu.in</p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                  <a
                    href="tel:+919655082924"
                    className="rounded-full bg-[#1B4C9A] px-3 py-1 text-[#F3EFE8]"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/919655082924"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#1B4C9A] bg-white px-3 py-1 text-[#1B4C9A]"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:mm3216@srmist.edu.in"
                    className="rounded-full border border-[#C9BDAA] bg-white px-3 py-1 text-[#5A4D39]"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Vice President */}
              <div className="rounded-xl bg-white/80 p-3">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#8B6F4F] uppercase">
                  Vice President
                </p>
                <p className="text-base font-bold">Karthik Krishna</p>

                <div className="mt-2 space-y-1 text-xs">
                  <p>📞 +91 92821 09888</p>
                  <p>✉️ km4860@srmist.edu.in</p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                  <a
                    href="tel:+919282109888"
                    className="rounded-full bg-[#1B4C9A] px-3 py-1 text-[#F3EFE8]"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/919282109888"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#1B4C9A] bg-white px-3 py-1 text-[#1B4C9A]"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:km4860@srmist.edu.in"
                    className="rounded-full border border-[#C9BDAA] bg-white px-3 py-1 text-[#5A4D39]"
                  >
                    Email
                  </a>
                </div>
              </div>

              <p className="pb-2 text-[11px] text-[#7B7E8C]">
                Please contact them during college hours for event or club-related
                queries.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
