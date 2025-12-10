// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

// Use the alias form so paths stay clean
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "DCDC - Digital Communication and Design Club",
  description:
    "Official website of the Digital Communication and Design Club (DCDC), SRMIST Ramapuram.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A2A5A] text-[#D9D9D9] min-h-screen flex flex-col overflow-x-hidden">
        {/* Top navigation */}
        <Navbar />

        {/* Main page content */}
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>

        {/* Footer at the very bottom */}
        <Footer />

        {/* Floating “Contact Core Team” pill on all pages */}
        <FloatingContact />
      </body>
    </html>
  );
}
