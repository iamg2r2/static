import { useState } from 'react'
import Layout from '../components/Layout'
import { SectionHeading } from '../components/ui'
import { thinkingLevelInfo, hotsExamples } from '../data/thinkingLevels'
import { useRole } from '../hooks/useRole'

export default function ThinkingLevels() {
  const role = useRole()
  const [question, setQuestion] = useState('')
  const [selectedExample, setSelectedExample] = useState(hotsExamples[0])

  return (
    <Layout>
      <SectionHeading
        title="LOTS / MOTS / HOTS"
        blurb={
          role === 'trainer'
            ? 'Use this to help a faculty member see the difference between recall and deeper thinking, with real examples.'
            : 'Help me understand and develop students\u2019 thinking.'
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {(['LOTS', 'MOTS', 'HOTS'] as const).map((level) => {
          const info = thinkingLevelInfo[level]
          return (
            <div key={level} className="rounded-card border border-charcoal-800/10 bg-white p-5">
              <h2 className="font-display font-semibold text-charcoal-900">{info.label}</h2>
              <p className="mt-1 text-xs font-medium text-azure-600">{info.verbs.join(', ')}</p>
              <p className="mt-2 text-sm text-charcoal-700/85">{info.description}</p>
              <p className="mt-3 rounded-md bg-azure-50 p-2.5 text-xs text-charcoal-800">{info.classroomExample}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-10 rounded-card border-2 border-tangerine-400 bg-white p-6">
        <h2 className="font-display text-lg font-semibold text-charcoal-900">Turn This Into HOTS</h2>
        <p className="mt-1 text-sm text-charcoal-700/80">Enter a question you currently ask, and see how it could look at each thinking level.</p>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. What is cloud computing?"
          className="mt-3 w-full rounded-md border border-charcoal-800/20 px-3 py-2 text-sm"
        />
        <p className="mt-4 text-sm font-medium text-charcoal-900">See a worked example from a discipline close to yours:</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {hotsExamples.map((ex) => (
            <button
              key={ex.discipline}
              onClick={() => setSelectedExample(ex)}
              className={`rounded-full border px-3 py-1 text-sm font-medium ${
                selectedExample.discipline === ex.discipline
                  ? 'border-tangerine-500 bg-tangerine-50 text-tangerine-600'
                  : 'border-charcoal-800/15 text-charcoal-700 hover:border-tangerine-300'
              }`}
            >
              {ex.discipline}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          <ExampleRow label="LOTS" text={selectedExample.lots} color="azure" />
          <ExampleRow label="MOTS" text={selectedExample.mots} color="tangerine" />
          <ExampleRow label="HOTS" text={selectedExample.hots} color="charcoal" />
        </div>
        {question.trim() !== '' && (
          <p className="mt-4 text-xs text-charcoal-700/60">
            Use the pattern above on your own question — "{question}" — by first asking what a student would recall, then apply,
            then analyse or evaluate about it in an unresolved, realistic situation.
          </p>
        )}
      </div>
    </Layout>
  )
}

function ExampleRow({ label, text, color }: { label: string; text: string; color: 'azure' | 'tangerine' | 'charcoal' }) {
  const styles = {
    azure: 'border-azure-200 bg-azure-50 text-azure-700',
    tangerine: 'border-tangerine-200 bg-tangerine-50 text-tangerine-700',
    charcoal: 'border-charcoal-800/20 bg-charcoal-800/5 text-charcoal-900',
  }
  return (
    <div className={`rounded-md border p-3 text-sm ${styles[color]}`}>
      <span className="mr-2 font-semibold">{label}</span>
      {text}
    </div>
  )
}
