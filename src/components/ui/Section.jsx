import Reveal from './Reveal.jsx'

/**
 * Asymmetric section shell: the heading sits in a narrow sticky column on
 * large screens, the content fills the wide column beside it.
 */
export default function Section({ id, title, lede, children }) {
  return (
    <section id={id} className="shell scroll-mt-28 py-14 sm:py-16">
      <div className="hairline grid gap-y-8 pt-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal as="h2" className="text-2xl font-semibold text-text sm:text-[1.75rem]">
            {title}
          </Reveal>
          {lede ? (
            <Reveal as="p" delay={80} className="mt-3 text-sm leading-relaxed text-muted">
              {lede}
            </Reveal>
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
