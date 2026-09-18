import { useState } from 'react'
import { Accordion, SectionHeading, ThinkingLevelTag } from '../components/ui'
import Layout from '../components/Layout'
import { assessments } from '../data/assessments'
import { assessmentRedesignExamples } from '../data/thinkingLevels'
import { useRole } from '../hooks/useRole'
import BookmarkButton from '../components/BookmarkButton'

export default function AssessmentCompanion() {
  const role = useRole()
  const [redesignIndex, setRedesignIndex] = useState(0)
  const example = assessmentRedesignExamples[redesignIndex]

  return (
    <Layout>
      <SectionHeading
        eyebrow={role === 'trainer' ? 'Assessment Conversation' : 'Improve My Assessment'}
        title="How can I assess this?"
        blurb={
          role === 'trainer'
            ? 'Use these to explore whether a faculty member\u2019s assessment measures what they actually want students to learn.'
            : 'Turn my assessment into something more meaningful.'
        }
      />

      <div className="mb-10 space-y-3">
        {assessments.map((a) => (
          <Accordion key={a.id} title={a.name} subtitle={a.measures}>
            <div className="space-y-2 text-sm text-charcoal-700/90">
              <p><span className="font-medium text-charcoal-900">When to use: </span>{a.whenToUse}</p>
              <p><span className="font-medium text-charcoal-900">Example: </span>{a.example}</p>
              <p><span className="font-medium text-charcoal-900">Possible evidence: </span>{a.evidence.join(', ')}</p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {a.thinkingLevels.map((l) => <ThinkingLevelTag key={l} level={l} />)}
                <BookmarkButton item={{ id: `assessment-${a.id}`, type: 'assessment', label: a.name }} />
              </div>
            </div>
          </Accordion>
        ))}
      </div>

      <div className="rounded-card border-2 border-tangerine-400 bg-white p-6">
        <h2 className="font-display text-lg font-semibold text-charcoal-900">
          {role === 'trainer' ? 'A redesign to walk through together' : 'See a redesign in action'}
        </h2>
        <p className="mt-1 text-sm text-charcoal-700/80">
          HOTS is not about making a question longer or harder — it puts the concept to work on a real, unresolved situation.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {assessmentRedesignExamples.map((ex, i) => (
            <button
              key={ex.discipline}
              onClick={() => setRedesignIndex(i)}
              className={`rounded-full border px-3 py-1 text-sm font-medium ${
                redesignIndex === i ? 'border-tangerine-500 bg-tangerine-50 text-tangerine-600' : 'border-charcoal-800/15 text-charcoal-700'
              }`}
            >
              {ex.discipline}
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <p className="rounded-md bg-charcoal-800/5 p-3"><span className="font-semibold">Original: </span>{example.original}</p>
          <p className="rounded-md bg-azure-50 p-3 text-azure-700"><span className="font-semibold">LOTS: </span>{example.lots}</p>
          <p className="rounded-md bg-tangerine-50 p-3 text-tangerine-700"><span className="font-semibold">MOTS: </span>{example.mots}</p>
          <p className="rounded-md bg-charcoal-800/5 p-3 text-charcoal-900"><span className="font-semibold">HOTS: </span>{example.hots}</p>
          <p className="text-xs text-charcoal-700/60">{example.note}</p>
        </div>
      </div>
    </Layout>
  )
}
