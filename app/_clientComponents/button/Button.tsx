'use client'
import React, { CSSProperties } from 'react'

type ButtonSize = CSSProperties['width']

export type AppButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  height?: ButtonSize
  width?: ButtonSize
  backgroundColor?: CSSProperties['backgroundColor']
  onClickFunction?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  height,
  width,
  backgroundColor,
  onClickFunction,
  style,
  type = 'button',
  onClick,
  children,
  ...rest
}: AppButtonProps) {
  const mergedStyle: CSSProperties = {
    height,
    width,
    backgroundColor,
    ...style,
  }

  return (
    <button
      type={type}
      onClick={onClickFunction ?? onClick}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </button>
  )
}
