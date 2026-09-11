import React, { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/portfolioData";
import Reveal from "./Reveal";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    help: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setSending(false);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError(true);
        setSending(false);
      });
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 navy-grid-pattern opacity-40"></div>
      <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px]"></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <span className="text-xs font-mono-label text-blue-400">
              08 / CONTACT
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
              Have a task, system, or project in mind?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need help with GHL, digital operations, marketing
              support, website tasks, research, or technical VA work, I'd be
              happy to discuss what you need.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                Let's Connect
              </a>
            </div>

            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4 text-blue-400" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4 text-blue-400" />
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <CheckCircle2 className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="font-heading font-semibold text-xl text-white">
                    Your message has been sent
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-xs">
                    Thanks for reaching out! I'll get back to you soon. If you
                    don't hear from me, feel free to email me directly at{" "}
                    {profile.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono-label text-slate-400 mb-1.5"
                      >
                        NAME
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono-label text-slate-400 mb-1.5"
                      >
                        EMAIL
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-mono-label text-slate-400 mb-1.5"
                    >
                      COMPANY / BUSINESS
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company (optional)"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="help"
                      className="block text-xs font-mono-label text-slate-400 mb-1.5"
                    >
                      WHAT DO YOU NEED HELP WITH?
                    </label>
                    <input
                      id="help"
                      name="help"
                      type="text"
                      value={form.help}
                      onChange={handleChange}
                      placeholder="GHL setup, website, research, VA work..."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono-label text-slate-400 mb-1.5"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me a bit about what you need..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400 text-center">
                      Something went wrong sending your message. Please email
                      me directly at {profile.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}