import clsx from 'clsx'
import { ReactNode } from 'react'

interface TeclaProps {
  type?: 'Black' | 'Violet'
  children: ReactNode
  destaque?: 'White' | 'Violet'
}

export function Tecla({ type = 'Black', children, destaque = 'White' }: TeclaProps) {
  return (
    <div
      className={clsx(
        'w-16 h-16 rounded-full text-2xl bg-gradient-to-tl from-white/5 to-black/5 shadow-md flex justify-center items-center cursor-pointer hover:opacity-70',
        {
          'bg-gray-900': type === 'Black',
          'bg-violet-600': type === 'Violet',

          'text-gray-100': destaque === 'White',
          'text-violet-600': destaque === 'Violet'
        },
        destaque
      )}
    >
      {children}
    </div>
  )
}
