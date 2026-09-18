import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { SectionHeading } from '../components/ui'
import { pedagogies } from '../data/pedagogies'
import { activities } from '../data/activities'
import { assessments } from '../data/assessments'
import { hotsExamples } from '../data/thinkingLevels'
import { useRole } from '../hooks/useRole'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const role = useRole()
  const base = role === 'trainer' ? '/trainer' : '/faculty'
  const q = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (q === '') return null
    return {
      pedagogies: pedagogies.filter((p) => p.name.toLowerCase().includes(q) || p.whatIsIt.toLowerCase().includes(q)),
      activities: activities.filter((a) => a.name.toLowerCase().includes(q) || a.purpose.toLowerCase().includes(q)),
      assessments: assessments.filter((a) => a.name.toLowerCase().includes(q) || a.measures.toLowerCase().includes(q)),
      hots: hotsExamples.filter((h) => h.discipline.toLowerCase().includes(q) || h.topic.toLowerCase().includes(q)),
    }
  }, [q])

  return (
    <Layout>
      <SectionHeading title="Search" blurb="Search pedagogies, activities, assessments, HOTS examples…" />
      <input
        type="search"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search pedagogies, activities, assessments, HOTS examples…"
        aria-label="Search JosTEL content"
        className="mb-8 w-full rounded-md border border-charcoal-800/20 px-4 py-3 text-sm"
      />

      {results && (
        <div className="space-y-8">
          <ResultSection title="Pedagogies">
            {results.pedagogies.map((p) => (
              <Link key={p.id} to={`${base}/pedagogies/${p.id}`} className="block rounded-md border border-charcoal-800/10 px-3 py-2 hover:bg-azure-50">
                {p.name}
              </Link>
            ))}
          </ResultSection>
          <ResultSection title="Activities">
            {results.activities.map((a) => <div key={a.id} className="rounded-md border border-charcoal-800/10 px-3 py-2">{a.name}</div>)}
          </ResultSection>
          <ResultSection title="Assessments">
            {results.assessments.map((a) => <div key={a.id} className="rounded-md border border-charcoal-800/10 px-3 py-2">{a.name}</div>)}
          </ResultSection>
          <ResultSection title="HOTS examples">
            {results.hots.map((h) => <div key={h.discipline} className="rounded-md border border-charcoal-800/10 px-3 py-2">{h.discipline}: {h.topic}</div>)}
          </ResultSection>
        </div>
      )}
    </Layout>
  )
}

function ResultSection({ title, children }: { title: string; children: React.ReactNode }) {
  const items = Array.isArray(children) ? children : [children]
  const hasResults = items.some(Boolean) && (items as any[]).flat().length > 0
  if (!hasResults) return null
  return (
    <div>
      <h2 className="mb-2 font-display font-semibold text-charcoal-900">{title}</h2>
      <div className="space-y-1.5 text-sm">{children}</div>
    </div>
  )
}
