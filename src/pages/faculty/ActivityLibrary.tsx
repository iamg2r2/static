import { useMemo, useState } from 'react'
import Layout from '../../components/Layout'
import { Accordion, SectionHeading, ThinkingLevelTag, PrepTag } from '../../components/ui'
import { activities } from '../../data/activities'
import BookmarkButton from '../../components/BookmarkButton'

export default function ActivityLibrary() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => activities.filter((a) => query.trim() === '' || a.name.toLowerCase().includes(query.toLowerCase()) || a.purpose.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  return (
    <Layout>
      <SectionHeading title="What can I actually do in class?" blurb="Practical classroom activity recipes, ready to use." />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search activities…"
        aria-label="Search activities"
        className="mb-6 w-full rounded-md border border-charcoal-800/20 px-3 py-2 text-sm sm:max-w-xs"
      />
      <div className="space-y-3">
        {filtered.map((a) => (
          <Accordion key={a.id} title={a.name} subtitle={`${a.time} · ${a.classSize}`}>
            <div className="space-y-2 text-sm text-charcoal-700/90">
              <p>{a.purpose}</p>
              <p><span className="font-medium text-charcoal-900">Teacher does: </span>{a.teacherActions.join('; ')}</p>
              <p><span className="font-medium text-charcoal-900">Students do: </span>{a.studentActions.join('; ')}</p>
              <p><span className="font-medium text-charcoal-900">Assessment: </span>{a.assessment}</p>
              <p><span className="font-medium text-charcoal-900">Evidence: </span>{a.evidence.join(', ')}</p>
              <p><span className="font-medium text-charcoal-900">Expected outcome: </span>{a.expectedOutcome}</p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {a.thinkingLevels.map((l) => <ThinkingLevelTag key={l} level={l} />)}
                <PrepTag level={a.preparation} />
                <BookmarkButton item={{ id: `activity-${a.id}`, type: 'activity', label: a.name }} />
              </div>
            </div>
          </Accordion>
        ))}
      </div>
    </Layout>
  )
}
