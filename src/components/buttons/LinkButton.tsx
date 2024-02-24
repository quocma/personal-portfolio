import { ReactNode } from "react"
import Link from 'next/link';
import { twMerge } from 'tailwind-merge'

type LinkButtonProps = {
  name?: string
  href: string
  icon: ReactNode
  className?: string
}

const LinkButton = ({ icon, name, href, className } : LinkButtonProps) => {
  return (
    <div className={twMerge(
      'hover:cursor-pointer rounded-[10px] bg-white text-c2-main hover:bg-c3-main hover:text-white',
      className
    )}>
      <div className="p-2 flex items-center gap-0.5">
        {icon}
         <Link href={href}> { name } </Link>
      </div>
    </div>
  )
}

export default LinkButton