"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type GalleryImage = {
  src: string;
  alt: string;
};

type GallerySection = {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
};

const sections: GallerySection[] = [

   {
    title: "Club Moments & Group Photos",
    subtitle: "Snapshots of the DCDC family",
    images: [
      { src: "/gallery/group-photos/1.jpg", alt: "DCDC Group Photo - DCDC • SRMIST" },
      { src: "/gallery/group-photos/2.jpg", alt: "DCDC Group Photo - DCDC • SRMIST" },
      { src: "/gallery/group-photos/3.jpg", alt: "DCDC Group Photo - DCDC • SRMIST" },
    ],
  },

  {
    title: "Investor Awareness Program",
    subtitle: "Financial literacy & informed decision-making",
    images: [
      { src: "/gallery/investor-awareness/1.jpg", alt: "Investor Awareness Program - DCDC • SRMIST" },
      { src: "/gallery/investor-awareness/2.jpg", alt: "Investor Awareness Program - DCDC • SRMIST" },
      { src: "/gallery/investor-awareness/3.jpg", alt: "Investor Awareness Program - DCDC • SRMIST" },
    ],
  },

  {
    title: "Tinkathon 2025",
    subtitle: "Hands-on tinkering & rapid prototyping",
    images: [
      { src: "/gallery/tinkathon-2025/1.jpg", alt: "Tinkathon 2025 - DCDC • SRMIST" },
      { src: "/gallery/tinkathon-2025/2.jpg", alt: "Tinkathon 2025 - DCDC • SRMIST" },
      { src: "/gallery/tinkathon-2025/3.jpg", alt: "Tinkathon 2025 - DCDC • SRMIST" },
    ],
  },

  {
    title: "Power BI Workshop",
    subtitle: "Data storytelling & dashboards",
    images: [
      { src: "/gallery/powerbi-workshop/1.jpg", alt: "Power BI Workshop - DCDC • SRMIST" },
      { src: "/gallery/powerbi-workshop/2.jpg", alt: "Power BI Workshop - DCDC • SRMIST" },
      { src: "/gallery/powerbi-workshop/3.jpg", alt: "Power BI Workshop - DCDC • SRMIST" },
    ],
  },
 
    {
    title: "Idea Forge 2025",
    subtitle: "Showcasing innovative prototypes & pitches",
    images: [
      { src: "/gallery/idea-forge-2025/1.jpg", alt: "Idea Forge 2025 - DCDC • SRMIST" },
      { src: "/gallery/idea-forge-2025/2.jpg", alt: "Idea Forge 2025 - DCDC • SRMIST" },
      { src: "/gallery/idea-forge-2025/3.jpg", alt: "Idea Forge 2025 - DCDC • SRMIST" },
    ],
  },

   {
    title: "E-Volution: The Power of Innovation",
    subtitle: "Exploring ideas beyond the classroom",
    images: [
      { src: "/gallery/e-volution-innovation/1.jpg", alt: "E-Volution: The Power of Innovation - DCDC • SRMIST" },
      { src: "/gallery/e-volution-innovation/2.jpg", alt: "E-Volution: The Power of Innovation - DCDC • SRMIST" },
      { src: "/gallery/e-volution-innovation/3.jpg", alt: "E-Volution: The Power of Innovation - DCDC • SRMIST" },
    ],
  },

  {
    title: "STM32 Workshop",
    subtitle: "Embedded systems & microcontrollers",
    images: [
      { src: "/gallery/stm32-workshop/1.jpg", alt: "STM32 Workshop - DCDC • SRMIST" },
      { src: "/gallery/stm32-workshop/2.jpg", alt: "STM32 Workshop - DCDC • SRMIST" },
      { src: "/gallery/stm32-workshop/3.jpg", alt: "STM32 Workshop - DCDC • SRMIST" },
    ],
  },
  {
    title: "C++ Workshop",
    subtitle: "Foundations of programming in C++",
    images: [
      { src: "/gallery/cpp-workshop/1.jpg", alt: "C++ Workshop - DCDC • SRMIST" },
      { src: "/gallery/cpp-workshop/2.jpg", alt: "C++ Workshop - DCDC • SRMIST" },
      { src: "/gallery/cpp-workshop/3.jpg", alt: "C++ Workshop - DCDC • SRMIST" },
    ],
  },
  {
    title: "Beyond the Circuits",
    subtitle: "Talk series & panel discussions",
    images: [
      { src: "/gallery/beyond-the-circuits/1.jpg", alt: "Beyond the Circuits - DCDC • SRMIST" },
      { src: "/gallery/beyond-the-circuits/2.jpg", alt: "Beyond the Circuits - DCDC • SRMIST" },
      { src: "/gallery/beyond-the-circuits/3.jpg", alt: "Beyond the Circuits - DCDC • SRMIST" },
    ],
  },
 
];

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <main className="min-h-screen bg-[#0A2A5A]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <header className="mb-10 space-y-3">
          <p className="text-sm md:text-base font-semibold tracking-[0.3em] text-[#F5E9D5] uppercase">
            DCDC Moments
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.18em] text-[#F5E9D5] uppercase">
            Gallery
          </h1>
          <p className="max-w-2xl text-sm text-[#D9E2FF]/85">
            A look back at the events, workshops, and collaborations that define
            the Digital Communication &amp; Design Club.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-2xl font-bold text-[#F5E9D5]">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-sm text-[#D9E2FF]/80">
                    {section.subtitle}
                  </p>
                )}
              </div>

              {/* 3-per-row grid on desktop */}
              <div className="grid gap-6 md:grid-cols-3">
                {section.images.map((img) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className="group relative overflow-hidden rounded-3xl border border-[#12356D] bg-[#08214A] shadow-[0_18px_40px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5E9D5]"
                  >
                    <div className="relative h-56 w-full md:h-64">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-110"
                      />
                    </div>

                    {/* Bottom bar – generic label */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F3EFE8]/95 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                      <span>DCDC • SRMIST</span>
                      <span className="hidden md:inline">Tap to view</span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Lightbox / Full-screen modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl px-4"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute -top-10 right-4 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-[#F5E9D5] hover:bg-white/20"
              >
                ✕ Close
              </button>

              {/* Big image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-[#E0D6C5] bg-black">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Caption – generic */}
              <div className="mt-3 text-center text-sm text-[#F5E9D5]/90">
                <p className="font-semibold">DCDC • SRMIST</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
