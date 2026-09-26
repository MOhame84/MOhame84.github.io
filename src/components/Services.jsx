import { services } from '../data/content.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'

export default function Services() {
  return (
    <Section
      id="services"
      title="Services"
      lede="What I can take on as a freelancer today."
    >
      <Reveal>
        <p className="max-w-reading rounded-lg border border-line bg-raised/50 p-5 text-sm leading-relaxed text-muted">
          {services.note}
        </p>
      </Reveal>

      <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {services.items.map((service, index) => (
          <Reveal key={service.title} delay={index * 45}>
            <dt className="flex items-baseline gap-2 text-base font-medium text-text">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-verify" />
              {service.title}
            </dt>
            <dd className="mt-2 pl-[0.875rem] text-sm leading-relaxed text-muted">{service.body}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
