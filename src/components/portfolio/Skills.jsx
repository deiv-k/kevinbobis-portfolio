import React from "react";
import {
  Code2,
  Briefcase,
  Workflow,
  Megaphone,
  BrainCircuit,
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";
import Reveal from "./Reveal";

const iconMap = { Code2, Briefcase, Workflow, Megaphone, BrainCircuit };

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-mono-label text-blue-600">
              02 / SKILLS
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary text-balance">
              A practical, hybrid skill set
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Categorized across IT, business support, automation, marketing, and
              data — covering both the technical and operational sides of modern
              work.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <Reveal key={cat.name} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-primary text-lg">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-slate-600 border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}