import { isPlaceholder, projects } from '../data/content.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      lede="Coursework, lab work and applications I built and documented myself."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            delay={index * 60}
            className="flex h-full flex-col rounded-xl border border-line bg-panel/70 p-6 transition-colors hover:border-signal/35"
          >
            <span className="w-fit rounded border border-line px-2 py-0.5 text-xs text-muted">
              {project.kind}
            </span>

            <h3 className="mt-4 text-lg font-semibold leading-snug text-text">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

            <div className="mt-5">
              <p className="text-xs text-muted">{project.stackLabel}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded border border-line/80 px-2 py-0.5 font-mono text-xs text-text/75">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {isPlaceholder(project.link) ? (
              <p className="mt-5 text-xs text-ember">Link placeholder: {project.link}</p>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 w-fit text-sm font-medium text-signal underline-offset-4 hover:underline"
              >
                Open the project
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
