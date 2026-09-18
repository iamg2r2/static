import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { PathwayCard, SectionHeading } from '../../components/ui'

export default function TrainerHome() {
  return (
    <Layout>
      <SectionHeading
        eyebrow="Trainer Companion"
        title="How can you help a faculty member discover and strengthen their teaching practice?"
        blurb="Prepare for a conversation, or explore possibilities for a specific department."
      />

      <Link
        to="/trainer/whatif"
        className="mb-8 block rounded-card border-2 border-azure-400 bg-azure-50 p-5 transition hover:bg-azure-100"
      >
        <p className="font-display text-lg font-semibold text-charcoal-900">I don't know where to start</p>
        <p className="mt-1 text-sm text-charcoal-700/85">Tell us what you're trying to help the faculty member with.</p>
      </Link>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PathwayCard to="/trainer/departments" title="Department Explorer" description="Explore teaching possibilities by department." accent="tangerine" />
        <PathwayCard to="/trainer/conversation" title="Faculty Conversation Guide" description="Questions to use when meeting faculty." />
        <PathwayCard to="/trainer/pedagogies" title="Pedagogy Navigator" description="Find possible approaches to discuss with faculty." accent="tangerine" />
        <PathwayCard to="/trainer/hots" title="HOTS Development" description="Help faculty move from recall to deeper thinking." />
        <PathwayCard to="/trainer/assessment" title="Assessment Conversation" description="Explore assessment alignment." accent="tangerine" />
        <PathwayCard to="/trainer/evidence" title="Evidence Conversation" description="Help faculty recognise authentic evidence." />
        <PathwayCard to="/trainer/whatif" title="Follow-Up Guide" description="Help structure the next conversation, and handle common situations." accent="tangerine" />
      </div>

      <div className="mt-8">
        <PathwayCard to="/trainer/toolkit" title="My Toolkit" description="Your saved pedagogies, prompts and conversation starters." />
      </div>
    </Layout>
  )
}
