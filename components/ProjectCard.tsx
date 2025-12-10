// components/ProjectCard.tsx
"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.div
      className="w-full rounded-3xl bg-[#fdf7ec] px-6 py-5 shadow-sm ring-1 ring-transparent transition hover:shadow-xl hover:ring-[#111827]/10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: 0.05 * index, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      {/* top meta */}
      <div className="mb-3 flex flex-wrap gap-3 text-xs font-semibold tracking-wide text-gray-600">
        <span className="rounded-full bg-white/70 px-3 py-1">
          {project.year.toUpperCase()} YEAR
        </span>
        <span className="rounded-full bg-white/70 px-3 py-1">
          {project.domain}
        </span>
        <span className="rounded-full bg-white/70 px-3 py-1">
          {project.difficulty.toUpperCase()}
        </span>
      </div>

      {/* title + short description */}
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#111827]">
        {project.title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-gray-700">
        {project.shortDescription}
      </p>

      {/* tags */}
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-300/80 bg-white/70 px-3 py-1 text-xs text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* single CTA */}
      <div className="mt-2 flex justify-between items-center gap-3">
        <p className="text-xs text-gray-500">
          Tap to see problem statement, components, diagrams & more.
        </p>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link
            href={`/project-vault/${project.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-zinc-900/20 hover:bg-black"
          >
            View full details
            <span className="text-xs">↗</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
