export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6 py-16 sm:px-8">
      {/* Background subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.10),transparent_60%)]"
      />
      {/* Accent glow blob */}
      <div aria-hidden="true" className="accent-glow -top-10 -left-10 animate-float" />
      <div aria-hidden="true" className="accent-glow bottom-0 right-0 animate-float" style={{ animationDelay: "1200ms" }} />

      {/* Centered Card */}
      <section
        aria-label="Welcome card"
        className="card animate-fade-in-up relative w-full max-w-xl sm:max-w-2xl"
        role="region"
      >
        {/* Card content */}
        <div className="relative p-6 sm:p-8 md:p-10">
          <header className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm text-muted">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
              Next.js • TypeScript • Modern UI
            </span>
          </header>

          <h1 className="text-accent-gradient text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Hello, World.
          </h1>

          <p className="text-muted mt-3 sm:mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            A refined starting point with a centered, animated card, silky-smooth transitions,
            and a tasteful color palette. Built for responsiveness and delight.
          </p>

          {/* Interactive Actions */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#"
              className="group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm sm:text-base font-medium"
              style={{
                background: "linear-gradient(135deg, var(--color-accent), #8be9f4)",
                color: "#0c4a6e",
                boxShadow: "0 10px 20px rgba(34, 211, 238, 0.35)",
              }}
            >
              Get Started
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.293 3.293a1 1 0 011.414 0l4.999 4.999a1 1 0 010 1.414l-4.999 5a1 1 0 01-1.414-1.415L15.586 10l-3.293-3.293a1 1 0 010-1.414z" />
                <path d="M2 10a1 1 0 011-1h13.586l-2.293-2.293a1 1 0 111.414-1.414l4.001 4a1 1 0 010 1.414l-4.001 4a1 1 0 11-1.414-1.414L16.586 11H3a1 1 0 01-1-1z" />
              </svg>
            </a>

            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm sm:text-base font-medium text-muted hover:border-[var(--color-accent)] hover:text-[var(--color-primary)]"
            >
              Learn More
            </a>
          </div>

          {/* Decorative bottom bar */}
          <div className="mt-8 sm:mt-10">
            <div
              className="h-1.5 w-24 rounded-full"
              style={{ background: "linear-gradient(90deg, var(--color-accent), transparent)" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Animated background pattern within card */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <svg
            aria-hidden="true"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>
    </main>
  );
}
