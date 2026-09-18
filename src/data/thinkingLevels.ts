import { HotsExample } from '../types'

export const thinkingLevelInfo = {
  LOTS: {
    label: 'LOTS — Lower Order Thinking Skills',
    verbs: ['Remember', 'Understand'],
    description: 'Recalling facts and explaining ideas in your own words. Necessary, but not sufficient on its own.',
    classroomExample: 'A student can state the definition of photosynthesis and describe its basic stages.',
  },
  MOTS: {
    label: 'MOTS — Middle Order Thinking Skills',
    verbs: ['Apply'],
    description: 'Using a known concept or method in a new but similar situation.',
    classroomExample: 'A student uses the concept of photosynthesis to explain why a shaded plant grows differently.',
  },
  HOTS: {
    label: 'HOTS — Higher Order Thinking Skills',
    verbs: ['Analyse', 'Evaluate', 'Create'],
    description: 'Breaking a situation into parts, judging between options, or producing something new — using concepts as tools for reasoning, not just recall.',
    classroomExample: 'A student analyses why a farmer\u2019s crop is failing despite adequate water, weighing several possible causes related to photosynthesis, and proposes a solution.',
  },
}

export interface AssessmentRedesignExample {
  discipline: string
  original: string
  lots: string
  mots: string
  hots: string
  note: string
}

export const assessmentRedesignExamples: AssessmentRedesignExample[] = [
  {
    discipline: 'Biology',
    original: 'Explain photosynthesis.',
    lots: 'Describe the stages of photosynthesis.',
    mots: 'Apply your knowledge of photosynthesis to explain why a plant kept in low light grows differently.',
    hots: 'A farmer notices declining crop growth despite adequate water and nutrients. Analyse possible causes related to photosynthesis and propose a solution.',
    note: 'HOTS is not simply a longer or harder version of the original question — it puts the concept to work on a genuine, unresolved situation.',
  },
  {
    discipline: 'History',
    original: 'Describe the causes of the event.',
    lots: 'List the three main causes historians identify for the event.',
    mots: 'Explain how one identified cause contributed to a specific later outcome.',
    hots: 'Historians disagree about which cause was most significant. Evaluate the competing explanations using primary source evidence and justify your own position.',
    note: 'The HOTS version requires weighing evidence and taking a defensible position, not reciting an agreed list.',
  },
  {
    discipline: 'Computer Science',
    original: 'Explain how a sorting algorithm works.',
    lots: 'Describe the steps of a given sorting algorithm.',
    mots: 'Trace the algorithm\u2019s execution on a provided small data set.',
    hots: 'Given a data set with specific characteristics (mostly sorted, very large, many duplicates), analyse which sorting algorithm is most appropriate and justify the trade-offs.',
    note: 'The shift is from executing a known procedure to reasoning about when and why to use it.',
  },
]

export const hotsExamples: HotsExample[] = [
  {
    discipline: 'Computer Science',
    topic: 'cloud computing',
    lots: 'Define cloud computing.',
    mots: 'Demonstrate how you would select a cloud service for a small business.',
    hots: 'A small business must choose between two cloud architectures. Analyse the requirements, compare the alternatives, and justify your recommendation.',
  },
  {
    discipline: 'Physics',
    topic: 'Newton\u2019s laws',
    lots: 'State Newton\u2019s second law of motion.',
    mots: 'Apply Newton\u2019s second law to calculate the force needed to accelerate a given object.',
    hots: 'A delivery drone must carry varying loads on a fixed motor. Analyse how load affects achievable acceleration and recommend a safe maximum payload, justifying your reasoning.',
  },
  {
    discipline: 'Psychology',
    topic: 'attachment theory',
    lots: 'Describe the four attachment styles identified by attachment theory.',
    mots: 'Apply attachment theory to explain a given child\u2019s behaviour in a described scenario.',
    hots: 'A family presents with a complex history. Analyse the possible attachment dynamics at play, evaluate which theoretical lens best explains the pattern, and propose an intervention approach.',
  },
  {
    discipline: 'Commerce',
    topic: 'break-even analysis',
    lots: 'Define the break-even point.',
    mots: 'Calculate the break-even point for a given product using provided cost and price data.',
    hots: 'A small business is deciding between two pricing strategies. Analyse the break-even implications of each, evaluate the risk involved, and recommend a strategy with justification.',
  },
  {
    discipline: 'English',
    topic: 'a short story\u2019s ending',
    lots: 'Summarise the ending of the story.',
    mots: 'Explain how the ending relates to an earlier event in the story.',
    hots: 'Evaluate whether the ending resolves or deliberately leaves unresolved the story\u2019s central tension, and justify your interpretation using evidence from the text.',
  },
  {
    discipline: 'Mathematics',
    topic: 'quadratic equations',
    lots: 'State the quadratic formula.',
    mots: 'Use the quadratic formula to solve a given equation.',
    hots: 'A ball\u2019s height is modelled by a quadratic function with an unknown coefficient. Analyse what values of the coefficient produce a physically realistic trajectory, and justify your reasoning.',
  },
  {
    discipline: 'Chemistry',
    topic: 'acids and bases',
    lots: 'Define pH and identify whether a substance is acidic or basic.',
    mots: 'Apply pH concepts to predict the result of mixing two given solutions.',
    hots: 'A water sample from a local pond shows unusual pH readings. Analyse possible causes, evaluate which is most likely given the surrounding data, and propose a next diagnostic step.',
  },
]
