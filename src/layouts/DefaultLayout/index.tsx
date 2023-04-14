import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import MadeBy from '../../components/MadeBy'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <MadeBy />
    </LayoutContainer>
  )
}
