import { certifications, learningTracks } from '../data/content.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'

export default function Certifications() {
  return (
    <Section
      id="learning"
      title="Certifications & learning"
      lede="Listed with their real status, nothing claimed early."
    >
      <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-panel/60">
        {certifications.map((certification, index) => (
          <Reveal
            as="li"
            key={certification.name + index}
            delay={index * 60}
            className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
          >
            <span className="text-sm text-text">{certification.name}</span>
            <span className="rounded border border-line px-2 py-1 font-mono text-xs text-muted">
              {certification.status}
            </span>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200} className="mt-8">
        <h3 className="text-base font-semibold text-text">Currently learning</h3>
        <ul className="mt-3 max-w-reading space-y-2 text-sm text-muted">
          {learningTracks.map((track) => (
            <li key={track} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-signal/60" />
              {track}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
