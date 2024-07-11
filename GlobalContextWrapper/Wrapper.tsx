'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfirmProvider } from "material-ui-confirm";


function GlobalContextWrapper({ children }: { children: JSX.Element }) {

  const queryClient = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ConfirmProvider>
          {children}
        </ConfirmProvider>
      </QueryClientProvider>
    </div>
  )
}

export default GlobalContextWrapper