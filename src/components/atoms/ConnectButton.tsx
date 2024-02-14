import { ConnectButton } from '@rainbow-me/rainbowkit'
import Button from '../atoms/Button'
import React, { useEffect } from 'react'
import { useAccount, useSignMessage } from 'wagmi'
import { useAuthRequestChallengeEvm } from '@moralisweb3/next'
import { signIn, useSession } from 'next-auth/react'

export const ConnectionButton = () => {
  const { signMessageAsync } = useSignMessage()
  const { requestChallengeAsync } = useAuthRequestChallengeEvm()
  const { isConnected, address, chain } = useAccount()
  const { status } = useSession()

  useEffect(() => {
    const handleAuth = async () => {
      const { message } = (await requestChallengeAsync({
        address: address || '',
        chainId: chain?.id ?? 1,
      }).catch(() => {
        console.log('Failed to request challenge')
      })) || { message: 'Failed to request challenge', id: '', profileId: '' }

      console.log('message', message)

      const signature = await signMessageAsync(
        {
          account: address,
          message,
        },
        {
          onSuccess: (data, variables, context) => {
            console.log('onSuccess data', data)
          },
          onError: (error, variables, context) => {
            console.log('error', error)
          },
          onSettled: (data, error, variables) => {
            console.log('onSettled data', data)
          },
        }
      )
      await signIn('moralis-auth', {
        message,
        signature,
        redirect: false,
      })
    }

    if (status === 'unauthenticated' && isConnected) {
      handleAuth()
    }
  }, [status, isConnected])

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        console.log('ready', ready)
        console.log('account', account)
        console.log('chain', chain)

        return (
          <div>
            <div className="flex h-[56px] items-center gap-2">
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <div
                        className="cursor-pointer"
                        onClick={openConnectModal}
                      >
                        <Button title="Connect Wallet" />
                      </div>
                    )
                  }

                  return (
                    <div style={{ display: 'flex', gap: 12 }}>
                      <button onClick={openAccountModal} type="button">
                        <div className="flex h-[46px] gap-2">
                          <div>
                            <p className="font-pathwayExtreme truncate text-right text-[17px] text-white">
                              Thomas Guntenaar
                            </p>
                            <div className="flex gap-1">
                              <p className="text-logo-violet truncate text-[12px] underline">
                                Beginner
                              </p>
                              <p className="font-pathwayExtreme truncate text-nowrap text-[12px] text-[#fff] opacity-50">
                                LVL 1
                              </p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
