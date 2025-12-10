// app/project-vault/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import BlockDiagram from "@/components/BlockDiagram";

export default function ProjectDetailPage() {
  const params = useParams();

  const rawId = Array.isArray(params?.id)
    ? params.id[0]
    : (params?.id as string | undefined);
  const id = rawId ? Number(rawId) : NaN;

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#052554] text-white">
        <section className="mx-auto max-w-4xl px-4 pb-10 pt-24">
          <Link
            href="/project-vault"
            className="mb-4 inline-block text-sm text-blue-200 hover:underline"
          >
            ← Back to Project Vault
          </Link>
          <h1 className="text-2xl font-bold">Project not found</h1>
          <p className="mt-2 text-sm text-blue-100">
            The project you are looking for does not exist.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#052554] text-white">
      <section className="mx-auto max-w-4xl px-4 pb-10 pt-24">
        <Link
          href="/project-vault"
          className="mb-4 inline-block text-sm text-blue-200 hover:underline"
        >
          ← Back to Project Vault
        </Link>

        <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-blue-200">
          DCDC PROJECT HUB
        </p>
        <h1 className="mb-3 text-3xl font-extrabold sm:text-4xl">
          {project.title}
        </h1>

        <div className="mb-6 flex flex-wrap gap-3 text-xs font-semibold tracking-wide text-blue-100">
          <span>{project.year.toUpperCase()} YEAR</span>
          <span>• {project.domain}</span>
          <span>• {project.difficulty.toUpperCase()}</span>
        </div>

        <div className="rounded-3xl bg-[#fdf7ec] p-6 text-[#111827]">
          <section className="space-y-4 text-sm leading-relaxed">
            <div>
              <h2 className="mb-1 text-lg font-semibold">Problem statement</h2>
              <p>{project.problemStatement}</p>
            </div>

            <div>
              <h2 className="mb-1 text-lg font-semibold">Abstract</h2>
              <p>{project.abstract}</p>
            </div>

            <div>
              <h2 className="mb-1 text-lg font-semibold">
                Components required
              </h2>
              <ul className="list-disc pl-5">
                {project.components.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-1 text-lg font-semibold">Block diagram</h2>
              <div className="rounded-xl bg-[#fff9ee] p-3">
                <BlockDiagram steps={project.blockDiagram} />
              </div>
            </div>

            <div>
              <h2 className="mb-1 text-lg font-semibold">Working</h2>
              <p>{project.working}</p>
            </div>

            <div>
              <h2 className="mb-1 text-lg font-semibold">Applications</h2>
              <ul className="list-disc pl-5">
                {project.applications.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
