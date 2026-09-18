import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { SectionHeading, ThinkingLevelTag } from '../../components/ui'
import { departments } from '../../data/departments'
import { pedagogies } from '../../data/pedagogies'
import { activities } from '../../data/activities'
import { assessments } from '../../data/assessments'
import { ThinkingLevel } from '../../types'

const goals: { id: string; label: string; level: ThinkingLevel }[] = [
  { id: 'remember', label: 'Remember', level: 'LOTS' },
  { id: 'understand', label: 'Understand', level: 'LOTS' },
  { id: 'apply', label: 'Apply', level: 'MOTS' },
  { id: 'analyse', label: 'Analyse', level: 'HOTS' },
  { id: 'evaluate', label: 'Evaluate', level: 'HOTS' },
  { id: 'create', label: 'Create', level: 'HOTS' },
  { id: 'solve', label: 'Solve a problem', level: 'HOTS' },
  { id: 'collaborate', label: 'Collaborate', level: 'MOTS' },
  { id: 'reflect', label: 'Reflect', level: 'MOTS' },
  { id: 'demonstrate', label: 'Demonstrate', level: 'MOTS' },
]

const timeOptions = ['15 minutes', '30 minutes', '50 minutes', '90 minutes', 'Multiple sessions']

export default function PlanNextClass() {
  const [step, setStep] = useState(1)
  const [departmentId, setDepartmentId] = useState<string | null>(null)
  const [context, setContext] = useState('')
  const [goalId, setGoalId] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>(null)

  const department = departments.find((d) => d.id === departmentId)
  const goal = goals.find((g) => g.id === goalId)

  const suggestedPedagogies = useMemo(() => {
    if (!department || !goal) return []
    return pedagogies.filter((p) => department.pedagogyIds.includes(p.id) && p.thinkingLevels.includes(goal.level)).slice(0, 6)
  }, [department, goal])

  const suggestedActivities = useMemo(() => {
    if (!goal) return []
    let pool = activities.filter((a) => a.thinkingLevels.includes(goal.level))
    if (time === '15 minutes') pool = pool.filter((a) => a.time.includes('5') || a.time.includes('10') || a.time.includes('15'))
    return pool.slice(0, 5)
  }, [goal, time])

  const suggestedAssessments = useMemo(() => {
    if (!goal) return []
    return assessments.filter((a) => a.thinkingLevels.includes(goal.level)).slice(0, 5)
  }, [goal])

  const evidenceIdeas = useMemo(() => {
    const set = new Set<string>()
    suggestedActivities.forEach((a) => a.evidence.forEach((e) => set.add(e)))
    suggestedPedagogies.forEach((p) => p.evidenceTypes.forEach((e) => set.add(e)))
    return Array.from(set).slice(0, 8)
  }, [suggestedActivities, suggestedPedagogies])

  const totalSteps = 8

  return (
    <Layout>
      <SectionHeading eyebrow="Plan My Next Class" title="Give me a practical classroom activity" />
      <p className="mb-6 text-sm text-charcoal-700/60">Step {Math.min(step, totalSteps)} of {totalSteps}</p>

      {step === 1 && (
        <StepCard title="Select department">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <button
                key={d.id}
                onClick={() => { setDepartmentId(d.id); setStep(2) }}
                className={`rounded-card border p-3 text-left text-sm font-medium transition ${
                  departmentId === d.id ? 'border-azure-500 bg-azure-50' : 'border-charcoal-800/15 hover:border-azure-300'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </StepCard>
      )}

      {step === 2 && (
        <StepCard title="Select course/context" onBack={() => setStep(1)}>
          <label className="block text-sm font-medium text-charcoal-900" htmlFor="context">
            Briefly describe the course or class context (optional)
          </label>
          <input
            id="context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="e.g. Second-year data structures, 40 students"
            className="mt-2 w-full rounded-md border border-charcoal-800/20 px-3 py-2 text-sm"
          />
          <button onClick={() => setStep(3)} className="mt-4 rounded-full bg-azure-500 px-4 py-2 text-sm font-medium text-white hover:bg-azure-600">
            Continue
          </button>
        </StepCard>
      )}

      {step === 3 && (
        <StepCard title="What do you want students to do?" onBack={() => setStep(2)}>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((g) => (
              <button
                key={g.id}
                onClick={() => { setGoalId(g.id); setStep(4) }}
                className={`flex items-center justify-between rounded-card border p-3 text-left text-sm font-medium transition ${
                  goalId === g.id ? 'border-azure-500 bg-azure-50' : 'border-charcoal-800/15 hover:border-azure-300'
                }`}
              >
                {g.label}
                <ThinkingLevelTag level={g.level} />
              </button>
            ))}
          </div>
        </StepCard>
      )}

      {step === 4 && (
        <StepCard title="How much time do you have?" onBack={() => setStep(3)}>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {timeOptions.map((t) => (
              <button
                key={t}
                onClick={() => { setTime(t); setStep(5) }}
                className={`rounded-card border p-3 text-left text-sm font-medium transition ${
                  time === t ? 'border-azure-500 bg-azure-50' : 'border-charcoal-800/15 hover:border-azure-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </StepCard>
      )}

      {step === 5 && department && goal && (
        <StepCard title="Suitable pedagogies" onBack={() => setStep(4)} onNext={() => setStep(6)}>
          <ResultGrid>
            {suggestedPedagogies.length === 0 && <p className="text-sm text-charcoal-700/70">No exact match — try a different goal or check the full Pedagogy Library.</p>}
            {suggestedPedagogies.map((p) => (
              <Link key={p.id} to={`/faculty/pedagogies/${p.id}`} className="block rounded-card border border-charcoal-800/10 bg-white p-4 hover:shadow-md">
                <p className="font-display font-semibold text-charcoal-900">{p.name}</p>
                <p className="mt-1 text-sm text-charcoal-700/80">{p.whatIsIt}</p>
              </Link>
            ))}
          </ResultGrid>
        </StepCard>
      )}

      {step === 6 && goal && (
        <StepCard title="Practical classroom activities" onBack={() => setStep(5)} onNext={() => setStep(7)}>
          <ResultGrid>
            {suggestedActivities.map((a) => (
              <div key={a.id} className="rounded-card border border-charcoal-800/10 bg-white p-4">
                <p className="font-display font-semibold text-charcoal-900">{a.name}</p>
                <p className="mt-1 text-sm text-charcoal-700/80">{a.purpose}</p>
                <p className="mt-1 text-xs text-charcoal-700/60">{a.time} · {a.classSize}</p>
              </div>
            ))}
          </ResultGrid>
        </StepCard>
      )}

      {step === 7 && goal && (
        <StepCard title="Assessment possibilities" onBack={() => setStep(6)} onNext={() => setStep(8)}>
          <ResultGrid>
            {suggestedAssessments.map((a) => (
              <div key={a.id} className="rounded-card border border-charcoal-800/10 bg-white p-4">
                <p className="font-display font-semibold text-charcoal-900">{a.name}</p>
                <p className="mt-1 text-sm text-charcoal-700/80">{a.measures}</p>
              </div>
            ))}
          </ResultGrid>
        </StepCard>
      )}

      {step === 8 && (
        <StepCard title="Evidence that naturally results" onBack={() => setStep(7)}>
          <ul className="flex flex-wrap gap-2">
            {evidenceIdeas.map((e) => (
              <li key={e} className="rounded-full bg-azure-50 px-3 py-1 text-sm font-medium text-azure-700">{e}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/faculty/report" className="rounded-full bg-tangerine-500 px-4 py-2 text-sm font-medium text-white hover:bg-tangerine-600">
              Document this in an Activity Report
            </Link>
            <button onClick={() => { setStep(1); setDepartmentId(null); setGoalId(null); setTime(null); setContext('') }} className="rounded-full border border-charcoal-800/20 px-4 py-2 text-sm font-medium text-charcoal-700 hover:border-azure-400">
              Start a new plan
            </button>
          </div>
        </StepCard>
      )}
    </Layout>
  )
}

function StepCard({ title, children, onBack, onNext }: { title: string; children: React.ReactNode; onBack?: () => void; onNext?: () => void }) {
  return (
    <div className="rounded-card border border-charcoal-800/10 bg-white p-6">
      <h2 className="mb-4 font-display text-lg font-semibold text-charcoal-900">{title}</h2>
      {children}
      {(onBack || onNext) && (
        <div className="mt-6 flex justify-between">
          {onBack ? (
            <button onClick={onBack} className="text-sm font-medium text-charcoal-700 hover:text-azure-600">← Back</button>
          ) : <span />}
          {onNext && (
            <button onClick={onNext} className="rounded-full bg-azure-500 px-4 py-2 text-sm font-medium text-white hover:bg-azure-600">
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function ResultGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>
}
