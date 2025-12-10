"use client";

import { FormEvent, useState } from "react";
import Container from "../../components/Container";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (
    typeof err === "object" &&
    err !== null &&
    "message" in err &&
    typeof (err as { message: unknown }).message === "string"
  ) {
    return (err as { message: string }).message;
  }
  return "Something went wrong. Please try again.";
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const apiError =
          typeof data?.error === "string"
            ? data.error
            : "Failed to submit the form.";
        throw new Error(apiError);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setError(getErrorMessage(err));
    }
  };

  return (
    <main className="bg-[#0A2A5A] py-12 md:py-16">
      <Container>
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Contact <span className="text-[#3DA5FF]">DCDC</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#D9D9D9] md:text-base">
            Have ideas, questions, or want to join the club? Reach out to us
            using the form below.
          </p>
        </motion.section>
        
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          
          {/* Left text block */}
          <motion.div
            className="space-y-3 text-sm text-[#D9D9D9] md:text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              DCDC welcomes students who are passionate about electronics,
              communication, design, media, or storytelling. Whether you&apos;re
              a beginner or experienced, there&apos;s space for you to learn and
              contribute.
            </p>
            <p>
              Use this form to express your interest in joining, propose a
              workshop or event, or collaborate with us for department and
              college activities.
            </p>
            <p className="text-xs text-[#b8c4e0]">
              We usually respond through official department communication
              channels or during club meets on campus.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl bg-[#F3EFE8] p-5 text-[#15315A] shadow-md md:p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="mb-1 block text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-[#C5C0B5] bg-white px-3 py-2 text-sm outline-none focus:border-[#1B4C9A]"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-[#C5C0B5] bg-white px-3 py-2 text-sm outline-none focus:border-[#1B4C9A]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-[#C5C0B5] bg-white px-3 py-2 text-sm outline-none focus:border-[#1B4C9A]"
                placeholder="Tell us how you'd like to get involved..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-[#1B4C9A] px-4 py-2 text-sm font-semibold text-[#F3EFE8] hover:brightness-110 transition disabled:cursor-not-allowed disabled:opacity-70"
              whileHover={status === "loading" ? {} : { scale: 1.02, y: -1 }}
              whileTap={status === "loading" ? {} : { scale: 0.97, y: 0 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <p className="text-xs font-semibold text-green-700">
                ✅ Message sent! Thank you for reaching out to DCDC.
              </p>
            )}

            {status === "error" && (
              <p className="text-xs font-semibold text-red-600">❌ {error}</p>
            )}

            <p className="text-[11px] text-[#6B6F7C]">
              Your message is securely stored in the club&apos;s Google Sheets
              workspace so it can be tracked and followed up by the DCDC team.
            </p>
          </motion.form>
        </div>
      </Container>
    </main>
  );
}
