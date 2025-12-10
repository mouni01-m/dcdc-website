"use client";

import Container from "../components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0A2A5A] py-12 md:py-16">
      <Container>
        {/* Wrapper for background effects */}
        <div className="relative">
          {/* Animated background blobs */}
          <motion.div
            className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#3DA5FF]/30 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[#1B4C9A]/40 blur-3xl"
            animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative grid items-stretch gap-6 md:grid-cols-[2.2fr,0.8fr]">
            {/* LEFT: light welcome card */}
            <motion.section
              className="rounded-3xl bg-[#F3EFE8] px-6 py-8 text-[#15315A] shadow-xl md:px-10 md:py-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Premium serif welcome line */}
              <motion.p
                className="text-lg md:text-xl font-serif text-[#1B4C9A] tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Welcome to the Digital Communication &amp; Design Club
              </motion.p>

              {/* Hero title */}
              <motion.h1
                className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                Unleash your <span className="text-[#1B4C9A]">creativity</span>.
                <br />
                Build the <span className="text-[#1B4C9A]">future</span>.
              </motion.h1>

              {/* Description */}
              <motion.p
                className="mt-5 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                DCDC is a space for students who love both technology and design.
                Whether you&apos;re into circuits, code, posters, or storytelling,
                this is where ideas become projects and projects become impact.
              </motion.p>

              <motion.p
                className="mt-4 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                Through workshops, design challenges, technical sessions, and
                collaborative projects, you&apos;ll explore how engineering,
                communication, and creativity come together to shape the digital
                world on and beyond campus.
              </motion.p>

              {/* Animated tag chips */}
              <motion.div
                className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-[#1B4C9A]"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.08, delayChildren: 0.5 },
                  },
                }}
              >
                {["Tech", "Design", "Communication", "Creativity"].map((tag) => (
                  <motion.span
                    key={tag}
                    className="rounded-full border border-[#D2C9B8] bg-white/70 px-3 py-1"
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.a
                  href="/events"
                  className="rounded-full bg-[#1B4C9A] px-6 py-2 text-sm font-semibold text-[#F3EFE8] shadow hover:brightness-110 transition"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  View Upcoming Events
                </motion.a>

                <motion.a
                  href="/contact"
                  className="rounded-full border border-[#1B4C9A] px-6 py-2 text-sm font-semibold text-[#1B4C9A] hover:bg-[#1B4C9A] hover:text-[#F3EFE8] transition"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  Join the Club
                </motion.a>

                <motion.a
  href="/project-vault"
  className="rounded-full border border-[#1B4C9A] px-6 py-2 text-sm font-semibold text-[#1B4C9A] bg-white 
             hover:bg-[#1B4C9A] hover:text-white transition"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.97, y: 0 }}
  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
>
  Explore Project Vault
</motion.a>

              </div>
            </motion.section>

            {/* RIGHT: navy strip */}
            <motion.aside
              className="relative flex flex-col items-center justify-between rounded-3xl border border-[#12356F] bg-[#0A2A5A] px-4 py-8 text-center text-slate-100 md:px-5 md:py-12"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ rotate: -1.5, y: -4 }}
              whileTap={{ rotate: 0, y: 0 }}
            >
              {/* Logo block */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  className="relative h-20 w-20 overflow-hidden rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Image
                    src="/images/dcdclogo.jpg"
                    alt="DCDC Logo"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8BB7FF]">
                  DCDC · SRMIST
                </p>
              </motion.div>

              {/* LEGACY TEXT WITH SWING ANIMATION */}
              <motion.div
                className="mt-6 flex flex-col items-center justify-center gap-1 text-xl font-extrabold leading-tight md:text-2xl text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: [-3, 3, -3],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.4 },
                  x: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  },
                }}
              >
                <span>A Legacy</span>
                <span>That Stands</span>
                <span>Beyond Time</span>
              </motion.div>

              {/* Footnote */}
              <motion.p
                className="mt-6 text-[11px] text-slate-200/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Be part of a community that turns creativity into real
                experiences for the campus.
              </motion.p>
            </motion.aside>
          </div>
        </div>
      </Container>
    </main>
  );
}
