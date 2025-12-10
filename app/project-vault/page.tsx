// app/project-vault/page.tsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, Year, Domain, Difficulty } from "@/data/projects";

// ---------------- Constants for filters ----------------

const years: (Year | "All")[] = ["All", "1st", "2nd", "3rd", "4th"];
const difficulties: (Difficulty | "All")[] = ["All", "Easy", "Medium", "Hard"];

const domains: (Domain | "All")[] = [
  "All",
  "IoT",
  "Embedded",
  "AI/ML",
  "Robotics",
  "Communication",
  "Web",
  "Cybersecurity",
  "Blockchain",
  "AR/VR",
  "Cloud & DevOps",
  "DevOps",
  "Quantum Computing",
  "Computer Vision"
];

// ---------------- AI-like natural language search ----------------

type SmartSearchResult = {
  year: Year | undefined;
  domain: Domain | undefined;
  difficulty: Difficulty | undefined;
  keywords: string[];
};

const EMPTY_SMART_SEARCH: SmartSearchResult = {
  year: undefined,
  domain: undefined,
  difficulty: undefined,
  keywords: []
};

const STOP_WORDS = new Set([
  "project",
  "projects",
  "for",
  "with",
  "that",
  "which",
  "like",
  "based",
  "about",
  "using",
  "and",
  "in",
  "on",
  "a",
  "an",
  "the",
  "year",
  "final",
  "beginner",
  "advanced",
  "easy",
  "medium",
  "hard"
]);

function interpretSmartSearch(raw: string): SmartSearchResult {
  const text = raw.toLowerCase();

  const result: SmartSearchResult = {
    year: undefined,
    domain: undefined,
    difficulty: undefined,
    keywords: []
  };

  // Year detection
  if (text.includes("1st") || text.includes("first year") || text.includes("1st year")) {
    result.year = "1st";
  } else if (text.includes("2nd") || text.includes("second year") || text.includes("2nd year")) {
    result.year = "2nd";
  } else if (text.includes("3rd") || text.includes("third year") || text.includes("3rd year")) {
    result.year = "3rd";
  } else if (
    text.includes("4th") ||
    text.includes("fourth year") ||
    text.includes("4th year") ||
    text.includes("final year") ||
    text.includes("final-year")
  ) {
    result.year = "4th";
  }

  // Difficulty detection
  if (text.includes("beginner") || text.includes("simple") || text.includes("easy")) {
    result.difficulty = "Easy";
  } else if (text.includes("intermediate") || text.includes("medium") || text.includes("normal")) {
    result.difficulty = "Medium";
  } else if (
    text.includes("hard") ||
    text.includes("complex") ||
    text.includes("difficult") ||
    text.includes("advanced") ||
    text.includes("major project") ||
    text.includes("final year project")
  ) {
    result.difficulty = "Hard";
  }

  // Domain detection
  if (text.includes("iot") || text.includes("internet of things")) {
    result.domain = "IoT";
  } else if (text.includes("embedded") || text.includes("microcontroller")) {
    result.domain = "Embedded";
  } else if (
    text.includes("ai") ||
    text.includes("artificial intelligence") ||
    text.includes("machine learning") ||
    text.includes("deep learning")
  ) {
    result.domain = "AI/ML";
  } else if (text.includes("robotics") || text.includes("robot")) {
    result.domain = "Robotics";
  } else if (
    text.includes("web") ||
    text.includes("website") ||
    text.includes("fullstack") ||
    text.includes("frontend") ||
    text.includes("backend")
  ) {
    result.domain = "Web";
  } else if (
    text.includes("security") ||
    text.includes("cyber security") ||
    text.includes("cybersecurity") ||
    text.includes("ids") ||
    text.includes("intrusion")
  ) {
    result.domain = "Cybersecurity";
  } else if (text.includes("blockchain") || text.includes("crypto")) {
    result.domain = "Blockchain";
  } else if (text.includes("ar/vr") || text.includes("augmented reality") || text.includes("virtual reality")) {
    result.domain = "AR/VR";
  } else if (text.includes("cloud") || text.includes("devops") || text.includes("aws") || text.includes("docker")) {
    if (domains.includes("Cloud & DevOps")) {
      result.domain = "Cloud & DevOps";
    } else {
      result.domain = "DevOps";
    }
  } else if (
    text.includes("computer vision") ||
    text.includes("image processing") ||
    text.includes("opencv") ||
    text.includes("video")
  ) {
    result.domain = "Computer Vision";
  } else if (
    text.includes("communication") ||
    text.includes("wireless") ||
    text.includes("lora") ||
    text.includes("antenna")
  ) {
    result.domain = "Communication";
  }

  // Keyword extraction – keep meaningful words only
  const tokens = text
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const keywords: string[] = [];
  for (const token of tokens) {
    if (STOP_WORDS.has(token)) continue;
    if (
      ["iot", "embedded", "robotics", "robot", "ai", "ml", "ar", "vr", "web", "cloud"].includes(token) ||
      token.endsWith("st") ||
      token.endsWith("nd") ||
      token.endsWith("rd") ||
      token.endsWith("th")
    ) {
      continue;
    }
    if (!keywords.includes(token)) {
      keywords.push(token);
    }
  }

  result.keywords = keywords;
  return result;
}

// ---------------- Page component ----------------

