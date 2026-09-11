import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2 } from "lucide-react";
import { experiences } from "@/data/portfolioData";
import Reveal from "./Reveal";

function ExperienceItem({ exp, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="relative pl-8 sm:pl-10">
      <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center">
        <span className="absolute h-4 w-4 rounded-full bg-blue-100"></span>
        <span className="relative h-2.5 w-2.5 rounded-full bg-blue-600"></span>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-secondary/40 transition-colors"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-mono-label text-blue-600">
                {exp.period}
              </span>
            </div>
            <h3 className="font-heading font-semibold text-lg text-primary">
              {exp.role}
            </h3>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-500">
              <Building2 className="h-3.5 w-3.5" />
              {exp.company}
            </p>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-slate-400 shrink-0 mt-1 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {exp.summary}
                </p>
                <p className="text-xs font-mono-label text-slate-400 mb-2">
                  RESPONSIBILITIES & TOOLS
                </p>
                <ul className="space-y-2">
                  {exp.details.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-mono-label text-blue-600">
              03 / EXPERIENCE
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary text-balance">
              Professional experience
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              A mix of digital operations, marketing support, and IT internship
              work. Click a role to see the responsibilities and tools involved.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border"></div>
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <ExperienceItem exp={exp} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}