import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ThinkingLevel } from '../types'

export function ThinkingLevelTag({ level }: { level: ThinkingLevel }) {
  const styles: Record<ThinkingLevel, string> = {
    LOTS: 'bg-azure-50 text-azure-700 border-azure-100',
    MOTS: 'bg-tangerine-50 text-tangerine-600 border-tangerine-100',
    HOTS: 'bg-charcoal-800 text-white border-charcoal-800',
  }
  return (
    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[level]}`}>
      {level}
    </span>
  )
}

export function PrepTag({ level }: { level: 'Low' | 'Medium' | 'High' }) {
  return <span className="text-xs text-charcoal-700/70">Preparation: {level}</span>
}

export function PathwayCard({
  to,
  title,
  description,
  accent = 'azure',
}: {
  to: string
  title: string
  description: string
  accent?: 'azure' | 'tangerine'
}) {
  const borderColor = accent === 'azure' ? 'border-l-azure-500' : 'border-l-tangerine-500'
  return (
    <Link
      to={to}
      className={`group block rounded-card border border-charcoal-800/10 border-l-4 ${borderColor} bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5`}
    >
      <h3 className="font-display text-lg font-semibold text-charcoal-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700/85">{description}</p>
      <span className="mt-3 inline-block text-sm font-medium text-azure-600 group-hover:text-azure-700">
        Open
      </span>
    </Link>
  )
}

export function SectionHeading({ eyebrow, title, blurb }: { eyebrow?: string; title: string; blurb?: string }) {
  return (
    <div className="mb-6">
      {eyebrow && <p className="mb-1 text-sm font-medium text-tangerine-600">{eyebrow}</p>}
      <h1 className="font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">{title}</h1>
      {blurb && <p className="mt-2 max-w-2xl text-charcoal-700/85">{blurb}</p>}
    </div>
  )
}

export function Accordion({ title, subtitle, children, defaultOpen = false }: { title: string; subtitle?: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-card border border-charcoal-800/10 bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span>
          <span className="font-display text-base font-semibold text-charcoal-900">{title}</span>
          {subtitle && <span className="mt-0.5 block text-sm text-charcoal-700/70">{subtitle}</span>}
        </span>
        <span className="shrink-0 text-xl leading-none text-azure-600" aria-hidden="true">
          {open ? '\u2212' : '+'}
        </span>
      </button>
      {open && <div className="border-t border-charcoal-800/10 px-5 py-4">{children}</div>}
    </div>
  )
}

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-azure-600 hover:text-azure-700">
      ← {label}
    </Link>
  )
}

export function EmptyState({ message }: { message: string }) {
  return <p className="rounded-card border border-dashed border-charcoal-800/20 p-6 text-center text-charcoal-700/70">{message}</p>
}
