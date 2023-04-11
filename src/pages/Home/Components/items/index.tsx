import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { ItemDiv } from './styles'

interface ItemsProps {
  color: string
  text: string
  image: string
}

export function Items({ color, text, image }: ItemsProps) {
  function ShowIcon() {
    switch (image) {
      case 'ShoppingCart':
        return <ShoppingCart color="#FFFFFF" weight="fill" />

      case 'Package':
        return <Package color="#FFFFFF" weight="fill" />

      case 'Timer':
        return <Timer color="#FFFFFF" weight="fill" />

      case 'Coffee':
        return <Coffee color="#FFFFFF" weight="fill" />
    }
  }
  return (
    <ItemDiv>
      <div style={{ background: color }}>{ShowIcon()}</div>
      <span>{text}</span>
    </ItemDiv>
  )
}
