import { ReactNode, createContext, useState } from 'react'

export const AppContext = createContext({
  trailler: '',
  setTrailler: (value: string) => {},
})

interface IProps {
  children: ReactNode
}

export default function AppContextProvider({ children }: IProps) {
  const [trailler, setTrailler] = useState<string>('')

  return (
    <AppContext.Provider value={{ trailler, setTrailler }}>
      {children}
    </AppContext.Provider>
  )
}
