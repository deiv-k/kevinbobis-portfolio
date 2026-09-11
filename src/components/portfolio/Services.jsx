import React from "react";
import {
  Workflow,
  Headset,
  Network,
  Globe,
  Megaphone,
  Search,
  BrainCircuit,
} from "lucide-react";
import { services } from "@/data/portfolioData";
import Reveal from "./Reveal";

const iconMap = {
  Workflow,
  Headset,
  Network,
  Globe,
  Megaphone,
  Search,
  BrainCircuit,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-mono-label text-blue-600">
              05 / SERVICES
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary text-balance">
              How I can help
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Practical support across technical, operational, and marketing work
              — flexible enough to fit how your business runs.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Workflow;
            const isFeatured = i === 0;
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 0.1}
                className={isFeatured ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-lg text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}