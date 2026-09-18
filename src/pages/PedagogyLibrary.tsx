import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { SectionHeading, ThinkingLevelTag } from '../components/ui'
import { pedagogies } from '../data/pedagogies'
import { useRole } from '../hooks/useRole'
import { ThinkingLevel } from '../types'

export default function PedagogyLibrary() {
  const role = useRole()
  const base = role === 'trainer' ? '/trainer' : '/faculty'
  const [query, setQuery] = useState('')
  const [levelFilter, setLevelFilter] = useState<ThinkingLevel | 'all'>('all')

  const filtered = useMemo(() => {
    return pedagogies.filter((p) => {
      const matchesQuery =
        query.trim() === '' ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.whatIsIt.toLowerCase().includes(query.toLowerCase())
      const matchesLevel = levelFilter === 'all' || p.thinkingLevels.includes(levelFilter)
      return matchesQuery && matchesLevel
    })
  }, [query, levelFilter])

  return (
    <Layout>
      <SectionHeading
        title="Pedagogy Library"
        blurb={
          role === 'trainer'
            ? 'Approaches worth raising with faculty, framed as options for a conversation — not prescriptions.'
            : 'Find a teaching approach that fits what you want your students to do.'
        }
      />

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pedagogies…"
          aria-label="Search pedagogies"
          className="w-full rounded-md border border-charcoal-800/20 px-3 py-2 text-sm sm:max-w-xs"
        />
        <div className="flex gap-2">
          {(['all', 'LOTS', 'MOTS', 'HOTS'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(level)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                levelFilter === level
                  ? 'border-azure-500 bg-azure-500 text-white'
                  : 'border-charcoal-800/20 text-charcoal-700 hover:border-azure-400'
              }`}
            >
              {level === 'all' ? 'All levels' : level}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-3 text-sm text-charcoal-700/60">{filtered.length} of {pedagogies.length} pedagogies</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            to={`${base}/pedagogies/${p.id}`}
            className="flex flex-col rounded-card border border-charcoal-800/10 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <h3 className="font-display text-base font-semibold text-charcoal-900">{p.name}</h3>
            <p className="mt-1.5 flex-1 text-sm text-charcoal-700/80">{p.whatIsIt}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.thinkingLevels.map((l) => (
                <ThinkingLevelTag key={l} level={l} />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
