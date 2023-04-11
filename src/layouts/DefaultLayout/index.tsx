import { NavBar } from '../../Components/navbar'
import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <NavBar />
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
