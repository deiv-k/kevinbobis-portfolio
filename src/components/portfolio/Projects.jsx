import React from "react";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { projects } from "@/data/portfolioData";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 navy-grid-pattern opacity-40"></div>
      <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px]"></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-mono-label text-blue-400">
              04 / PROJECTS
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
              Things I've built and worked on
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              A mix of GoHighLevel business systems and application development
              projects. Case studies are available on request.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.1}>
              <article className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-blue-400/40 hover:bg-white/[0.07] transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fittingType="fill"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent"></div>
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-primary/80 backdrop-blur px-2.5 py-1 text-[10px] font-mono-label text-blue-200 border border-white/10">
                    <FolderOpen className="h-3 w-3" />
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-heading font-semibold text-lg text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono-label text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Case Study
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}