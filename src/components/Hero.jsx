import { contact, heroFacts, isPlaceholder, profile } from '../data/content.js'

export default function Hero() {
  const linkedinReady = !isPlaceholder(contact.linkedin)

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* One quiet light source, top-left, instead of glow everywhere. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]"
      />

      <div className="shell relative grid gap-14 pb-16 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start lg:gap-16 lg:pb-20">
        <div>
          <p className="animate-rise text-sm text-signal" style={{ animationDelay: '60ms' }}>
            {profile.role}
          </p>

          <h1
            className="animate-rise mt-6 max-w-[18ch] text-[2rem] font-semibold leading-[1.13] text-text sm:text-5xl sm:leading-[1.1] lg:text-[3.4rem]"
            style={{ animationDelay: '140ms' }}
          >
            {profile.headline}
          </h1>

          <p
            className="animate-rise mt-6 max-w-reading text-lg leading-relaxed text-muted"
            style={{ animationDelay: '220ms' }}
          >
            {profile.intro}
          </p>

          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#projects"
              className="rounded-md bg-signal px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-[#6BAEEF]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-5 py-3 text-sm font-medium text-text transition-colors hover:border-signal/50"
            >
              Contact me
            </a>
            <a
              href={linkedinReady ? contact.linkedin : '#contact'}
              target={linkedinReady ? '_blank' : undefined}
              rel={linkedinReady ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-md px-3 py-3 text-sm text-muted transition-colors hover:text-text"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <aside
          className="animate-rise relative overflow-hidden rounded-xl border border-line bg-panel/80 p-6"
          style={{ animationDelay: '380ms' }}
        >
          <div
            aria-hidden="true"
            className="animate-sweep absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-signal/10 to-transparent"
          />
          <h2 className="relative text-sm font-medium text-text">Where I am right now</h2>
          <dl className="relative mt-5 space-y-5">
            {heroFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs text-muted">{fact.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-text">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
