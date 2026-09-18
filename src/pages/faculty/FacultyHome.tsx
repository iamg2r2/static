import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { PathwayCard, SectionHeading } from '../../components/ui'

export default function FacultyHome() {
  return (
    <Layout>
      <SectionHeading
        eyebrow="Faculty Companion"
        title="What do you want to do in your classroom?"
        blurb="Start from wherever you are — a teaching approach, an assessment, or just a rough idea."
      />

      <Link
        to="/faculty/plan"
        className="mb-8 block rounded-card border-2 border-tangerine-400 bg-tangerine-50 p-5 transition hover:bg-tangerine-100"
      >
        <p className="font-display text-lg font-semibold text-charcoal-900">I don't know where to start</p>
        <p className="mt-1 text-sm text-charcoal-700/85">Tell us what you're trying to achieve in your class, and we'll guide you.</p>
      </Link>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PathwayCard
          to="/faculty/pedagogies"
          title="Explore Pedagogies"
          description="Find a teaching approach that fits what you want your students to do."
        />
        <PathwayCard
          to="/faculty/plan"
          title="Plan My Next Class"
          description="Give me a practical classroom activity."
          accent="tangerine"
        />
        <PathwayCard
          to="/faculty/thinking-levels"
          title="LOTS / MOTS / HOTS"
          description="Help me understand and develop students' thinking."
        />
        <PathwayCard
          to="/faculty/assessments"
          title="Improve My Assessment"
          description="Turn my assessment into something more meaningful."
          accent="tangerine"
        />
        <PathwayCard
          to="/faculty/evidence"
          title="Evidence Helper"
          description="What evidence should I keep?"
        />
        <PathwayCard
          to="/faculty/report"
          title="Activity Report"
          description="Document what I did."
          accent="tangerine"
        />
      </div>

      <div className="mt-8">
        <PathwayCard to="/faculty/toolkit" title="My Toolkit" description="Your saved pedagogies, activities and assessment ideas." />
      </div>
    </Layout>
  )
}
