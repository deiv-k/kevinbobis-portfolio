import React from "react";
import { Lightbulb, Rocket, Shuffle, ScanSearch } from "lucide-react";
import { aboutCards, profile } from "@/data/portfolioData";
import Reveal from "./Reveal";

const icons = [Lightbulb, Rocket, Shuffle, ScanSearch];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-mono-label text-blue-600">
              01 / ABOUT
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary text-balance">
              An IT graduate who works across technology and business operations
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                I'm {profile.name}, an IT graduate from the {profile.location}{" "}
                who has expanded my experience beyond traditional IT into Virtual
                Assistance, digital marketing, CRM management, automation, and
                business operations.
              </p>
              <p>
                My IT background helps me understand technical systems — how
                websites, apps, databases, and automations actually work. My VA
                and marketing experience helps me understand the operational and
                business side — the tasks, processes, and outcomes that drive a
                company forward.
              </p>
              <p>
                I'm comfortable working from SOPs, learning new platforms, and
                connecting different digital tools together. The goal is simple:
                help businesses run their digital systems smoothly so they can
                focus on what they do best.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-mono-label text-slate-400 mb-3">
                QUICK PROFILE
              </p>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-slate-500">Role</dt>
                  <dd className="font-medium text-primary text-right">
                    {profile.role}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-slate-500">Location</dt>
                  <dd className="font-medium text-primary">{profile.location}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-slate-500">Availability</dt>
                  <dd className="font-medium text-green-600">Remote / Open</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Focus</dt>
                  <dd className="font-medium text-primary text-right">
                    IT · VA · Digital Ops
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-primary text-center">
              Why work with me?
            </h3>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutCards.map((card, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={card.title} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 font-heading font-semibold text-primary">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}