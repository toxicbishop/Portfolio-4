"use client";

// Social link arrow: uses transform + opacity — both composited.
// Explicit transition values instead of implicit Tailwind utility.
const ARROW_TRANSITION = "transform 200ms cubic-bezier(0.23, 1, 0.32, 1), opacity 200ms cubic-bezier(0.23, 1, 0.32, 1)" as const;

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-ink text-cream pt-24 pb-8 px-6 md:px-10 mt-10 rounded-t-[3rem] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-2">
            <h3 className="font-display text-4xl md:text-5xl mb-6">Let's connect.</h3>
            <p className="text-cream/60 max-w-[30ch] mb-8 leading-relaxed">
              Open to new opportunities, interesting collaborations, and talking about tech or design.
            </p>
            <a href="mailto:pranavarun19@gmail.com" className="inline-block font-mono text-lg hover:text-mustard transition-colors border-b border-cream/20 hover:border-mustard pb-1">
              pranavarun19@gmail.com
            </a>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cream/40 mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><button onClick={() => scrollTo("work")} className="hover:text-mustard transition-colors text-sm">Work</button></li>
              <li><button onClick={() => scrollTo("craft")} className="hover:text-mustard transition-colors text-sm">Craft</button></li>
              <li><button onClick={() => scrollTo("writing")} className="hover:text-mustard transition-colors text-sm">Writing</button></li>
              <li><button onClick={() => scrollTo("contact")} className="hover:text-mustard transition-colors text-sm">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cream/40 mb-6">Socials</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="https://github.com/toxicbishop" target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors flex items-center justify-between group text-sm w-32">GitHub <span style={{ transition: ARROW_TRANSITION }} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">&#8599;</span></a></li>
              <li><a href="https://gitlab.com/toxicbishop" target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors flex items-center justify-between group text-sm w-32">GitLab <span style={{ transition: ARROW_TRANSITION }} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">&#8599;</span></a></li>
              <li><a href="https://www.linkedin.com/in/pranav-arun" target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors flex items-center justify-between group text-sm w-32">LinkedIn <span style={{ transition: ARROW_TRANSITION }} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">&#8599;</span></a></li>
              <li><a href="https://x.com/Pranav63076884" target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors flex items-center justify-between group text-sm w-32">X (Twitter) <span style={{ transition: ARROW_TRANSITION }} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">&#8599;</span></a></li>
              <li><a href="https://discord.com/users/701732138269016064" target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors flex items-center justify-between group text-sm w-32">Discord <span style={{ transition: ARROW_TRANSITION }} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">&#8599;</span></a></li>
              <li><a href="https://www.instagram.com/toxicbishop_" target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors flex items-center justify-between group text-sm w-32">Instagram <span style={{ transition: ARROW_TRANSITION }} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">&#8599;</span></a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12 md:mt-0">
          <div className="w-full text-center mb-8 relative group overflow-hidden">
            <h2 className="font-display text-[18vw] leading-[0.8] text-cream/[0.03] tracking-tighter cursor-default select-none transition-colors duration-700 group-hover:text-cream/[0.08]">
              PRANAV
            </h2>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-cream/10 text-xs font-mono text-cream/40">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <span>&copy; {new Date().getFullYear()}</span>
              <span>&#10022;</span>
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
