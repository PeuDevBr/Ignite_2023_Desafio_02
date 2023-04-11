import { LocationContainer, NavBarContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { DeliveryContext } from '../../contexts/DeliveryContext'

export function NavBar() {
  const { cartList } = useContext(DeliveryContext)

  function showCartContIcon() {
    if (cartList.length > 0) {
      return (
        <div className="cartCont">
          <span>{cartList.length}</span>
        </div>
      )
    }
  }
  return (
    <div>
      <NavBarContainer>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="" />
        </NavLink>
        <div>
          <LocationContainer>
            <MapPin size={24} color="#8047FB" weight="fill" />
            <span>Arapiraca, AL</span>
          </LocationContainer>
          <NavLink className="cartContainer" to="/cart" title="Cart">
            <ShoppingCart size={24} color="#c47f17" weight="fill" />
          </NavLink>

          {showCartContIcon()}
        </div>
      </NavBarContainer>
    </div>
  )
}
