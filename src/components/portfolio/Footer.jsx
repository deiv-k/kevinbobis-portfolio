import React from "react";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/data/portfolioData";

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white font-heading font-bold text-sm">
                KB
              </span>
              <span className="font-heading font-semibold text-white">
                {profile.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{profile.role}</p>
            <p className="mt-4 font-mono-label text-xs text-blue-400">
              // BUILDING BETTER SYSTEMS. SUPPORTING BETTER BUSINESS.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono-label text-slate-400 mb-4">
              NAVIGATION
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono-label text-slate-400 mb-4">CONNECT</p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4 text-blue-400" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4 text-blue-400" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-xs font-mono-label text-slate-400 hover:text-white transition-colors"
          >
            BACK TO TOP
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}