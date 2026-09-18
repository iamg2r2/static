export interface ConversationStage {
  id: string
  stage: string
  purpose: string
  questions: string[]
}

export const conversationGuide: ConversationStage[] = [
  {
    id: 'discover',
    stage: 'Discover',
    purpose: 'Understand the faculty member\u2019s current practice without judgement.',
    questions: ['What are you currently doing in this course?', 'Walk me through a typical class session.'],
  },
  {
    id: 'understand',
    stage: 'Understand',
    purpose: 'Find what already works and where students genuinely struggle.',
    questions: ['What seems to work particularly well?', 'Where do students struggle?', 'What have you already tried?'],
  },
  {
    id: 'explore',
    stage: 'Explore',
    purpose: 'Clarify what the faculty member actually wants students to be able to do.',
    questions: ['What would you like students to be able to do?', 'What would that look like if a student did it really well?'],
  },
  {
    id: 'strengthen',
    stage: 'Strengthen',
    purpose: 'Open the door to richer thinking, without prescribing a single method.',
    questions: ['Could students analyse, evaluate or create something rather than only recall information?', 'What is one small change worth trying?'],
  },
  {
    id: 'assess',
    stage: 'Assess',
    purpose: 'Check alignment between what is taught, done, and assessed.',
    questions: ['Does the assessment measure what you want students to learn?', 'If a student did well on your assessment, would that mean they can really do the thing you care about?'],
  },
  {
    id: 'evidence',
    stage: 'Evidence',
    purpose: 'Help the faculty member recognise evidence that already exists in their practice.',
    questions: ['What evidence naturally comes from the activity?', 'What would you want to be able to show about this, later?'],
  },
  {
    id: 'follow-up',
    stage: 'Follow-Up',
    purpose: 'Keep momentum with one concrete, low-risk next step.',
    questions: ['What small change could you try next?', 'When should we check in on how it went?'],
  },
]
