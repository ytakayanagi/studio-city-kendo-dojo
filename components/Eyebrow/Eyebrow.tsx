import { cx } from '../../lib/cx'

type EyebrowProps = {
  children: React.ReactNode
  dark?: boolean
  className?: string
}

const Eyebrow = ({ children, dark, className }: EyebrowProps): React.JSX.Element => (
  <p
    className={cx(
      'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]',
      dark
        ? 'bg-white/5 text-blue-400 ring-1 ring-inset ring-white/15'
        : 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100',
      className,
    )}
  >
    <span
      aria-hidden="true"
      className={cx(
        'h-1.5 w-1.5 rounded-full',
        dark ? 'bg-blue-500' : 'bg-blue-600',
      )}
    />
    {children}
  </p>
)

export default Eyebrow
