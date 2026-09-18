import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useRole } from '../hooks/useRole'

const facultyNav = [
  { to: '/faculty', label: 'Home', end: true },
  { to: '/faculty/pedagogies', label: 'Pedagogies' },
  { to: '/faculty/activities', label: 'Activities' },
  { to: '/faculty/thinking-levels', label: 'LOTS / MOTS / HOTS' },
  { to: '/faculty/assessments', label: 'Assessments' },
  { to: '/faculty/evidence', label: 'Evidence' },
  { to: '/faculty/report', label: 'Activity Report' },
  { to: '/faculty/toolkit', label: 'My Toolkit' },
]

const trainerNav = [
  { to: '/trainer', label: 'Home', end: true },
  { to: '/trainer/departments', label: 'Departments' },
  { to: '/trainer/conversation', label: 'Conversation Guide' },
  { to: '/trainer/pedagogies', label: 'Pedagogies' },
  { to: '/trainer/hots', label: 'HOTS' },
  { to: '/trainer/assessment', label: 'Assessment' },
  { to: '/trainer/evidence', label: 'Evidence' },
  { to: '/trainer/whatif', label: 'Follow-Up' },
  { to: '/trainer/toolkit', label: 'My Toolkit' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const role = useRole()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const items = role === 'trainer' ? trainerNav : facultyNav
  const roleLabel = role === 'trainer' ? 'Trainer Companion' : 'Faculty Companion'

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-charcoal-800/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold text-azure-600">JosTEL</span>
            <span className="hidden text-xs text-charcoal-700/60 sm:inline">
              Joseph's Technology Enhanced Learning
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden rounded-full bg-charcoal-800/5 px-3 py-1 text-xs font-medium text-charcoal-700 sm:inline">
              {roleLabel}
            </span>
            <Link
              to="/search"
              className="rounded-full border border-charcoal-800/15 px-3 py-1.5 text-sm font-medium text-charcoal-700 hover:border-azure-400 hover:text-azure-600"
            >
              Search
            </Link>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="rounded-full border border-tangerine-400 px-3 py-1.5 text-sm font-medium text-tangerine-600 hover:bg-tangerine-50"
            >
              Switch Role
            </button>
            <button
              type="button"
              className="rounded-md border border-charcoal-800/15 p-1.5 sm:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span aria-hidden="true">☰</span>
            </button>
          </div>
        </div>
        <nav
          className={`mx-auto max-w-6xl px-4 pb-2 sm:px-6 ${menuOpen ? 'block' : 'hidden'} sm:block`}
          aria-label="Section navigation"
        >
          <ul className="flex flex-wrap gap-x-1 gap-y-1 text-sm">
            {items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-1.5 font-medium transition ${
                      isActive ? 'bg-azure-50 text-azure-700' : 'text-charcoal-700/80 hover:bg-charcoal-800/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">{children}</main>
      <footer className="no-print border-t border-charcoal-800/10 bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 text-sm text-charcoal-700/60 sm:px-6">
          JosTEL — Joseph's Technology Enhanced Learning. Discover → Try → Think → Assess → Capture → Reflect.
        </div>
      </footer>
    </div>
  )
}
