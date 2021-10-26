export function PrevArrow(props): JSX.Element {
  const { className, style, onClick, insetLeft } = props
  return (
    <img
      src="/arrowLeft.svg"
      alt="Arrow left"
      className={className}
      style={{ ...style, left: insetLeft ? '-5rem' : '' }}
      onClick={onClick}
    />
  )
}

export function NextArrow(props): JSX.Element {
  const { className, style, onClick, insetRight } = props
  return (
    <img
      src="/arrowRight.svg"
      alt="Arrow right"
      className={className}
      style={{ ...style, right: insetRight ? '-5rem' : '' }}
      onClick={onClick}
    />
  )
}
