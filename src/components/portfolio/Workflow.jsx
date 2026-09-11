import React from "react";
import { workflowSteps } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Workflow() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-mono-label text-blue-600">
              06 / WORKFLOW
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary text-balance">
              How I approach the work
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              I don't just complete random tasks. I think about the process behind
              the task — so the work is repeatable, organized, and easy to hand
              off.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {workflowSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                <span className="font-mono-label text-3xl font-bold text-blue-200">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-lg text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-border"></div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}