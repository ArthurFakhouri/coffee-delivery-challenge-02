import { BorderWrap, Data, SuccessContainer } from "./styles";
import OrderPlacedImg from '../../assets/Illustration.png'
import { Content } from "./components/Content";

export function Success() {
    return (
        <SuccessContainer>
            <strong>Uhu! Pedido confirmado</strong>
            <span>Agora é só aguardar que logo o café chegará até você</span>

            <Data>
                <BorderWrap>
                    <Content />
                </BorderWrap>
                <img src={OrderPlacedImg} alt="A man delivering the order with his scooter" />
            </Data>
        </SuccessContainer>
    )
}