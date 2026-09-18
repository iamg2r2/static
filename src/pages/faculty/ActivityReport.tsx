import { useState } from 'react'
import Layout from '../../components/Layout'
import { SectionHeading } from '../../components/ui'
import { departments } from '../../data/departments'

const evidenceChecklistItems = [
  'Lesson plan / activity design',
  'Photographs or screenshots',
  'Student worksheets or outputs',
  'Assessment results or rubric',
  'Student or self reflection',
  'Feedback received',
]

const initialForm = {
  courseCode: '',
  courseName: '',
  department: '',
  classSemester: '',
  numStudents: '',
  date: '',
  activityTitle: '',
  pedagogyUsed: '',
  learningOutcome: '',
  thinkingLevel: '',
  description: '',
  assessmentUsed: '',
  observedOutcome: '',
  reflection: '',
}

export default function ActivityReport() {
  const [form, setForm] = useState(initialForm)
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const update = (field: keyof typeof initialForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <Layout>
      <div className="no-print">
        <SectionHeading title="Activity Report" blurb="Document what I did — fill this in, then print or save as PDF." />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] print:block">
        <div className="no-print space-y-4 rounded-card border border-charcoal-800/10 bg-white p-6">
          <FormRow label="Course code">
            <input value={form.courseCode} onChange={update('courseCode')} className={inputClass} />
          </FormRow>
          <FormRow label="Course name">
            <input value={form.courseName} onChange={update('courseName')} className={inputClass} />
          </FormRow>
          <FormRow label="Department">
            <select value={form.department} onChange={update('department')} className={inputClass}>
              <option value="">Select…</option>
              {departments.map((d) => <option key={d.id} value={d.name}>{d.name}</option>)}
            </select>
          </FormRow>
          <FormRow label="Class / Semester">
            <input value={form.classSemester} onChange={update('classSemester')} className={inputClass} />
          </FormRow>
          <FormRow label="Number of students">
            <input value={form.numStudents} onChange={update('numStudents')} className={inputClass} type="number" min="0" />
          </FormRow>
          <FormRow label="Date">
            <input value={form.date} onChange={update('date')} className={inputClass} type="date" />
          </FormRow>
          <FormRow label="Activity title">
            <input value={form.activityTitle} onChange={update('activityTitle')} className={inputClass} />
          </FormRow>
          <FormRow label="Pedagogy used">
            <input value={form.pedagogyUsed} onChange={update('pedagogyUsed')} className={inputClass} />
          </FormRow>
          <FormRow label="Learning outcome">
            <input value={form.learningOutcome} onChange={update('learningOutcome')} className={inputClass} />
          </FormRow>
          <FormRow label="Thinking level">
            <select value={form.thinkingLevel} onChange={update('thinkingLevel')} className={inputClass}>
              <option value="">Select…</option>
              <option value="LOTS">LOTS</option>
              <option value="MOTS">MOTS</option>
              <option value="HOTS">HOTS</option>
            </select>
          </FormRow>
          <FormRow label="Description of activity">
            <textarea value={form.description} onChange={update('description')} className={inputClass} rows={4} />
          </FormRow>
          <FormRow label="Assessment used">
            <input value={form.assessmentUsed} onChange={update('assessmentUsed')} className={inputClass} />
          </FormRow>
          <FormRow label="Observed outcome">
            <textarea value={form.observedOutcome} onChange={update('observedOutcome')} className={inputClass} rows={3} />
          </FormRow>
          <FormRow label="Faculty reflection">
            <textarea value={form.reflection} onChange={update('reflection')} className={inputClass} rows={3} />
          </FormRow>
          <fieldset>
            <legend className="mb-1 text-sm font-medium text-charcoal-900">Evidence checklist</legend>
            <div className="space-y-1.5">
              {evidenceChecklistItems.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm text-charcoal-700">
                  <input
                    type="checkbox"
                    checked={!!checked[item]}
                    onChange={(e) => setChecked((c) => ({ ...c, [item]: e.target.checked }))}
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full bg-azure-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-azure-600"
          >
            Print → Save as PDF
          </button>
        </div>

        <ReportPreview form={form} checked={checked} />
      </div>
    </Layout>
  )
}

const inputClass = 'w-full rounded-md border border-charcoal-800/20 px-3 py-2 text-sm'

function FormRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-charcoal-900">{label}</span>
      {children}
    </label>
  )
}

function ReportPreview({ form, checked }: { form: typeof initialForm; checked: Record<string, boolean> }) {
  return (
    <div id="report-preview" className="rounded-card border border-charcoal-800/10 bg-white p-8 print:rounded-none print:border-none print:p-0">
      <div className="mb-6 border-b-2 border-azure-500 pb-4">
        <p className="font-display text-xl font-bold text-azure-600">JosTEL</p>
        <p className="text-sm text-charcoal-700/70">Faculty Innovation Activity Report</p>
      </div>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        <Field label="Course code" value={form.courseCode} />
        <Field label="Course name" value={form.courseName} />
        <Field label="Department" value={form.department} />
        <Field label="Class / Semester" value={form.classSemester} />
        <Field label="Number of students" value={form.numStudents} />
        <Field label="Date" value={form.date} />
        <Field label="Activity title" value={form.activityTitle} span />
        <Field label="Pedagogy used" value={form.pedagogyUsed} />
        <Field label="Thinking level" value={form.thinkingLevel} />
        <Field label="Learning outcome" value={form.learningOutcome} span />
        <Field label="Description of activity" value={form.description} span multiline />
        <Field label="Assessment used" value={form.assessmentUsed} span />
        <Field label="Observed outcome" value={form.observedOutcome} span multiline />
        <Field label="Faculty reflection" value={form.reflection} span multiline />
      </dl>
      <div className="mt-4">
        <p className="text-sm font-semibold text-charcoal-900">Evidence checklist</p>
        <ul className="mt-1 text-sm text-charcoal-700">
          {Object.entries(checked).filter(([, v]) => v).map(([k]) => <li key={k}>☑ {k}</li>)}
          {Object.values(checked).every((v) => !v) && <li className="text-charcoal-700/50">No items checked yet</li>}
        </ul>
      </div>
    </div>
  )
}

function Field({ label, value, span, multiline }: { label: string; value: string; span?: boolean; multiline?: boolean }) {
  return (
    <div className={span ? 'col-span-2' : ''}>
      <dt className="text-xs font-medium uppercase tracking-wide text-charcoal-700/50">{label}</dt>
      <dd className={`text-charcoal-900 ${multiline ? 'whitespace-pre-wrap' : ''}`}>{value || '—'}</dd>
    </div>
  )
}
