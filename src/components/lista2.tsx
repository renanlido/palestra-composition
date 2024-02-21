/* eslint-disable import/no-unresolved */
import { cn } from '../cn'

import { Lista, type ListaProps } from './lista'

type ListaProps2 = {
  cocoDeGalinha: string
} & ListaProps

export const Lista2 = ({ children, className }: ListaProps2) => {
  return (
    <>
      <Lista className={cn('rounded-md', className)}> {children}</Lista>
    </>
  )
}
