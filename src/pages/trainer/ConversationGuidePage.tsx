import Layout from '../../components/Layout'
import { SectionHeading } from '../../components/ui'
import { conversationGuide } from '../../data/conversationGuide'
import BookmarkButton from '../../components/BookmarkButton'

export default function ConversationGuidePage() {
  return (
    <Layout>
      <SectionHeading
        eyebrow="Faculty Conversation Guide"
        title="A conversation pathway, not a checklist"
        blurb="Move through these stages at the pace the conversation needs — skip back if something earlier needs revisiting."
      />

      <ol className="space-y-4 border-l-2 border-azure-200 pl-6">
        {conversationGuide.map((stage, i) => (
          <li key={stage.id} className="relative rounded-card border border-charcoal-800/10 bg-white p-5">
            <span className="absolute -left-[31px] top-5 flex h-6 w-6 items-center justify-center rounded-full bg-azure-500 text-xs font-semibold text-white">
              {i + 1}
            </span>
            <h2 className="font-display text-lg font-semibold text-charcoal-900">{stage.stage}</h2>
            <p className="mt-1 text-sm text-charcoal-700/80">{stage.purpose}</p>
            <ul className="mt-3 space-y-1.5">
              {stage.questions.map((q) => (
                <li key={q} className="flex items-start justify-between gap-3 rounded-md bg-azure-50 px-3 py-2 text-sm text-charcoal-800">
                  <span>"{q}"</span>
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <BookmarkButton item={{ id: `prompt-${stage.id}`, type: 'prompt', label: `${stage.stage} questions` }} />
            </div>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
