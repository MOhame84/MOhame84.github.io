import { about } from '../data/content.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import Tag from './ui/Tag.jsx'

export default function About() {
  return (
    <Section id="about" title="About" lede="Who is behind the projects below.">
      <div className="max-w-reading space-y-5">
        {about.paragraphs.map((paragraph, index) => (
          <Reveal as="p" key={index} delay={index * 70} className="leading-relaxed text-muted">
            {paragraph}
          </Reveal>
        ))}
      </div>

      <Reveal delay={180} className="mt-10">
        <ul className="flex flex-wrap gap-2">
          {about.traits.map((trait) => (
            <Tag key={trait}>{trait}</Tag>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
