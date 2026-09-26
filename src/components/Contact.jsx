import { contact, isPlaceholder } from '../data/content.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'

const channels = [
  { label: 'Email', value: contact.email, href: (v) => `mailto:${v}` },
  { label: 'LinkedIn', value: contact.linkedin, href: (v) => v },
  { label: 'Upwork', value: contact.upwork, href: (v) => v },
  { label: 'Freelancer.com', value: contact.freelancer, href: (v) => v },
  { label: 'Mostaql', value: contact.mostaql, href: (v) => v },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      lede="Tell me what you need and I will tell you honestly whether I can help."
    >
      <Reveal>
        <p className="max-w-reading leading-relaxed text-muted">
          I am open to junior freelance work, internships, and collaboration on security or Python
          projects. Messages in English or Arabic are both fine, and I usually reply within a day.
        </p>
      </Reveal>

      <dl className="mt-10 divide-y divide-line border-y border-line">
        {channels.map((channel, index) => {
          const pending = isPlaceholder(channel.value)
          return (
            <Reveal
              key={channel.label}
              delay={index * 60}
              className="flex flex-wrap items-baseline justify-between gap-3 py-4"
            >
              <dt className="text-sm text-muted">{channel.label}</dt>
              <dd className="text-sm">
                {pending ? (
                  <span className="font-mono text-ember">{channel.value}</span>
                ) : (
                  <a
                    href={channel.href(channel.value)}
                    target={channel.label === 'Email' ? undefined : '_blank'}
                    rel={channel.label === 'Email' ? undefined : 'noreferrer'}
                    className="text-text underline-offset-4 hover:text-signal hover:underline"
                  >
                    {channel.value}
                  </a>
                )}
              </dd>
            </Reveal>
          )
        })}
        <Reveal delay={200} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
          <dt className="text-sm text-muted">Location</dt>
          <dd className="text-sm text-text">{contact.location}</dd>
        </Reveal>
      </dl>

      <Reveal delay={260} className="mt-8">
        <a
          href={isPlaceholder(contact.email) ? '#top' : `mailto:${contact.email}`}
          className="inline-block rounded-md bg-signal px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-[#6BAEEF]"
        >
          Send an email
        </a>
      </Reveal>
    </Section>
  )
}
