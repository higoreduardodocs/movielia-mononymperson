import { ReactNode, createContext, useState } from 'react'

export const AppContext = createContext({
  trailler: '',
  setTrailler: (value: string) => {},
  page: 1,
  setPage: (value: number) => {},
})

interface IProps {
  children: ReactNode
}

export default function AppContextProvider({ children }: IProps) {
  const [trailler, setTrailler] = useState<string>('')
  const [page, setPage] = useState<number>(1)

  return (
    <AppContext.Provider value={{ trailler, setTrailler, page, setPage }}>
      {children}
    </AppContext.Provider>
  )
}
