export default function Tag({ children }) {
  return (
    <li className="rounded-full border border-line bg-raised/60 px-3 py-1 text-sm text-muted transition-colors hover:border-signal/40 hover:text-text">
      {children}
    </li>
  )
}
