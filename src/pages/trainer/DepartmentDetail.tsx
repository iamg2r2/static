import { Link, useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import { BackLink, ThinkingLevelTag } from '../../components/ui'
import { getDepartmentById } from '../../data/departments'
import { pedagogies } from '../../data/pedagogies'
import { assessments } from '../../data/assessments'

export default function DepartmentDetail() {
  const { id } = useParams()
  const department = id ? getDepartmentById(id) : undefined

  if (!department) {
    return (
      <Layout>
        <BackLink to="/trainer/departments" label="Back to Department Explorer" />
        <p>We couldn't find that department.</p>
      </Layout>
    )
  }

  const relevantPedagogies = pedagogies.filter((p) => department.pedagogyIds.includes(p.id))
  const levelsPresent = {
    LOTS: relevantPedagogies.filter((p) => p.thinkingLevels.includes('LOTS')),
    MOTS: relevantPedagogies.filter((p) => p.thinkingLevels.includes('MOTS')),
    HOTS: relevantPedagogies.filter((p) => p.thinkingLevels.includes('HOTS')),
  }
  const relevantAssessments = assessments.filter((a) => relevantPedagogies.some((p) => p.thinkingLevels.some((l) => a.thinkingLevels.includes(l)))).slice(0, 6)
  const evidencePossibilities = Array.from(new Set(relevantPedagogies.flatMap((p) => p.evidenceTypes))).slice(0, 8)

  return (
    <Layout>
      <BackLink to="/trainer/departments" label="Back to Department Explorer" />
      <h1 className="mb-6 font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">{department.name}</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard title="Typical teaching contexts" items={department.typicalContexts} />
        <InfoCard title="Possible learning challenges" items={department.learningChallenges} />
      </div>

      <div className="mt-6 rounded-card border border-charcoal-800/10 bg-white p-5">
        <h2 className="font-display font-semibold text-charcoal-900">Pedagogies worth exploring</h2>
        <p className="mt-1 text-xs text-charcoal-700/60">
          Remember: {department.name} could use any of several approaches — this is a set of options for a conversation, not a single prescribed method.
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {relevantPedagogies.map((p) => (
            <Link key={p.id} to={`/trainer/pedagogies/${p.id}`} className="rounded-md border border-charcoal-800/10 px-3 py-2 text-sm font-medium text-azure-700 hover:bg-azure-50">
              {p.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {(['LOTS', 'MOTS', 'HOTS'] as const).map((level) => (
          <div key={level} className="rounded-card border border-charcoal-800/10 bg-white p-5">
            <div className="mb-2"><ThinkingLevelTag level={level} /></div>
            <ul className="list-disc space-y-1 pl-4 text-sm text-charcoal-700/90">
              {levelsPresent[level].slice(0, 4).map((p) => <li key={p.id}>{p.name}</li>)}
              {levelsPresent[level].length === 0 && <li className="list-none text-charcoal-700/50">None highlighted yet</li>}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-card border border-charcoal-800/10 bg-white p-5">
        <h2 className="font-display font-semibold text-charcoal-900">Assessment possibilities</h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {relevantAssessments.map((a) => <li key={a.id} className="rounded-full bg-tangerine-50 px-3 py-1 text-xs font-medium text-tangerine-700">{a.name}</li>)}
        </ul>
      </div>

      <div className="mt-6 rounded-card border border-charcoal-800/10 bg-white p-5">
        <h2 className="font-display font-semibold text-charcoal-900">Evidence possibilities</h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {evidencePossibilities.map((e) => <li key={e} className="rounded-full bg-azure-50 px-3 py-1 text-xs font-medium text-azure-700">{e}</li>)}
        </ul>
      </div>

      <div className="mt-6 rounded-card border-2 border-tangerine-400 bg-tangerine-50 p-5">
        <h2 className="font-display font-semibold text-charcoal-900">Conversation starters</h2>
        <ul className="mt-2 space-y-1.5 text-sm text-charcoal-800">
          {department.conversationStarters.map((c) => <li key={c}>"{c}"</li>)}
        </ul>
      </div>
    </Layout>
  )
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-card border border-charcoal-800/10 bg-white p-5">
      <h2 className="font-display font-semibold text-charcoal-900">{title}</h2>
      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-charcoal-700/90">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  )
}
