import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, OutletFit } from './styles'

export function DefaultLayout() {

    const [mainWidth, setMainWidth] = useState(0);
    const mainContent = useRef(null)

    useEffect(() => {
        function handleResize() {
            if (mainContent.current)
                setMainWidth(mainContent.current['children'][0]['offsetWidth'])
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <LayoutContainer>
            <Header width={mainWidth} />
            <OutletFit ref={mainContent}>
                <Outlet />
            </OutletFit>
        </LayoutContainer>
    )
}