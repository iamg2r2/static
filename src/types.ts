export type ThinkingLevel = 'LOTS' | 'MOTS' | 'HOTS'

export type DurationKey = '15' | '30' | '50' | '90' | 'multi'

export interface Department {
  id: string
  name: string
  typicalContexts: string[]
  learningChallenges: string[]
  pedagogyIds: string[]
  conversationStarters: string[]
}

export interface RecipeStep {
  time: string
  action: string
}

export interface Pedagogy {
  id: string
  name: string
  whatIsIt: string
  whyUse: string
  whenItWorks: string[]
  thinkingLevels: ThinkingLevel[]
  preparation: 'Low' | 'Medium' | 'High'
  disciplineExamples: { department: string; example: string }[]
  recipe: {
    duration: string
    classSize: string
    materials: string[]
    teacherActions: string[]
    studentActions: string[]
    steps: RecipeStep[]
    teacherLooksFor: string[]
  }
  evidenceTypes: string[]
  trainerFraming: string
}

export interface Assessment {
  id: string
  name: string
  measures: string
  whenToUse: string
  example: string
  thinkingLevels: ThinkingLevel[]
  evidence: string[]
}

export interface Activity {
  id: string
  name: string
  purpose: string
  time: string
  classSize: string
  preparation: 'Low' | 'Medium' | 'High'
  teacherActions: string[]
  studentActions: string[]
  thinkingLevels: ThinkingLevel[]
  assessment: string
  evidence: string[]
  expectedOutcome: string
}

export interface TrainerScenario {
  id: string
  situation: string
  exploreFirst: string
  questions: string[]
  smallInterventions: string[]
}

export interface HotsExample {
  discipline: string
  topic: string
  lots: string
  mots: string
  hots: string
}

export interface BookmarkItem {
  id: string
  type: 'pedagogy' | 'activity' | 'assessment' | 'hots' | 'prompt'
  label: string
  note?: string
}
