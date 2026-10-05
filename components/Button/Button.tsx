import Link from 'next/link'
import { cx } from '../../lib/cx'

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'light' | 'outline'
  className?: string
}

const variants = {
  primary:
    'bg-blue-700 text-white hover:bg-blue-600 focus-visible:outline-blue-600',
  light: 'bg-white text-blue-700 hover:bg-blue-50 focus-visible:outline-white',
  outline:
    'text-white ring-1 ring-inset ring-white/60 hover:bg-white/10 focus-visible:outline-white',
}

const Button = ({
  href,
  children,
  variant = 'primary',
  className,
}: ButtonProps): JSX.Element => {
  const isExternal = href.startsWith('http')
  const classes = cx(
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-semibold shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    variants[variant],
    className,
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

export default Button
