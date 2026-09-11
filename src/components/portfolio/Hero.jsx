import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Terminal, Cpu, Workflow, CheckCircle2 } from "lucide-react";
import { profile, heroSkills } from "@/data/portfolioData";
import { Image } from "@/components/ui/image";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText =
    "I'm an IT graduate and versatile Virtual Assistant helping businesses manage their digital systems, marketing tasks, websites, CRM, and day-to-day operations.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 22);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-primary text-primary-foreground overflow-hidden pt-16"
    >
      <div className="absolute inset-0 navy-grid-pattern opacity-60"></div>
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"></div>
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]"></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="status-dot absolute inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              </span>
              <span className="text-xs font-mono-label text-blue-200">
                AVAILABLE FOR REMOTE WORK
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-extrabold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
            >
              IT Skills. Business Support.{" "}
              <span className="text-blue-400">Digital Systems.</span>
            </motion.h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed min-h-[6rem]">
              {typed}
              <span className="inline-block w-0.5 h-5 bg-blue-400 ml-0.5 animate-pulse align-middle"></span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Let's Work Together
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-x-6 gap-y-2"
            >
              {heroSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono-label text-slate-400 flex items-center gap-1.5"
                >
                  <span className="h-1 w-1 rounded-full bg-blue-400"></span>
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-2xl"></div>
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/80"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
                    <span className="h-3 w-3 rounded-full bg-green-400/80"></span>
                  </div>
                  <span className="text-xs font-mono-label text-slate-400 ml-2">
                    system_status.json
                  </span>
                </div>

                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://media.base44.com/images/public/6aa42a745472a5d91ad3c366/03b209818_generated_e67b38c0.jpg"
                    alt="Clean modern workspace with laptop and CRM dashboard"
                    fittingType="fill"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="p-5 space-y-3 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-label text-slate-400">
                      ACTIVE STATUS
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Ready for Work
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: Workflow, label: "GHL" },
                      { icon: Cpu, label: "CRM" },
                      { icon: Terminal, label: "Automation" },
                    ].map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center gap-1 rounded-lg bg-white/5 border border-white/10 py-3"
                      >
                        <Icon className="h-4 w-4 text-blue-400" />
                        <span className="text-[10px] font-mono-label text-slate-300">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}