interface CategoryIconProps {
  icon: string
}

export function CategoryIcon({ icon }: CategoryIconProps) {
  if (icon === '19') return <span className="ico-circle-19">19</span>
  return <span aria-hidden="true">{icon}</span>
}
