interface ChipProps {
  label: string
  variant?: 'accent' | 'primary'
}

export default function Chip({ label, variant = 'accent' }: ChipProps) {
  return <span className={`chip chip--${variant}`}>{label}</span>
}
