import { Routes, Route } from 'react-router-dom'
import RoleSelect from './pages/RoleSelect'
import FacultyHome from './pages/faculty/FacultyHome'
import PlanNextClass from './pages/faculty/PlanNextClass'
import ActivityLibrary from './pages/faculty/ActivityLibrary'
import ActivityReport from './pages/faculty/ActivityReport'
import TrainerHome from './pages/trainer/TrainerHome'
import DepartmentExplorer from './pages/trainer/DepartmentExplorer'
import DepartmentDetail from './pages/trainer/DepartmentDetail'
import ConversationGuidePage from './pages/trainer/ConversationGuidePage'
import WhatIfGuide from './pages/trainer/WhatIfGuide'
import PedagogyLibrary from './pages/PedagogyLibrary'
import PedagogyDetail from './pages/PedagogyDetail'
import PedagogyComparison from './pages/PedagogyComparison'
import ThinkingLevels from './pages/ThinkingLevels'
import AssessmentCompanion from './pages/AssessmentCompanion'
import EvidenceHelper from './pages/EvidenceHelper'
import Toolkit from './pages/Toolkit'
import SearchPage from './pages/SearchPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelect />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/compare" element={<PedagogyComparison />} />

      {/* Faculty */}
      <Route path="/faculty" element={<FacultyHome />} />
      <Route path="/faculty/plan" element={<PlanNextClass />} />
      <Route path="/faculty/pedagogies" element={<PedagogyLibrary />} />
      <Route path="/faculty/pedagogies/:id" element={<PedagogyDetail />} />
      <Route path="/faculty/activities" element={<ActivityLibrary />} />
      <Route path="/faculty/thinking-levels" element={<ThinkingLevels />} />
      <Route path="/faculty/assessments" element={<AssessmentCompanion />} />
      <Route path="/faculty/evidence" element={<EvidenceHelper />} />
      <Route path="/faculty/report" element={<ActivityReport />} />
      <Route path="/faculty/toolkit" element={<Toolkit />} />

      {/* Trainer */}
      <Route path="/trainer" element={<TrainerHome />} />
      <Route path="/trainer/departments" element={<DepartmentExplorer />} />
      <Route path="/trainer/departments/:id" element={<DepartmentDetail />} />
      <Route path="/trainer/conversation" element={<ConversationGuidePage />} />
      <Route path="/trainer/pedagogies" element={<PedagogyLibrary />} />
      <Route path="/trainer/pedagogies/:id" element={<PedagogyDetail />} />
      <Route path="/trainer/hots" element={<ThinkingLevels />} />
      <Route path="/trainer/assessment" element={<AssessmentCompanion />} />
      <Route path="/trainer/evidence" element={<EvidenceHelper />} />
      <Route path="/trainer/whatif" element={<WhatIfGuide />} />
      <Route path="/trainer/toolkit" element={<Toolkit />} />

      <Route path="*" element={<RoleSelect />} />
    </Routes>
  )
}
