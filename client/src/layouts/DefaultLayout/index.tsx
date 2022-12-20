import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, OutletFit } from './styles'

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <OutletFit>
                <Outlet />
            </OutletFit>
        </LayoutContainer>
    )
}