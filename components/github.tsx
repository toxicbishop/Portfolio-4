"use client";

import { motion, useReducedMotion } from "motion/react";
import { GithubLogo, Star, GitFork } from "@phosphor-icons/react";

const repos = [
  { name: "KSSEM-College-ERP-System", stars: 12, forks: 4, lang: "TypeScript" },
  { name: "Crypt-Vault", stars: 8, forks: 2, lang: "Rust" },
  { name: "Chain-of-Thought", stars: 15, forks: 3, lang: "Python" },
  { name: "Brain-Tumor-Prediction-ML", stars: 10, forks: 5, lang: "Python" },
  { name: "DSA-Study-Hub", stars: 20, forks: 7, lang: "TypeScript" },
];

export function GitHubActivity() {
  const reduce = useReducedMotion();
  const anim = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <div className="section-watermark top-0 right-0">Git</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...anim(0)}>
          <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2 block">
            GitHub profile snapshot
          </span>
          <h2 className="font-display text-[2.5rem] md:text-[4rem] leading-[0.95] tracking-tight text-ink mb-12">
            Featured repositories
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            {...anim(0.1)}
            className="bg-forest rounded-2xl p-6 md:p-8 text-cream"
          >
            <div className="flex items-center gap-2 mb-6">
              <GithubLogo size={18} />
              <span className="font-mono text-xs text-cream/60">
                toxicbishop
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="font-display text-3xl text-cream">15+</p>
                <p className="font-mono text-[10px] text-cream/40 uppercase tracking-wider mt-1">
                  Repos
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-cream">65+</p>
                <p className="font-mono text-[10px] text-cream/40 uppercase tracking-wider mt-1">
                  Stars
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-cream">21+</p>
                <p className="font-mono text-[10px] text-cream/40 uppercase tracking-wider mt-1">
                  Forks
                </p>
              </div>
            </div>
            <a
              href="https://github.com/toxicbishop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors font-mono"
            >
              View profile &rarr;
            </a>
          </motion.div>

          <motion.div
            {...anim(0.15)}
            className="space-y-3"
          >
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/toxicbishop/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-4 border border-ink/5 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-ink font-mono">
                    {repo.name}
                  </span>
                  <span className="flex items-center gap-3 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks}
                    </span>
                  </span>
                </div>
                <span className="text-[11px] font-mono text-muted">
                  {repo.lang}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
