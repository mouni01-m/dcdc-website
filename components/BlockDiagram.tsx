// components/BlockDiagram.tsx
"use client";

interface BlockDiagramProps {
  steps: string[];
}

export default function BlockDiagram({ steps }: BlockDiagramProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center gap-3 py-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="min-w-[130px] rounded-2xl border border-gray-300 bg-white px-3 py-2 text-center text-xs sm:text-sm shadow-sm">
              {step}
            </div>
            {index < steps.length - 1 && (
              <span className="text-lg sm:text-2xl">➜</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
