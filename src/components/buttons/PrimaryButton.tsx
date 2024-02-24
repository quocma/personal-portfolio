import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

type PrimaryButtonProps = {
  className?: string
  name?: string
  icon?: ReactNode
}

const PrimaryButton = ({ className, icon, name }:PrimaryButtonProps) => {
  return (
    <button className={twMerge(
      'bg-c3-main text-white',
      'min-40 flex items-center justify-center p-4 gap-1',
      'rounded-md',
      className
    )}>
      {icon}
      <span>{name}</span>
    </button>
  )
}

export default PrimaryButton