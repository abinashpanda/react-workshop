import clsx from 'clsx'
import React, { Children, cloneElement, useState } from 'react'
import Option from './components/option'

function modulus(a: number, b: number) {
  return ((a % b) + b) % b
}

type SelectProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Select({ children, className, style }: SelectProps) {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  // calculate total options using Children.count from React utils
  const totalOptions = Children.count(children)

  return (
    <div
      className={clsx('rounded-md border p-4', className)}
      // to make it focusable
      tabIndex={0}
      style={style}
      onMouseLeave={() => {
        setActiveIndex(undefined)
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowDown') {
          setActiveIndex((prevIndex) => {
            if (prevIndex === undefined) {
              return 0
            }
            return modulus(prevIndex + 1, totalOptions)
          })
        }
        if (event.key === 'ArrowUp') {
          setActiveIndex((prevIndex) => {
            if (prevIndex === undefined) {
              return 0
            }
            return modulus(prevIndex - 1, totalOptions)
          })
        }
      }}
    >
      {Children.toArray(children).map((child, index) => {
        // @ts-expect-error
        const isOption = child.type === Option
        if (!isOption) {
          return null
        }

        const isActive = index === activeIndex

        // @ts-expect-error
        return cloneElement(child, {
          isActive,
          onMouseEnter: () => {
            setActiveIndex(index)
          },
        })
      })}
    </div>
  )
}
