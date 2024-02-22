/* eslint-disable import/no-unresolved */
import { cn } from '../cn'

export type ListaProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Lista = ({ children, className, ...props }: ListaProps) => {
  return (
    <div
      className={cn(
        'w-[200px] bg-slate-500 px-2  flex flex-col gap-2',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
