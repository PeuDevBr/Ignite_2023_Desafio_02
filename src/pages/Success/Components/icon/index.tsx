import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { IconDiv } from './styles'

interface ItemsProps {
  color: string
  image: string
}

export function Icon({ color, image }: ItemsProps) {
  function ShowIcon() {
    switch (image) {
      case 'MapPin':
        return <MapPin color="#FFFFFF" weight="fill" />

      case 'CurrencyDollar':
        return <CurrencyDollar color="#FFFFFF" weight="fill" />

      case 'Timer':
        return <Timer color="#FFFFFF" weight="fill" />
    }
  }
  return <IconDiv style={{ background: color }}>{ShowIcon()}</IconDiv>
}
