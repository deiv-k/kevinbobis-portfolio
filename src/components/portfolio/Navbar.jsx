import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ChevronDown } from "lucide-react";
import { navLinks, profile } from "@/data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="flex items-center gap-2.5 group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading font-bold text-sm">
            KB
          </span>
          <span className="font-heading font-semibold text-primary tracking-tight hidden sm:block">
            Kevin Bobis
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-primary rounded-md hover:bg-secondary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs font-mono-label text-slate-500">
            <span className="relative flex h-2 w-2">
              <span className="status-dot absolute inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available for Remote Work
          </span>
          <div className="relative">
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <FileText className="h-4 w-4" />
              Resume
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  resumeOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {resumeOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setResumeOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-popover shadow-lg z-50 overflow-hidden"
                  >
                    {profile.resumes.map((resume) => (
                      <a
                        key={resume.label}
                        href={resume.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setResumeOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-secondary hover:text-primary transition-colors"
                      >
                        <FileText className="h-4 w-4 text-blue-600" />
                        {resume.label}
                      </a>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-secondary rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-3 pt-3 mt-2 border-t border-border">
                <span className="relative flex h-2 w-2">
                  <span className="status-dot absolute inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="text-xs font-mono-label text-slate-500">
                  Available for Remote Work
                </span>
              </div>
              <div className="mt-2 space-y-2">
                {profile.resumes.map((resume) => (
                  <a
                    key={resume.label}
                    href={resume.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    <FileText className="h-4 w-4" />
                    View {resume.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}