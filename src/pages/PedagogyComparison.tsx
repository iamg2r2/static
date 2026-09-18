import { useState } from 'react'
import Layout from '../components/Layout'
import { SectionHeading, ThinkingLevelTag } from '../components/ui'
import { pedagogies } from '../data/pedagogies'

const defaultSelection = ['pbl', 'case-based', 'peer-instruction', 'flipped']

export default function PedagogyComparison() {
  const [selected, setSelected] = useState<string[]>(defaultSelection)

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : prev.length < 5 ? [...prev, id] : prev))
  }

  const rows = pedagogies.filter((p) => selected.includes(p.id))

  return (
    <Layout>
      <SectionHeading
        title="Compare Pedagogies"
        blurb="No approach is labelled “best” — compare what each is a strong fit for, and what it costs to run."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {pedagogies.map((p) => (
          <button
            key={p.id}
            onClick={() => toggle(p.id)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
              selected.includes(p.id) ? 'border-azure-500 bg-azure-500 text-white' : 'border-charcoal-800/15 text-charcoal-700 hover:border-azure-300'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
      <p className="mb-4 text-xs text-charcoal-700/60">Choose up to 5 to compare.</p>

      <div className="overflow-x-auto rounded-card border border-charcoal-800/10 bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-charcoal-800/10 bg-charcoal-800/5">
            <tr>
              <Th>Approach</Th>
              <Th>Strong fit for</Th>
              <Th>Thinking level</Th>
              <Th>Preparation</Th>
              <Th>Useful evidence</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id} className="border-b border-charcoal-800/5 last:border-0">
                <Td><span className="font-medium text-charcoal-900">{p.name}</span></Td>
                <Td>{p.whyUse}</Td>
                <Td>
                  <div className="flex flex-wrap gap-1">
                    {p.thinkingLevels.map((l) => <ThinkingLevelTag key={l} level={l} />)}
                  </div>
                </Td>
                <Td>{p.preparation}</Td>
                <Td>{p.evidenceTypes.slice(0, 2).join(', ')}</Td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><Td colSpan={5}><span className="text-charcoal-700/50">Select at least one pedagogy above.</span></Td></tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 font-semibold text-charcoal-900">{children}</th>
}
function Td({ children, colSpan }: { children: React.ReactNode; colSpan?: number }) {
  return <td className="px-4 py-3 align-top text-charcoal-700/90" colSpan={colSpan}>{children}</td>
}