export default function ProjectVaultPage() {
  const [yearFilter, setYearFilter] = useState<Year | "All">("All");
  const [domainFilter, setDomainFilter] = useState<Domain | "All">("All");
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | "All">("All");
  const [search, setSearch] = useState("");

  const smartSearch = useMemo(
    () => (search.trim() ? interpretSmartSearch(search) : EMPTY_SMART_SEARCH),
    [search]
  );

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const effectiveYear = yearFilter === "All" ? smartSearch.year ?? "All" : yearFilter;
      const effectiveDomain = domainFilter === "All" ? smartSearch.domain ?? "All" : domainFilter;
      const effectiveDifficulty =
        difficultyFilter === "All" ? smartSearch.difficulty ?? "All" : difficultyFilter;

      const yearOk = effectiveYear === "All" || p.year === effectiveYear;
      const domainOk = effectiveDomain === "All" || p.domain === effectiveDomain;
      const diffOk = effectiveDifficulty === "All" || p.difficulty === effectiveDifficulty;

      const haystack = (
        p.title +
        " " +
        p.shortDescription +
        " " +
        p.problemStatement +
        " " +
        p.abstract +
        " " +
        p.tags.join(" ")
      ).toLowerCase();

      const keywordTokens =
        smartSearch.keywords && smartSearch.keywords.length > 0
          ? smartSearch.keywords
          : search
              .toLowerCase()
              .split(/\s+/)
              .filter(Boolean);

      const searchOk =
        keywordTokens.length === 0 ||
        keywordTokens.every((kw) => haystack.includes(kw));

      return yearOk && domainOk && diffOk && searchOk;
    });
  }, [yearFilter, domainFilter, difficultyFilter, search, smartSearch]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#031637] text-white">
      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        {/* changed right-[-6rem] → -right-24 */}
        <div className="absolute -right-24 top-64 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        {/* changed bottom-[-10rem] → -bottom-40 and bg-gradient-to-t → bg-linear-to-t */}
        <div className="absolute inset-x-0 -bottom-40 h-80 bg-linear-to-t from-sky-500/10 via-transparent" />
      </div>

      {/* hero */}
      <section className="mx-auto max-w-5xl px-4 pb-10 pt-24">
        <motion.p
          className="mb-3 text-xs font-semibold tracking-[0.35em] text-blue-200/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          DCDC PROJECT HUB
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Project Vault
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-blue-100/90">
            Browse curated project ideas with{" "}
            <span className="font-semibold">problem statements</span>,{" "}
            <span className="font-semibold">components</span>,{" "}
            <span className="font-semibold">block diagrams</span> and{" "}
            <span className="font-semibold">applications</span> across all four years.
          </p>
        </motion.div>
      </section>

      {/* filters panel */}
      <section className="mx-auto max-w-5xl px-4 pb-8">
        <motion.div
          className="rounded-3xl border border-blue-700/60 bg-[#061b44]/90 px-6 py-5 shadow-lg shadow-black/20 backdrop-blur"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          {/* Year */}
          <div className="mb-4">
            <p className="mb-2 text-sm font-semibold text-blue-100">Year</p>
            <div className="flex flex-wrap gap-2">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setYearFilter(y)}
                  className={`rounded-full px-4 py-1.5 text-xs sm:text-sm transition ${
                    yearFilter === y
                      ? "bg-white text-[#061b44] shadow-sm"
                      : "border border-blue-300/40 bg-transparent text-blue-100 hover:border-blue-100"
                  }`}
                >
                  {y === "All" ? "All years" : `${y} year`}
                </button>
              ))}
            </div>
          </div>

          {/* Domain */}
          <div className="mb-4">
            <p className="mb-2 text-sm font-semibold text-blue-100">Domain</p>
            <div className="flex flex-wrap gap-2">
              {domains.map((d) => (
                <button
                  key={d}
                  onClick={() => setDomainFilter(d)}
                  className={`rounded-full px-4 py-1.5 text-xs sm:text-sm transition ${
                    domainFilter === d
                      ? "bg-white text-[#061b44] shadow-sm"
                      : "border border-blue-300/40 bg-transparent text-blue-100 hover:border-blue-100"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty + Search */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold text-blue-100">Difficulty</p>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficultyFilter(d)}
                    className={`rounded-full px-4 py-1.5 text-xs sm:text-sm transition ${
                      difficultyFilter === d
                        ? "bg-white text-[#061b44] shadow-sm"
                        : "border border-blue-300/40 bg-transparent text-blue-100 hover:border-blue-100"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-72">
              <p className="mb-2 text-sm font-semibold text-blue-100">AI-style search</p>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-blue-200/80">
                  🔍
                </span>
                <input
                  type="text"
                  placeholder='Try: "final year AI project for healthcare"'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-blue-300/60 bg-[#031637] px-8 py-2 text-sm text-white outline-none placeholder:text-blue-200/70 focus:border-white/80"
                />
              </div>
              {search && (
                <p className="mt-1 text-[11px] text-blue-200/80">
                  Smart filters detected:&nbsp;
                  {smartSearch.year && (
                    <span className="mr-2 rounded-full bg-white/10 px-2 py-0.5">
                      Year: {smartSearch.year}
                    </span>
                  )}
                  {smartSearch.domain && (
                    <span className="mr-2 rounded-full bg-white/10 px-2 py-0.5">
                      Domain: {smartSearch.domain}
                    </span>
                  )}
                  {smartSearch.difficulty && (
                    <span className="mr-2 rounded-full bg-white/10 px-2 py-0.5">
                      Difficulty: {smartSearch.difficulty}
                    </span>
                  )}
                  {smartSearch.keywords.length > 0 && (
                    <span className="mr-2 rounded-full bg-white/10 px-2 py-0.5">
                      Keywords: {smartSearch.keywords.join(", ")}
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects list */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <motion.div className="flex flex-col gap-5" initial="hidden" animate="visible">
          {filteredProjects.length === 0 && (
            <p className="text-sm text-blue-100">
              No projects match these filters. Try changing year, domain, difficulty or search text.
            </p>
          )}

          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
