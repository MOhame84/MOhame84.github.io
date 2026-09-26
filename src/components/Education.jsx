import { education } from '../data/content.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'

export default function Education() {
  return (
    <Section id="education" title="Education" lede="Where the foundations were built.">
      <ol className="relative space-y-10 border-l border-line pl-6">
        {education.map((entry, index) => (
          <Reveal as="li" key={entry.school} delay={index * 80} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-[1.9rem] h-2.5 w-2.5 rounded-full border border-signal bg-ink"
            />
            <p className="text-xs text-muted">{entry.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-text">{entry.school}</h3>
            <p className="mt-1 text-sm text-signal">{entry.programme}</p>
            <p className="mt-3 max-w-reading text-sm leading-relaxed text-muted">{entry.detail}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
