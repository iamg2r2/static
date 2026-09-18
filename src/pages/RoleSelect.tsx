import { Link } from 'react-router-dom'

export default function RoleSelect() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-azure-50/60 to-white">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <p className="font-display text-4xl font-bold text-azure-600 sm:text-5xl">JosTEL</p>
        <p className="mt-2 text-charcoal-700/70">Joseph's Technology Enhanced Learning</p>
        <h1 className="mt-10 font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">
          How can JosTEL help you today?
        </h1>

        <div className="mt-10 grid w-full gap-5 sm:grid-cols-2">
          <Link
            to="/faculty"
            className="group flex flex-col justify-between rounded-card border border-l-4 border-azure-500 border-charcoal-800/10 bg-white p-6 text-left shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div>
              <h2 className="font-display text-xl font-semibold text-charcoal-900">Faculty</h2>
              <p className="mt-1 text-sm font-medium text-azure-600">"I want help with my teaching."</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-700/85">
                Explore teaching approaches, classroom activities, assessment ideas, HOTS strategies and evidence
                guidance.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center justify-center rounded-full bg-azure-500 px-4 py-2 text-sm font-medium text-white group-hover:bg-azure-600">
              Enter Faculty Companion
            </span>
          </Link>

          <Link
            to="/trainer"
            className="group flex flex-col justify-between rounded-card border border-l-4 border-tangerine-500 border-charcoal-800/10 bg-white p-6 text-left shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div>
              <h2 className="font-display text-xl font-semibold text-charcoal-900">JosTEL Trainer</h2>
              <p className="mt-1 text-sm font-medium text-tangerine-600">"I want to support faculty."</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-700/85">
                Prepare for faculty conversations, explore department-specific possibilities and help faculty
                strengthen teaching, assessment and evidence.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center justify-center rounded-full bg-tangerine-500 px-4 py-2 text-sm font-medium text-white group-hover:bg-tangerine-600">
              Enter Trainer Companion
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
