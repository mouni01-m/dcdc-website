// app/about/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const coreTeam = [
  {
    name: "Mounishan M",
    role: "President",
    image: "/team/mounishan.jpg",
  },
  {
    name: "Karthik Krishna",
    role: "Vice President",
    image: "/team/karthik.jpg",
  },
  {
    name: "Avanthika R",
    role: "Secretary",
    image: "/team/avanthika.jpg",
  },
  {
    name: "A. Anton Michael",
    role: "Joint Secretary",
    image: "/team/anton.jpg",
  },
  {
    name: "Thamarai Selvan S",
    role: "Treasurer",
    image: "/team/thamarai.jpg",
  },
  {
    name: "Govula Kapu Darshan",
    role: "Media Head",
    image: "/team/darshan.jpg",
  },
  {
    name: "R S Srihari",
    role: "Admin Head",
    image: "/team/srihari.jpg",
  },
  {
    name: "Mridula MVL",
    role: "Elevate Head",
    image: "/team/mridula.jpg",
  },
  {
    name: "Shagun Sahu",
    role: "Creatives Head",
    image: "/team/shagun.jpg",
  },
  {
    name: "Kanishk Balaji K S",
    role: "Lens Head",
    image: "/team/kanishk.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A2A5A] text-[#F3EFE8]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 md:px-6 lg:px-8">
        {/* Hero / intro */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#D9BFA0] uppercase">
            ABOUT DCDC
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Digital Communication &amp; Design Club
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#E9E3D9] md:text-base">
            The Digital Communication &amp; Design Club (DCDC) is a student-driven
            community at SRMIST Ramapuram that brings together engineering,
            creativity and storytelling. We create experiences through
            electronics, design, media and communication that go beyond
            textbooks.
          </p>
        </section>

        {/* Beige about block */}
        <section className="rounded-3xl bg-[#F3EFE8] px-6 py-10 text-[#0A2A5A] shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:px-10">
          <p className="text-sm leading-relaxed md:text-base">
            Founded under the Department of Electronics &amp; Communication
            Engineering at SRMIST Ramapuram, DCDC has evolved from a small idea
            into a vibrant ecosystem where creativity, engineering and
            communication merge to build meaningful experiences.
          </p>
          <p className="mt-4 text-sm leading-relaxed md:text-base">
            Today, DCDC stands as a thriving student community that empowers
            learners to explore modern design, digital storytelling, visual
            communication, hardware innovation and media creation — shaping the
            leaders of tomorrow.
          </p>
        </section>

        {/* Vision / Mission cards */}
        <section className="space-y-10">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-gradient-to-br from-[#0F346D] to-[#0A2A5A] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
            >
              <p className="text-xs font-semibold tracking-[0.3em] text-[#F3EFE8] uppercase">
                Vision
              </p>
              <h2 className="mt-3 text-xl font-bold md:text-2xl">
                To become a leading platform that empowers students to redefine
                the future of digital communication.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#E3E6F5] md:text-base">
                Through{" "}
                <span className="font-semibold">
                  creativity, technical innovation and expressive design
                </span>
                , DCDC aims to inspire clarity, confidence and curiosity in a
                digitally evolving world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-[#0F346D] to-[#0A2A5A] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
            >
              <p className="text-xs font-semibold tracking-[0.3em] text-[#F3EFE8] uppercase">
                Mission
              </p>
              <h2 className="mt-3 text-xl font-bold md:text-2xl">
                To cultivate a multidisciplinary community that blends
                engineering, creativity and communication.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#E3E6F5] md:text-base">
                Through workshops, hands-on experiences, design challenges and
                collaborative projects, DCDC empowers students to explore, build
                and grow beyond the boundaries of traditional academics.
              </p>
            </motion.div>
          </div>

          {/* Legacy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-[#052152] px-6 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.6)] md:px-10"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-[#D9BFA0] uppercase">
              Our Legacy
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#E3E6F5] md:text-base">
              Since 2016, DCDC has organised impactful workshops, technical
              challenges, project showcases, creativity fests, media production
              programmes and industry interaction sessions. These experiences
              help students discover new skills, explore emerging tools, build
              strong portfolios and collaborate with like-minded creators.
            </p>
          </motion.div>
        </section>

        {/* Faculty Coordinator */}
        <section className="space-y-6 rounded-3xl border border-white/10 bg-[#052152] px-6 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.6)] md:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#D9BFA0] uppercase">
            Faculty Coordinator
          </p>
          <p className="text-sm leading-relaxed text-[#E3E6F5] md:text-base">
            DCDC operates under the guidance of{" "}
            <span className="font-semibold">
              Mrs. Annapoorani, Assistant Professor, Department of ECE, SRMIST
              Ramapuram, Chennai.
            </span>{" "}
            Her leadership, mentorship and vision play a pivotal role in shaping
            the club&apos;s direction, discipline and values — ensuring that
            every initiative nurtures learning, creativity and collaboration.
          </p>

          <div className="mt-4 flex flex-col items-center gap-4 rounded-2xl bg-[#0A2A5A] px-6 py-6 md:flex-row md:items-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#F3EFE8]/80 bg-[#031434]">
              <Image
                src="/team/annapoorani.jpg"
                alt="Mrs. Annapoorani"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-base font-semibold md:text-lg">
                Mrs. Annapoorani
              </p>
              <p className="text-xs font-medium text-[#C8D2F2] md:text-sm">
                Assistant Professor, Department of ECE • Faculty Coordinator,
                DCDC – SRMIST Ramapuram
              </p>
            </div>
          </div>
        </section>

        {/* ===== Core Team section at the bottom ===== */}
        <section id="team" className="mt-4 space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#D9BFA0] uppercase">
                Core Team 2024–2025
              </p>
              <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
                The people who keep DCDC running.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#E3E6F5] md:text-base">
                A student-driven council that plans events, mentors juniors and
                builds the club&apos;s culture across workshops, outreach and
                innovation platforms.
              </p>
            </div>
          </div>

          <div className="grid gap-8 pt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coreTeam.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col items-center rounded-3xl border border-[#E0D6C5] bg-[#F3EFE8] px-5 py-6 text-center text-[#0A2A5A] shadow-[0_16px_45px_rgba(0,0,0,0.45)]"
              >
                <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-[#0A2A5A]/10 bg-[#031434]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-base font-semibold">{member.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8B6F4F]">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
