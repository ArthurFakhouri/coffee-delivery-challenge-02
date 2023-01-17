import coffeeDeliveryIntroImg from '../../../../assets/HomeIntroImage.png'
import homeIntroBackground from '../../../../assets/HomeIntroBackground.png'
import { Aside, Background, IntroContainer, Items, Main, Title } from './styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Intro() {

    return (
        <IntroContainer>
            <Aside>
                <img src={coffeeDeliveryIntroImg} width={476} height={360}
                 alt="A coffee cup with Logo sticked on the cup with yellow background and coffee beans" />
            </Aside>
            <Main>
                <Title>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </Title>
                <Items>
                    <span><div><ShoppingCart weight='fill' /></div>Compra simples e segura</span>
                    <span><div><Package weight='fill' /></div>Embalagem mantém o café intacto</span>
                    <span><div><Timer weight='fill' /></div>Entrega rápida e rastreada</span>
                    <span><div><Coffee weight='fill' /></div>O café chega fresquinho até você</span>
                </Items>
                <Background src={homeIntroBackground} alt="A blur with linear gradient between yellow and purple smooth" />
            </Main>
        </IntroContainer>
    )
}