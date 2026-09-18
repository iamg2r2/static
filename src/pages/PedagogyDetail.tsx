import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { BackLink, ThinkingLevelTag, PrepTag } from '../components/ui'
import { getPedagogyById } from '../data/pedagogies'
import { useRole } from '../hooks/useRole'
import BookmarkButton from '../components/BookmarkButton'

export default function PedagogyDetail() {
  const { id } = useParams()
  const role = useRole()
  const base = role === 'trainer' ? '/trainer' : '/faculty'
  const pedagogy = id ? getPedagogyById(id) : undefined

  if (!pedagogy) {
    return (
      <Layout>
        <BackLink to={`${base}/pedagogies`} label="Back to Pedagogy Library" />
        <p>We couldn't find that pedagogy.</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <BackLink to={`${base}/pedagogies`} label="Back to Pedagogy Library" />

      <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
        <h1 className="font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">{pedagogy.name}</h1>
        <BookmarkButton item={{ id: `pedagogy-${pedagogy.id}`, type: 'pedagogy', label: pedagogy.name }} />
      </div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {pedagogy.thinkingLevels.map((l) => (
          <ThinkingLevelTag key={l} level={l} />
        ))}
        <PrepTag level={pedagogy.preparation} />
      </div>

      {role === 'trainer' && (
        <div className="mb-6 rounded-card border-l-4 border-tangerine-500 bg-tangerine-50 p-4">
          <p className="text-sm font-medium text-tangerine-700">Consider discussing this when…</p>
          <p className="mt-1 text-sm text-charcoal-800">{pedagogy.trainerFraming}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-card border border-charcoal-800/10 bg-white p-5">
          <h2 className="font-display font-semibold text-charcoal-900">What is it?</h2>
          <p className="mt-1.5 text-sm text-charcoal-700/90">{pedagogy.whatIsIt}</p>
        </div>
        <div className="rounded-card border border-charcoal-800/10 bg-white p-5">
          <h2 className="font-display font-semibold text-charcoal-900">Why use it?</h2>
          <p className="mt-1.5 text-sm text-charcoal-700/90">{pedagogy.whyUse}</p>
        </div>
        <div className="rounded-card border border-charcoal-800/10 bg-white p-5">
          <h2 className="font-display font-semibold text-charcoal-900">When does it work well?</h2>
          <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm text-charcoal-700/90">
            {pedagogy.whenItWorks.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-card border border-charcoal-800/10 bg-white p-5">
          <h2 className="font-display font-semibold text-charcoal-900">Where can I use it?</h2>
          <ul className="mt-1.5 space-y-2 text-sm text-charcoal-700/90">
            {pedagogy.disciplineExamples.map((d) => (
              <li key={d.department}>
                <span className="font-medium text-charcoal-900">{d.department}: </span>
                {d.example}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-card border-2 border-azure-500 bg-white p-5">
        <h2 className="font-display text-lg font-semibold text-azure-700">
          {role === 'trainer' ? 'What this looks like in class' : 'Try it in your next class'}
        </h2>
        <div className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
          <p><span className="font-medium text-charcoal-900">Class duration: </span>{pedagogy.recipe.duration}</p>
          <p><span className="font-medium text-charcoal-900">Class size: </span>{pedagogy.recipe.classSize}</p>
          <p><span className="font-medium text-charcoal-900">Preparation: </span>{pedagogy.preparation}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold text-charcoal-900">Materials</h3>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-charcoal-700/90">
            {pedagogy.recipe.materials.map((m) => <li key={m}>{m}</li>)}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold text-charcoal-900">Step-by-step classroom recipe</h3>
          <ol className="mt-2 space-y-2 border-l-2 border-azure-100 pl-4">
            {pedagogy.recipe.steps.map((s, i) => (
              <li key={i} className="relative text-sm">
                <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-azure-500" aria-hidden="true" />
                <span className="font-medium text-azure-700">{s.time}</span> — {s.action}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-charcoal-900">What the teacher does</h3>
            <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-charcoal-700/90">
              {pedagogy.recipe.teacherActions.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-charcoal-900">What students do</h3>
            <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-charcoal-700/90">
              {pedagogy.recipe.studentActions.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold text-charcoal-900">What the teacher looks for</h3>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-charcoal-700/90">
            {pedagogy.recipe.teacherLooksFor.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-card border border-charcoal-800/10 bg-white p-5">
        <h2 className="font-display font-semibold text-charcoal-900">Evidence this naturally produces</h2>
        <ul className="mt-1.5 flex flex-wrap gap-2">
          {pedagogy.evidenceTypes.map((e) => (
            <li key={e} className="rounded-full bg-azure-50 px-3 py-1 text-xs font-medium text-azure-700">{e}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to={`${base}/pedagogies`} className="text-sm font-medium text-azure-600 hover:text-azure-700">
          ← All pedagogies
        </Link>
        <Link to="/compare" className="text-sm font-medium text-azure-600 hover:text-azure-700">
          Compare pedagogies →
        </Link>
      </div>
    </Layout>
  )
}
