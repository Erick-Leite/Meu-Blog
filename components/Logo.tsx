import { SVGProps } from 'react'

type LogoProps = SVGProps<SVGSVGElement> & {
  className?: string
}

const Logo: React.FC<LogoProps> = ({
  className = 'fill-current text-cyan-800 hover:text-cyan-900 dark:text-cyan-200 hover:dark:text-cyan-100 size-[3.125rem]',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="344.56 330.28 111.74 91.22"
    className={className}
    {...props}
  >
    <defs>
      <path id="parallelogram1" d="M453.3 331.28V359.85L388.64 418.5V388.42L453.3 331.28Z" />
      <path id="parallelogram2" d="M410.23 331.28V359.85L345.56 418.5V388.42L410.23 331.28Z" />
      <linearGradient
        id="grad"
        gradientUnits="userSpaceOnUse"
        x1={420.97}
        y1={331.28}
        x2={420.97}
        y2={418.5}
      >
        <stop offset="0%" stopColor="currentColor" stopOpacity={0.5} />
        <stop offset="100%" stopColor="currentColor" stopOpacity={1} />
      </linearGradient>
    </defs>
    <g>
      <use href="#parallelogram1" fill="url(#grad)" />
      <use href="#parallelogram2" fill="url(#grad)" />
    </g>
  </svg>
)

export default Logo
