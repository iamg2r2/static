import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { SectionHeading } from '../../components/ui'
import { departments } from '../../data/departments'

export default function DepartmentExplorer() {
  return (
    <Layout>
      <SectionHeading
        eyebrow="Department Explorer"
        title="Explore teaching possibilities by department"
        blurb="Pick a department to see typical contexts, possible pedagogies, and conversation starters — options for discussion, not prescriptions."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((d) => (
          <Link
            key={d.id}
            to={`/trainer/departments/${d.id}`}
            className="rounded-card border border-charcoal-800/10 bg-white p-4 font-medium text-charcoal-900 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            {d.name}
          </Link>
        ))}
      </div>
    </Layout>
  )
}
