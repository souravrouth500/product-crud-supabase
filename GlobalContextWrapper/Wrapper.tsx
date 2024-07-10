'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function GlobalContextWrapper({ children }: {children: JSX.Element}) {

    const queryClient = new QueryClient()

  return (
    <div>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </div>
  )
}

export default GlobalContextWrapper