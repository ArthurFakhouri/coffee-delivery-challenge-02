import coffeeDeliveryIntroImg from '../../../../assets/HomeIntroImage.png'
import homeIntroBackground from '../../../../assets/HomeIntroBackground.png'
import { Background, IntroContainer, Items, Main, Title } from './styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Intro() {

    return (
        <IntroContainer>
            <aside>
                <img src={coffeeDeliveryIntroImg} />
            </aside>
            <Main>
                <Title>
                    <strong>Encontre o café perfeito para qualquer hora do dia</strong>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                </Title>
                <Items>
                    <span><div><ShoppingCart weight='fill' /></div>Compra simples e segura</span>
                    <span><div><Package weight='fill' /></div>Embalagem mantém o café intacto</span>
                    <span><div><Timer weight='fill' /></div>Entrega rápida e rastreada</span>
                    <span><div><Coffee weight='fill' /></div>O café chega fresquinho até você</span>
                </Items>
                <Background src={homeIntroBackground} />
            </Main>
        </IntroContainer>
    )
}