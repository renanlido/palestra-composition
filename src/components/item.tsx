type ItemProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Item = ({ children, ...props }: ItemProps) => {
  return (
    <div className="px-4 py-2 bg-red-500" {...props}>
      {children}
    </div>
  )
}
