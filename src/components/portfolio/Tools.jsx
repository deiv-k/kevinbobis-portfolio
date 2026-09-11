import React from "react";
import { tools } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Tools() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-mono-label text-blue-600">
              07 / TOOLS
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary text-balance">
              Tools I work with
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              A practical toolkit across business platforms, marketing, and
              development — used at the level each task requires.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-primary hover:shadow-sm transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}