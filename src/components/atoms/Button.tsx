import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

type ButtonProps = {
  small?: boolean
  chevron?: boolean
  title?: string
  children?: React.ReactNode
  href?: string
}

function Button(props: ButtonProps) {
  return props.href ? (
    <Link href={props.href}>
      <InnerButton {...props} />
    </Link>
  ) : (
    <InnerButton {...props} />
  )
}

function InnerButton({
  small = false,
  chevron = false,
  title,
  children,
  href,
}: ButtonProps) {
  return (
    <div
      className={`flex items-center justify-center ${small ? 'h-8' : 'h-10'}`}
    >
      <div
        className={`border-violet bg-violet/60 flex h-full items-center justify-center border-y border-solid text-white
         ${small ? 'p-2 text-sm' : 'p-3 text-base'} `}
      >
        {title ? (
          <>
            <h2 className="text-nowrap">{title}</h2>

            {chevron && (
              <ChevronRightIcon
                className="ml-1 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
            )}
          </>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export default Button
