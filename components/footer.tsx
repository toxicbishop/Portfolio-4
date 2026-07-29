export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm text-ink">
            Pranav Arun
          </span>
          <span className="text-muted text-xs font-mono">&middot;</span>
          <span className="text-xs text-muted font-mono">
            Engineer · AI/ML
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted font-mono">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>&#10022;</span>
          <a
            href="https://github.com/toxicbishop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
