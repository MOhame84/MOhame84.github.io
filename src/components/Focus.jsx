import { focusAreas } from '../data/content.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'

export default function Focus() {
  return (
    <Section
      id="focus"
      title="Cybersecurity focus"
      lede="The defensive areas I spend most of my lab time on."
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {focusAreas.map((area, index) => (
          <Reveal key={area.title} delay={index * 70} className="bg-panel p-6">
            <h3 className="text-base font-semibold text-text">{area.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{area.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={220}>
        <p className="mt-6 max-w-reading text-sm leading-relaxed text-muted">
          All of this practice happens in environments built for it: training platforms, intentionally
          vulnerable applications I run myself, and simulated networks. I work only on systems I am
          authorised to work on.
        </p>
      </Reveal>
    </Section>
  )
}
