import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ICustomComponentProps } from '../../types/common-types'

export default function DefaultProviders({ children }: ICustomComponentProps) {
  const client = new QueryClient()

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
