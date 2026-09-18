import { useState } from 'react'
import Layout from '../../components/Layout'
import { Accordion, SectionHeading } from '../../components/ui'
import { trainerScenarios } from '../../data/trainerScenarios'

export default function WhatIfGuide() {
  const [query, setQuery] = useState('')
  const filtered = trainerScenarios.filter((s) => query.trim() === '' || s.situation.toLowerCase().includes(query.toLowerCase()))

  return (
    <Layout>
      <SectionHeading
        eyebrow="Follow-Up Guide"
        title="What if…?"
        blurb="Common situations, a way to explore before jumping to a fix, and small, low-risk interventions to suggest."
      />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tell us what you're trying to help the faculty member with…"
        aria-label="Search situations"
        className="mb-6 w-full rounded-md border border-charcoal-800/20 px-3 py-2 text-sm sm:max-w-md"
      />
      <div className="space-y-3">
        {filtered.map((s) => (
          <Accordion key={s.id} title={s.situation}>
            <div className="space-y-3 text-sm text-charcoal-700/90">
              <p><span className="font-medium text-charcoal-900">Explore first: </span>{s.exploreFirst}</p>
              <div>
                <p className="font-medium text-charcoal-900">Then suggest questions:</p>
                <ul className="mt-1 list-disc space-y-1 pl-4">
                  {s.questions.map((q) => <li key={q}>"{q}"</li>)}
                </ul>
              </div>
              <div>
                <p className="font-medium text-charcoal-900">Appropriate small interventions:</p>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {s.smallInterventions.map((si) => (
                    <li key={si} className="rounded-full bg-tangerine-50 px-3 py-1 text-xs font-medium text-tangerine-700">{si}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Accordion>
        ))}
      </div>
    </Layout>
  )
}
