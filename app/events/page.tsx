"use client";

import { motion } from "framer-motion";

const schedule = [
  {
    month: "January 2025",
    badge: "Even Sem Kick-off",
    // NOTE: January 1st week Project Discussion and 3rd week Guest Lecture + Investiture
    // are NOT shown here because the website launches after those.
    events: [
      {
        week: "4th Week",
        title: "Soft Skills Development",
        tag: "Soft Skills",
        description:
          "Session on communication, presentation, teamwork and leadership to prepare members for interviews and future project demonstrations.",
        // Only this one has a live registration form:
        registrationUrl: "https://forms.gle/FdZZV4tTu6YaKez98",
      },
      {
        week: "Date TBA",
        title: "School Outreach Program",
        tag: "Outreach",
        description:
          "An outreach initiative where DCDC members interact with school students, share experiences, and spark curiosity about technology and innovation.",
      },
    ],
  },
  {
    month: "February 2025",
    badge: "Skill Building",
    events: [
      {
        week: "1st Week",
        title: "Project Discussion",
        tag: "Projects",
        description:
          "Continuation of project work started in January – checkpoints, feedback, and planning for the next development steps.",
      },
      {
        week: "2nd Week",
        title: "Hands-On Workshop: Antenna Design",
        tag: "Technical Workshop",
        description:
          "Practical session on antenna design, covering tools, basic simulation workflows, and fundamental design principles guided by mentors and senior members.",
      },
      {
        week: "3rd Week",
        title: "Soft Skills Development (Part 2)",
        tag: "Soft Skills",
        description:
          "Second part of the soft skill series, focusing on problem-solving, professional etiquette, and confidence-building for academic and professional settings.",
      },
      {
        week: "Date TBA",
        title: "School Outreach Program",
        tag: "Outreach",
        description:
          "Ongoing school-level outreach where members mentor and interact with students, helping them explore creativity, communication, and technology.",
      },
    ],
  },
  {
    month: "March 2025",
    badge: "Projects & Innovation",
    events: [
      {
        week: "1st Week",
        title: "Project Discussion",
        tag: "Projects",
        description:
          "Mid-semester evaluation of club projects, refining prototypes, strengthening documentation, and planning final deliverables.",
      },
      {
        week: "2nd Week",
        title: "PCB Design Workshop",
        tag: "Technical Workshop",
        description:
          "Hands-on introduction to PCB design: schematic capture, layout fundamentals, design rules, and preparing files for fabrication.",
      },
      {
        week: "3rd Week",
        title: "Idea Forge 2026",
        tag: "Innovation",
        description:
          "A platform for students to pitch innovative ideas. Selected concepts can be taken forward as projects, competitions, or future DCDC initiatives.",
      },
      {
        week: "4th Week",
        title: "Soft Skills Development (Part 3)",
        tag: "Soft Skills",
        description:
          "Final part of the soft skill series, focusing on interview readiness, resume building, and public speaking for placements and higher studies.",
      },
    ],
  },
  {
    month: "April 2025",
    badge: "Showcase & Wrap-up",
    events: [
      {
        week: "1st Week",
        title: "Project Showcase Day",
        tag: "Showcase",
        description:
          "Final demonstration of completed projects in front of a review panel. Projects are evaluated on innovation, execution quality, and documentation.",
      },
      {
        week: "2nd Week",
        title: "Fun Event",
        tag: "Club Bonding",
        description:
          "A non-technical, high-energy event with games, quizzes, and creative activities to celebrate the semester and strengthen team bonding.",
      },
      {
        week: "3rd Week",
        title: "Workshop on Raspberry Pi",
        tag: "Technical Workshop",
        description:
          "Beginner-friendly Raspberry Pi workshop covering setup, basic Python programming, and small IoT / embedded demonstrations to help students get started.",
      },
    ],
  },
];

export default function EventsPage() {
  return (
    // Deep blue background to match the rest of the site
    <main className="min-h-screen bg-[#0A2A5A]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Page Header */}
        <header className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#F5E9D5] uppercase">
              DCDC Calendar
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-[0.18em] text-[#F5E9D5] uppercase">
              Upcoming Events
            </h1>
          </div>
          <p className="max-w-md text-sm text-[#D9E2FF]/80">
            Even Semester roadmap from January to April – workshops, soft skills
            series, outreach, and innovation platforms planned by DCDC.
          </p>
        </header>

        {/* TIMELINE */}
        <div className="relative">
          {/* Beige vertical line */}
          <div className="pointer-events-none absolute left-4 top-0 h-full w-[3px] bg-gradient-to-b from-[#F5E9D5] via-[#E7D7C6] to-[#DCCAB5]" />

          {/* Glowing top dot */}
          <div className="pointer-events-none absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#F5E9D5] shadow-[0_0_18px_rgba(245,233,213,0.9)]" />

          {/* Content next to timeline */}
          <div className="space-y-12 pl-10">
            {schedule.map((block, blockIndex) => (
              <section key={block.month} className="space-y-6">
                {/* Month Header */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: blockIndex * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <h2 className="text-lg md:text-xl font-extrabold tracking-[0.25em] uppercase text-[#F5E9D5]">
                    {block.month}
                  </h2>
                  {block.badge && (
                    <span className="rounded-full border border-[#F5E9D5]/40 bg-[#F5E9D5]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5E9D5]">
                      {block.badge}
                    </span>
                  )}
                </motion.div>

                {/* Events in that month */}
                <div className="space-y-6">
                  {block.events.map((event, idx) => (
                    <motion.article
                      key={event.title + idx}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: blockIndex * 0.05 + idx * 0.04,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="rounded-3xl bg-[#F3EFE8] text-[#102A54] shadow-[0_18px_40px_rgba(0,0,0,0.45)] border border-[#E0D6C5] px-8 py-7 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(0,0,0,0.5)] transition"
                    >
                      <p className="text-xs font-semibold tracking-[0.25em] text-[#8B6F4F] uppercase">
                        {event.week}
                      </p>
                      <h3 className="mt-2 text-xl font-bold md:text-2xl">
                        {event.title}
                      </h3>

                      <p className="mt-3 text-sm md:text-base leading-relaxed text-[#3A4560]">
                        {event.description}
                      </p>

                      {/* Tag on left, registration info on right */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                          {event.tag && (
                            <span className="inline-flex items-center rounded-full bg-[#0A2A5A] px-3 py-1 text-xs font-semibold text-[#F3EFE8]">
                              {event.tag}
                            </span>
                          )}
                        </div>

                        {event.registrationUrl ? (
                          <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full bg-[#0A2A5A] px-4 py-2 text-xs md:text-sm font-semibold text-[#F3EFE8] shadow-[0_8px_18px_rgba(0,0,0,0.35)] hover:brightness-110 hover:-translate-y-[1px] transition"
                          >
                            Register Here →
                          </a>
                        ) : (
                          <span className="text-xs font-semibold text-[#8B6F4F] whitespace-nowrap">
                            Registration will open soon
                          </span>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
