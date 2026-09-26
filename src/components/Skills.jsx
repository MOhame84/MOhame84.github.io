import { skillGroups } from '../data/content.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import Tag from './ui/Tag.jsx'

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      lede="Grouped by where I use them, not by how confident they sound."
    >
      <div className="space-y-10">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 60}>
            <div className="border-l border-line pl-5 sm:pl-6">
              <h3 className="text-base font-semibold text-text">{group.title}</h3>
              <p className="mt-1 max-w-reading text-sm text-muted">{group.note}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
