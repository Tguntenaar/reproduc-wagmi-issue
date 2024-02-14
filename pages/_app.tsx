import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import type { AppProps } from 'next/app'
import { WagmiProvider, http } from 'wagmi'
import { mainnet, coreDao } from 'wagmi/chains'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const wagmiConfig = getDefaultConfig({
  appName: 'App name',
  projectId: '236ed76226ce6683c28b571111b42027',
  chains: [coreDao, mainnet],
  transports: {
    [mainnet.id]: http(),
  },
})

const queryClient = new QueryClient()

function FullForceApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session
}>) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <NextUIProvider>
              <Component {...pageProps} />
            </NextUIProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </SessionProvider>
    </WagmiProvider>
  )
}

export default FullForceApp
