export default function FooterSection({ title, children }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
        {title}
      </h4>
      {children}
    </div>
  )
}
