import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Rainbowkit App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-bold">
            <span className="to-blue-500 bg-clip-text">
              Get Started with Rainbow Kit 🌈🧰
            </span>
          </h1>
          <h3 className="mt-2 text-gray-400">
            Pre-installed NextJS (Typescript), TailwindCSS, Rainbowkit, Wagmi
          </h3>
          <div className="mt-4">
            <ConnectButton />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
