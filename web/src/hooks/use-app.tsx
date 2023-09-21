import { useContext } from 'react'

import { AppContext } from '../app/contexts/app-context'

export default function useApp() {
  return useContext(AppContext)
}
