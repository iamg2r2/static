import Layout from '../components/Layout'
import { SectionHeading } from '../components/ui'
import { evidenceStages, evidencePrinciple } from '../data/evidence'
import { useRole } from '../hooks/useRole'

export default function EvidenceHelper() {
  const role = useRole()
  return (
    <Layout>
      <SectionHeading
        eyebrow={role === 'trainer' ? 'Evidence Conversation' : 'Evidence Helper'}
        title="What evidence should I keep?"
        blurb={
          role === 'trainer'
            ? 'Use this to help a faculty member recognise the evidence their own teaching already produces.'
            : 'Authentic evidence that shows what happened, without extra work.'
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {evidenceStages.map((stage) => (
          <div key={stage.stage} className="rounded-card border border-charcoal-800/10 bg-white p-5">
            <h2 className="font-display font-semibold text-charcoal-900">{stage.stage}</h2>
            <p className="mt-1 text-sm text-charcoal-700/70">{stage.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-charcoal-700/90">
              {stage.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-card border-2 border-azure-400 bg-azure-50 p-5">
        <p className="text-sm font-medium text-azure-700">Important</p>
        <p className="mt-1 text-sm text-charcoal-800">{evidencePrinciple}</p>
      </div>
    </Layout>
  )
}
