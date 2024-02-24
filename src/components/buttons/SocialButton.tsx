import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SocialButtonProps = {
  className?: string
  icon: ReactNode
  link?: string
}

const SocialButton = ({ className, icon, link }: SocialButtonProps) => {
  return (
    <div className={twMerge(
      'w-10 h-10 flex items-center justify-center rounded-md bg-c4-main',
      'hover:bg-c3-main hover:text-white',
      className
    )}>
      <a href={link} target='_blank'>
        {icon}
      </a>
    </div>
  )
}

export default SocialButton