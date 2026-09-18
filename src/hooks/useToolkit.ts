import { useCallback, useEffect, useState } from 'react'
import { BookmarkItem } from '../types'

const STORAGE_KEY = 'jostel.toolkit.v1'

function readStorage(): BookmarkItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as BookmarkItem[]) : []
  } catch {
    return []
  }
}

function writeStorage(items: BookmarkItem[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — fail silently
  }
}

export function useToolkit() {
  const [items, setItems] = useState<BookmarkItem[]>([])

  useEffect(() => {
    setItems(readStorage())
  }, [])

  const isSaved = useCallback((id: string) => items.some((i) => i.id === id), [items])

  const toggle = useCallback((item: BookmarkItem) => {
    setItems((prev) => {
      const exists = prev.some((i) => i.id === item.id)
      const next = exists ? prev.filter((i) => i.id !== item.id) : [...prev, item]
      writeStorage(next)
      return next
    })
  }, [])

  const remove = useCallback((id: string) => {
    setItems((prev) => {
      const next = prev.filter((i) => i.id !== id)
      writeStorage(next)
      return next
    })
  }, [])

  const clearAll = useCallback(() => {
    writeStorage([])
    setItems([])
  }, [])

  return { items, isSaved, toggle, remove, clearAll }
}
