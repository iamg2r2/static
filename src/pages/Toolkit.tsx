import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { EmptyState, SectionHeading } from '../components/ui'
import { useToolkit } from '../hooks/useToolkit'
import { useRole } from '../hooks/useRole'

const typeToPath: Record<string, string> = {
  pedagogy: 'pedagogies',
}

export default function Toolkit() {
  const { items, remove, clearAll } = useToolkit()
  const role = useRole()
  const base = role === 'trainer' ? '/trainer' : '/faculty'

  return (
    <Layout>
      <SectionHeading title="My Toolkit" blurb="Saved pedagogies, activities and assessment ideas — stored only in this browser." />

      {items.length === 0 ? (
        <EmptyState message="Nothing saved yet. Look for “Save to My Toolkit” on any pedagogy or assessment." />
      ) : (
        <>
          <ul className="space-y-2">
            {items.map((item) => {
              const [, id] = item.id.split('-')
              const linkable = item.type === 'pedagogy'
              return (
                <li key={item.id} className="flex items-center justify-between rounded-card border border-charcoal-800/10 bg-white p-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-charcoal-700/50">{item.type}</p>
                    {linkable ? (
                      <Link to={`${base}/${typeToPath[item.type]}/${id}`} className="font-medium text-azure-600 hover:text-azure-700">
                        {item.label}
                      </Link>
                    ) : (
                      <p className="font-medium text-charcoal-900">{item.label}</p>
                    )}
                  </div>
                  <button onClick={() => remove(item.id)} className="text-sm font-medium text-charcoal-700/60 hover:text-tangerine-600">
                    Remove
                  </button>
                </li>
              )
            })}
          </ul>
          <button onClick={clearAll} className="mt-6 text-sm font-medium text-charcoal-700/60 hover:text-tangerine-600">
            Clear all
          </button>
        </>
      )}
    </Layout>
  )
}
