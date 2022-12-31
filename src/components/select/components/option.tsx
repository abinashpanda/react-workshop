import clsx from 'clsx'

type OptionProps = {
  value: string
  label: string
  isActive?: boolean
  onMouseEnter?: () => void
  className?: string
  style?: React.CSSProperties
}

export default function Option({ label, isActive, onMouseEnter, className, style }: OptionProps) {
  return (
    <div
      className={clsx('cursor-pointer rounded-md px-2 py-1 text-sm', isActive ? 'bg-gray-100' : undefined, className)}
      style={style}
      onMouseEnter={onMouseEnter}
    >
      {label}
    </div>
  )
}
