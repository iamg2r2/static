import { useToolkit } from '../hooks/useToolkit'
import { BookmarkItem } from '../types'

export default function BookmarkButton({ item }: { item: BookmarkItem }) {
  const { isSaved, toggle } = useToolkit()
  const saved = isSaved(item.id)
  return (
    <button
      type="button"
      onClick={() => toggle(item)}
      aria-pressed={saved}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
        saved
          ? 'border-tangerine-500 bg-tangerine-50 text-tangerine-600'
          : 'border-charcoal-800/20 text-charcoal-700 hover:border-tangerine-400 hover:text-tangerine-600'
      }`}
    >
      <span aria-hidden="true">{saved ? '★' : '☆'}</span>
      {saved ? 'Saved to My Toolkit' : 'Save to My Toolkit'}
    </button>
  )
}
