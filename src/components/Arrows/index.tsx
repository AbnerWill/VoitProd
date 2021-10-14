export function PrevArrow(props): JSX.Element {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src="/arrowLeft.svg" alt="Arrow left" />
    </div>
  )
}

export function NextArrow(props): JSX.Element {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src="/arrowRight.svg" alt="Arrow right" />
    </div>
  )
}
