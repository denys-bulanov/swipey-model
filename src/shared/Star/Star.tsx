type StarProps = {
  size: string
  className: string
  opacity?: string
  style?: any
}

const Star = ({ size, className, opacity = '0.1', style }: StarProps) => (
  <svg className={`${size}  ${className}`} style={style} viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
    <path d='M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z' fill='#fff' fillOpacity={opacity} />
  </svg>
)

export default Star
