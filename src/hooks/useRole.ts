import { useLocation } from 'react-router-dom'

export type Role = 'faculty' | 'trainer'

export function useRole(): Role {
  const location = useLocation()
  return location.pathname.startsWith('/trainer') ? 'trainer' : 'faculty'
}
