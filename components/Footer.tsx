// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[#1B4C9A] bg-[#071D46]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-[#D9D9D9]/80 md:flex-row">
        <p>
          © {new Date().getFullYear()} DCDC – Digital Communication and Design
          Club, SRMIST Ramapuram.
        </p>
        <p>Crafted with Next.js, Tailwind CSS & passion for design.</p>
      </div>
    </footer>
  );
}
