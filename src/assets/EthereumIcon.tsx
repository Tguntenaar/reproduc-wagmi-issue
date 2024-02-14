import React from 'react'
import { IconProps } from '../types'

export default function EthereumIcon({
  width = 14,
  height = 23,
  color = '#fff',
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.500505 11.7124L7.49795 0L14.4952 11.7124L14.4958 11.7127L14.4955 11.7129L14.4957 11.7133L7.49795 15.886V15.886L7.49793 15.886L7.49792 15.886L0.5 11.7133L0.500271 11.7128L0.5 11.7127L0.500505 11.7124ZM7.49772 23.0003L0.5 13.0527L7.49789 17.2233L14.4999 13.0527L7.49795 23.0004V23.0006L7.49789 23.0005L7.49783 23.0006L7.49772 23.0003Z"
        fill={color}
      />
    </svg>
  )
}
