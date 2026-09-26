import { contact, isPlaceholder, navLinks, profile } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-line bg-panel/40">
      <div className="shell flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-text">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {profile.role}, based in {profile.location}.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-muted transition-colors hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <p>
          {isPlaceholder(contact.linkedin) ? (
            <span>Built with React, Vite and Tailwind CSS.</span>
          ) : (
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-text">
              Connect on LinkedIn
            </a>
          )}
        </p>
      </div>
    </footer>
  )
}
