"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/project-vault", label: "Project Vault" },

];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-sm font-semibold tracking-[0.16em] uppercase hover:text-[#F3EFE8] transition";

  return (
    <header className="sticky top-0 z-40 border-b border-[#E6DCC7] bg-[#0A2A5A]/95 backdrop-blur">
      
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo + name */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-black">
            <Image
              src="/images/dcdclogo.jpg"
              alt="DCDC Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-[0.18em] text-[#F3EFE8]">
            DCDC
            <span className="ml-[2px] text-sm font-normal text-[#D9E4FF]">
              .
            </span>
          </span>
        </Link>

        {/* Desktop links (md and above) */}
        <div className="hidden items-center gap-8 text-[#D9E4FF] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger (only on small screens) */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1B4C9A] text-[#F3EFE8] md:hidden"
        >
          <div className="flex flex-col gap-[4px]">
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#F3EFE8] transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#F3EFE8] transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#F3EFE8] transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
        
      </nav>
      
      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-[#12366B] bg-[#0A2A5A] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-2 text-sm font-semibold tracking-[0.16em] uppercase text-[#D9E4FF] hover:bg-[#12366B] hover:text-[#F3EFE8]"
                  onClick={() => setOpen(false)} // close menu after click
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
